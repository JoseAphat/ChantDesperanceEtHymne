// notesStorage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEY = "@notes_services";

export type SectionKey = "introduction" | "partie1" | "partie2" | "partie3";

export interface Chant {
  id: string | number;
  title: string;
  lyrics: string;
  category?: string;
  author?: string;
}

export interface Service {
  id: string;
  name: string;
  createdAt: string;
  pinned?: boolean;
  reminderAt?: string | null;
  sections: Record<SectionKey, Chant[]>;
}

/* ---------------- Helpers lecture/écriture + sérialisation ---------------- */

const readServices = async (): Promise<Service[]> => {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as Service[]) : [];
};

const writeServices = async (services: Service[]) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(services));
};

// File d'attente pour sérialiser les écritures (évite les écrasements concurrents)
let _queue: Promise<unknown> = Promise.resolve();
const enqueue = <T>(task: () => Promise<T>): Promise<T> => {
  _queue = _queue.then(task, task); // enchaîne même si la tâche précédente a échoué
  return _queue as Promise<T>;
};

// Clé composite pour distinguer deux chants qui partagent le même id dans des catégories différentes
const keyFor = (c: Chant) =>
  `${(c.category ?? "uncat").toLowerCase()}::${String(c.id)}`;

/* ----------------------- API publique corrigée ----------------------------- */

/** Append en lot (sans limite), dédup par clé composite (category+id), écriture sérialisée */
export async function appendChantsToService(
  serviceId: string,
  section: SectionKey,
  newChants: Chant[]
): Promise<{ ok: boolean; error?: string; count?: number }> {
  return enqueue(async () => {
    try {
      const services = await readServices();
      const idx = services.findIndex((s) => s.id === serviceId);
      if (idx === -1) return { ok: false, error: "Service introuvable" };

      const current = services[idx];

      // sections sûres (évite undefined)
      const safeSections: Record<SectionKey, Chant[]> = {
        introduction: current.sections?.introduction ?? [],
        partie1: current.sections?.partie1 ?? [],
        partie2: current.sections?.partie2 ?? [],
        partie3: current.sections?.partie3 ?? [],
      };

      // dédup: garder existant + nouveaux, sans plafond
      const byKey = new Map<string, Chant>();
      for (const c of safeSections[section]) byKey.set(keyFor(c), c);
      for (const c of newChants) byKey.set(keyFor(c), c);

      const merged = Array.from(byKey.values());

      const next: Service = {
        ...current,
        sections: { ...safeSections, [section]: merged },
      };

      const out = [...services];
      out[idx] = next;

      await writeServices(out);
      return { ok: true, count: merged.length };
    } catch (e: any) {
      return { ok: false, error: e?.message ?? "Erreur inconnue" };
    }
  });
}

/** Ajout unitaire sécurisé (wrap autour du batch) */
export async function addChantToService(
  serviceId: string,
  section: SectionKey,
  chant: Chant
): Promise<{ ok: boolean; error?: string; count?: number }> {
  return appendChantsToService(serviceId, section, [chant]);
}
