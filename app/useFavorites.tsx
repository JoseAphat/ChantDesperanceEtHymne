import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { auth } from "../services/firebaseConfig";
import app from "../services/firebaseConfig";

interface FavoriteSong {
  id: string;
  title: string;
  lyrics: string;
  category: string;
  type?: string;
  originalId?: string;
}

interface UseFavoritesReturn {
  addFavorite: (song: FavoriteSong) => Promise<void>;
  getFavorites: () => Promise<FavoriteSong[]>;
  removeFavorite: (songId: string) => Promise<void>;
}

const db = getFirestore(app);

const useFavorites = (): UseFavoritesReturn => {

  const addFavorite = async (song: FavoriteSong): Promise<void> => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Utilisateur non connecté");

      await setDoc(
        doc(db, "users", user.uid, "favorites", song.id),
        song
      );
    } catch (error) {
      console.error("Erreur lors de l'ajout aux favoris :", error);
    }
  };

  const getFavorites = async (): Promise<FavoriteSong[]> => {
    try {
      const user = auth.currentUser;
      if (!user) return [];

      const snapshot = await getDocs(
        collection(db, "users", user.uid, "favorites")
      );

      return snapshot.docs.map(doc => doc.data() as FavoriteSong);
    } catch (error) {
      console.error("Erreur lors de la récupération des favoris :", error);
      return [];
    }
  };

  const removeFavorite = async (songId: string): Promise<void> => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Utilisateur non connecté");

      await deleteDoc(
        doc(db, "users", user.uid, "favorites", songId)
      );
    } catch (error) {
      console.error("Erreur lors de la suppression du favori :", error);
    }
  };

  return { addFavorite, getFavorites, removeFavorite };
};

export default useFavorites;