import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GoogleAuthProvider, signInWithCredential, signOut as firebaseSignOut, User } from "firebase/auth";
import { auth } from "./firebaseConfig";

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: "625574981121-kj4udftu7i7b76nlvnge1hmu74a4bke9.apps.googleusercontent.com", // À remplacer
});

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const { idToken } = await GoogleSignin.getTokens();

    if (!idToken) throw new Error("Pas de token Google");

    const credential = GoogleAuthProvider.credential(idToken);
    const result = await signInWithCredential(auth, credential);
    return result.user;
  } catch (error) {
    console.error("Erreur Google Sign-In:", error);
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await GoogleSignin.signOut();
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Erreur déconnexion:", error);
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
