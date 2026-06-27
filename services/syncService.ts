import { ref, set, get, onValue } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { database, auth } from "./firebaseConfig";

// Sauvegarde les données d'un utilisateur dans Firebase
export const syncToCloud = async (key: string, data: any): Promise<void> => {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const dbRef = ref(database, `users/${user.uid}/${key}`);
    await set(dbRef, data);
  } catch (error) {
    console.error("Erreur sync vers cloud:", error);
  }
};

// Charge les données depuis Firebase vers AsyncStorage
export const syncFromCloud = async (key: string): Promise<any> => {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    const dbRef = ref(database, `users/${user.uid}/${key}`);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      await AsyncStorage.setItem(key, JSON.stringify(data));
      return data;
    }
    return null;
  } catch (error) {
    console.error("Erreur sync depuis cloud:", error);
    return null;
  }
};

// Migre les données locales existantes vers Firebase (premier login)
export const migrateLocalDataToCloud = async (): Promise<void> => {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const keys = [
      "@favorites",
      "@search_history_main",
      "@notes",
      "@cultes",
    ];

    for (const key of keys) {
      const localData = await AsyncStorage.getItem(key);
      if (localData) {
        const parsed = JSON.parse(localData);
        await syncToCloud(key, parsed);
        console.log(`Migré: ${key}`);
      }
    }
    console.log("Migration terminée !");
  } catch (error) {
    console.error("Erreur migration:", error);
  }
};

// Écoute les changements en temps réel depuis Firebase
export const listenToUserData = (
  key: string,
  callback: (data: any) => void
): (() => void) => {
  const user = auth.currentUser;
  if (!user) return () => {};

  const dbRef = ref(database, `users/${user.uid}/${key}`);
  const unsubscribe = onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    }
  });

  return unsubscribe;
};
