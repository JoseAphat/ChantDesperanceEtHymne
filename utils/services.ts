// utils/services.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@notes_services";

export type SectionKey = "introduction" | "partie1" | "partie2" | "partie3";

export interface Chant {
  id: string | number;
  title: string;
  lyrics: string;
  category: string;
  uniqueKey?: string;
}

export interface Service {
  id: string;
  name: string;
  createdAt: string;
  pinned?: boolean;
  reminderAt?: string | null;
  sections: Record<SectionKey, Chant[]>;
}

// Fonction pour générer une clé vraiment unique
const generateUniqueKey = () => {
  return `chant-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const addChantToService = async (
  serviceId: string,
  section: SectionKey,
  chant: Chant
): Promise<{ ok: boolean; error?: string }> => {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    const services: Service[] = raw ? JSON.parse(raw) : [];

    const serviceIndex = services.findIndex(s => s.id === serviceId);
    if (serviceIndex === -1) {
      return { ok: false, error: "Service non trouvé" };
    }

    const service = services[serviceIndex];
    
    // CRITIQUE : Créer une NOUVELLE instance du chant avec une clé unique
    const newChant: Chant = {
      ...chant,
      uniqueKey: generateUniqueKey() // Toujours générer une nouvelle clé unique
    };

    const updatedService: Service = {
      ...service,
      sections: {
        ...service.sections,
        [section]: [
          ...(service.sections[section] || []),
          newChant // Ajouter le NOUVEAU chant avec clé unique
        ]
      }
    };

    services[serviceIndex] = updatedService;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(services));

    return { ok: true };
  } catch (error) {
    console.error("Erreur ajout chant:", error);
    return { ok: false, error: "Erreur lors de l'ajout du chant" };
  }
};