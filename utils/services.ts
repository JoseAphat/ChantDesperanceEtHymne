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

export async function addChantToService(
  serviceId: string,
  section: SectionKey,
  chant: Chant
): Promise<{ ok: boolean; error?: string }> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    const services: Service[] = raw ? JSON.parse(raw) : [];

    const idx = services.findIndex((s) => s.id === serviceId);
    if (idx === -1) {
      return { ok: false, error: "Service introuvable" };
    }

    const list = services[idx].sections[section] || [];
    const exists = list.some((c) => String(c.id) === String(chant.id));
    if (!exists) {
      services[idx].sections[section] = [...list, chant];
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(services));
    }

    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? "Erreur inconnue" };
  }
}
