import AsyncStorage from '@react-native-async-storage/async-storage';

// ✅ Interface pour typer les chansons favorites
interface FavoriteSong {
  id: string;
  title: string;
  lyrics: string;
  category: string;
  type?: string;
  originalId?: string;
}

// ✅ Interface pour le retour du hook
interface UseFavoritesReturn {
  addFavorite: (song: FavoriteSong) => Promise<void>;
  getFavorites: () => Promise<FavoriteSong[]>;
  removeFavorite: (songId: string) => Promise<void>;
}

const useFavorites = (): UseFavoritesReturn => {
  const addFavorite = async (song: FavoriteSong): Promise<void> => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const favorites: FavoriteSong[] = existingFavorites ? JSON.parse(existingFavorites) : [];
      favorites.push(song);
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error("Erreur lors de l'ajout aux favoris :", error);
    }
  };

  const getFavorites = async (): Promise<FavoriteSong[]> => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      return existingFavorites ? JSON.parse(existingFavorites) : [];
    } catch (error) {
      console.error("Erreur lors de la récupération des favoris :", error);
      return [];
    }
  };

  const removeFavorite = async (songId: string): Promise<void> => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      let favorites: FavoriteSong[] = existingFavorites ? JSON.parse(existingFavorites) : [];
      favorites = favorites.filter((song) => song.id !== songId);
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error("Erreur lors de la suppression du favori :", error);
    }
  };

  return { addFavorite, getFavorites, removeFavorite };
};

export default useFavorites;