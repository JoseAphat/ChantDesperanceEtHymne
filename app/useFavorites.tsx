// useFavorites.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFavorites = () => {
  const addFavorite = async (song) => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
      favorites.push(song);
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error("Erreur lors de l'ajout aux favoris :", error);
    }
  };

  const getFavorites = async () => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      return existingFavorites ? JSON.parse(existingFavorites) : [];
    } catch (error) {
      console.error("Erreur lors de la récupération des favoris :", error);
      return [];
    }
  };

  const removeFavorite = async (songId) => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      let favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
      favorites = favorites.filter(song => song.id !== songId);
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error("Erreur lors de la suppression du favori :", error);
    }
  };

  return { addFavorite, getFavorites, removeFavorite };
};

export default useFavorites;
