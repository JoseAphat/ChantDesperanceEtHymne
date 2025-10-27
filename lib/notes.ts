// lib/notes.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export type SectionKey = "introduction" | "partie1" | "partie2" | "partie3";

export interface Chant {
  id: string | number;
  title: string;
  lyrics: string;
  category?: string;
}

export type NotesState = Record<SectionKey, Chant[]>;

export const getNotes = async (): Promise<NotesState> => {
  const raw = await AsyncStorage.getItem("@notes_sections");
  return raw
    ? JSON.parse(raw)
    : { introduction: [], partie1: [], partie2: [], partie3: [] };
};

export const setNotes = async (state: NotesState) => {
  await AsyncStorage.setItem("@notes_sections", JSON.stringify(state));
};

export const addChantToSection = async (
  chant: Chant,
  section: SectionKey,
  defaultCategory?: string
) => {
  try {
    const state = await getNotes();
    const arr = state[section] || [];
    const exists = arr.some((c) => c.id.toString() === chant.id.toString());
    if (exists) {
      Alert.alert("Notes", "Ce chant est déjà dans cette section.");
      return { ok: false, duplicate: true };
    }
    const entry: Chant = { ...chant, category: chant.category ?? defaultCategory };
    state[section] = [...arr, entry];
    await setNotes(state);
    Alert.alert("Notes", "Chant ajouté à la section ✅");
    return { ok: true };
  } catch (e) {
    console.log("Erreur ajout notes:", e);
    Alert.alert("Erreur", "Impossible d’ajouter ce chant.");
    return { ok: false, error: true };
  }
};
