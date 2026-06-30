// utils/services.ts
import { auth, db } from "@/services/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
    const user = auth.currentUser;
    if (!user) {
      return { ok: false, error: "Utilisateur non connecté" };
    }

    const serviceRef = doc(db, "users", user.uid, "cultes", serviceId);
    const serviceSnap = await getDoc(serviceRef);

    if (!serviceSnap.exists()) {
      return { ok: false, error: "Service non trouvé" };
    }

    const service = serviceSnap.data() as Service;

    // CRITIQUE : Créer une NOUVELLE instance du chant avec une clé unique
    const newChant: Chant = {
      ...chant,
      uniqueKey: generateUniqueKey(),
    };

    const updatedService: Service = {
      ...service,
      sections: {
        ...service.sections,
        [section]: [
          ...(service.sections[section] || []),
          newChant,
        ],
      },
    };

    await setDoc(serviceRef, updatedService);

    return { ok: true };
  } catch (error) {
    console.error("Erreur ajout chant:", error);
    return { ok: false, error: "Erreur lors de l'ajout du chant" };
  }
};