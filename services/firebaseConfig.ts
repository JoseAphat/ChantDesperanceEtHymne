import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getAuth } from "firebase/auth";
// @ts-ignore
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import { getFirestore } from "firebase/firestore";
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

let app: any = null;
let auth: any = null;
let db: any = null;
let database: any = null;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
} catch (error) {
  console.error("Erreur initialisation Firebase app:", error);
}

try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {
  try {
    auth = getAuth(app);
  } catch (e) {
    console.error("Erreur initialisation Firebase auth:", e);
  }
}

try {
  db = getFirestore(app);
} catch (error) {
  console.error("Erreur initialisation Firestore:", error);
}

try {
  database = getDatabase(app);
} catch (error) {
  console.warn("Realtime Database non disponible:", error);
}

export { auth, db, database };
export default app;