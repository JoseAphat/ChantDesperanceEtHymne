import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ← ajouter
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBOoTn7x6SFiXZH5_-1HWgqxBf-2-VcIk",
  authDomain: "chantdesperance-e18b6.firebaseapp.com",
  databaseURL: "https://chantdesperance-e18b6-default-rtdb.firebaseio.com",
  projectId: "chantdesperance-e18b6",
  storageBucket: "chantdesperance-e18b6.firebasestorage.app",
  messagingSenderId: "625574981121",
  appId: "1:625574981121:web:6248d70b142c3b4a385a00",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// ✅ Protection contre l'initialisation en double
let database: any = null;
try {
  database = getDatabase(app);
} catch (error) {
  console.warn("Realtime Database non disponible:", error);
}

export { database };

// ✅ Firestore pour les favoris
export const db = getFirestore(app);

export default app;