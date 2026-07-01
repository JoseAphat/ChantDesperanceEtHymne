import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import useFavorites from "@/hooks/useFavorites";
import AdBanner from '@/components/AdBanner';
interface FavoriteSong {
  id: string;
  title: string;
  lyrics: string;
  category: string;
  type?: string;
  originalId?: string;
}

const FavoritesScreen: React.FC = () => {
  const router = useRouter();
  const { id, title, lyrics, category, type } = useLocalSearchParams();
  const { getFavorites } = useFavorites();
  const [favoritesFromChantsDetails, setFavoritesFromChantsDetails] = useState<FavoriteSong[]>([]);
  const [selectedSongs, setSelectedSongs] = useState<string[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchText, setSearchText] = useState("");
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const navigation = useNavigation();

  // ✅ Charger le thème sauvegardé
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("appTheme");
        if (savedTheme === "dark" || savedTheme === "light") {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.error("Erreur lors du chargement du thème:", error);
      }
    };
    loadTheme();
  }, []);

  // ✅ Configuration du header avec design amélioré
  useEffect(() => {
    navigation.setOptions({
      title: "Mes favoris",
      headerTitleStyle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 60,
        paddingBottom: 40,
      },
      headerStyle: {
        height: 200 + (Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) : 10),
        backgroundColor: "#0A1E42",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      headerTitleAlign: "center",
      headerRight: () => (
        <View style={{
          marginRight: 10,
          marginTop: 60,
        }}>
          <TouchableOpacity
            onPress={() => setIsSelectionMode(!isSelectionMode)}
            style={{ 
              padding: 4,
              bottom: 25
            }}
          >
            <Ionicons 
              name={isSelectionMode ? "close" : "checkmark-circle-outline"} 
              size={24} 
              color="white" 
            />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <View
          style={{
            marginLeft: 10,
            marginTop: 0,  
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });

    if (id && title) {
      if (category) {
        const songId = Array.isArray(id) ? id[0] : id;
        const songTitle = Array.isArray(title) ? title[0] : title;
        const songLyrics = Array.isArray(lyrics) ? lyrics[0] : lyrics || '';
        const songCategory = Array.isArray(category) ? category[0] : category;
        const songType = Array.isArray(type) ? type[0] : type || '';

        setFavoritesFromChantsDetails((prev) =>
          prev.some((song) => song.id === songId)
            ? prev
            : [...prev, { 
                id: songId, 
                title: songTitle, 
                lyrics: songLyrics, 
                category: songCategory,
                type: songType
              }]
        );
      }
    }
  }, [id, title, category, lyrics, type, navigation, isSelectionMode]);

  // ✅ Fonction pour récupérer les favoris
  const fetchFavorites = async () => {
    try {
      const existingFavorites: FavoriteSong[] = await getFavorites();
      if (existingFavorites) {
        const chantsDetails = existingFavorites.filter(
          (item) =>
            item.category &&
            !existingFavorites.some((fav) => fav.id === item.id && fav.type) 
        );
        setFavoritesFromChantsDetails(chantsDetails.reverse());
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des favoris :", error);
    }
  };

  // ✅ Appel initial de fetchFavorites
  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleRemoveSelected = async () => {
    try {
      console.log("Chansons sélectionnées pour suppression:", selectedSongs);

      for (const id of selectedSongs) {
        await removeFavorite(id);
        console.log(`Favori avec ID ${id} supprimé de la source persistante`);
      }

      const updatedChantsList = favoritesFromChantsDetails.filter(
        (song) => !selectedSongs.includes(song.id)
      );

      setFavoritesFromChantsDetails([...updatedChantsList]);
      setSelectedSongs([]);
      setIsSelectionMode(false);
      console.log("Sélection réinitialisée");
    } catch (error) {
      console.error("Erreur lors de la suppression des favoris :", error);
    }
  };

  const toggleSelection = (songId: string) => {
    if (!isSelectionMode) {
      setIsSelectionMode(true);
    }
    setSelectedSongs((prevSelected) =>
      prevSelected.includes(songId)
        ? prevSelected.filter((id) => id !== songId)
        : [...prevSelected, songId]
    );
  };

  const removeFavorite = async (id: string) => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      const parsedFavorites: FavoriteSong[] = favorites ? JSON.parse(favorites) : [];
      const updatedFavorites = parsedFavorites.filter((item) => item.id !== id);

      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      console.log(`Favori avec ID ${id} supprimé`);
    } catch (error) {
      console.error("Erreur lors de la suppression du favori :", error);
    }
  };

  // ✅ Fonction de recherche
  const filteredFavorites = favoritesFromChantsDetails.filter(song =>
    song.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={[staticStyles.container, { backgroundColor: theme === "dark" ? "#121212" : "#dfdedcf7" }]}>
      {/* ✅ Barre de recherche */}
      <AdBanner />
      <View style={[
        staticStyles.searchContainer,
        { backgroundColor: theme === "dark" ? "#1e1e1e" : "#ffffff" }
      ]}>
        <Ionicons 
          name="search" 
          size={20} 
          color={theme === "dark" ? "#bbb" : "#7f8c8d"} 
        />
        <TextInput
          style={[
            staticStyles.searchInput,
            { color: theme === "dark" ? "#fff" : "#333" }
          ]}
          placeholder="Rechercher dans mes favoris..."
          placeholderTextColor={theme === "dark" ? "#888" : "#bbb"}
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText("")}>
            <Ionicons 
              name="close-circle" 
              size={20} 
              color={theme === "dark" ? "#bbb" : "#7f8c8d"} 
            />
          </TouchableOpacity>
        )}
      </View>

      {/* ✅ Statistiques */}
      {filteredFavorites.length > 0 && (
        <View style={[
          staticStyles.statsContainer,
          { backgroundColor: theme === "dark" ? "#1e1e1e" : "#ffffff" }
        ]}>
          <Text style={[
            staticStyles.statsText,
            { color: theme === "dark" ? "#fff" : "#333" }
          ]}>
            {filteredFavorites.length} chant{filteredFavorites.length > 1 ? 's' : ''} favori{filteredFavorites.length > 1 ? 's' : ''}
          </Text>
          {isSelectionMode && (
            <Text style={[staticStyles.statsText, { color: "#0A1E42" }]}>
              {selectedSongs.length} sélectionné{selectedSongs.length > 1 ? 's' : ''}
            </Text>
          )}
        </View>
      )}

      <ScrollView contentContainerStyle={staticStyles.scrollViewContent}>
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((song, index) => (
            <View 
              key={index} 
              style={[
                staticStyles.favoriteItem,
                { backgroundColor: theme === "dark" ? "#2c2c2c" : "#ffffff" },
                selectedSongs.includes(song.id) && [
                  staticStyles.favoriteItemSelected,
                  { backgroundColor: theme === "dark" ? "#3a4a5c" : "#e3f2fd" }
                ]
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  if (isSelectionMode) {
                    toggleSelection(song.id);
                  } else {
                    router.push({
                      pathname: "/ChantDetails" as any,
                      params: {
                        id: song.originalId || song.id,
                        category: song.category,
                        title: song.title,
                        lyrics: song.lyrics,
                      },
                    });
                  }
                }}
                style={staticStyles.songTitleContainer}
              >
                <View style={staticStyles.songInfoContainer}>
                  <Ionicons 
                    name="musical-notes" 
                    size={20} 
                    color="#0A1E42" 
                    style={staticStyles.favoriteIcon}
                  />
                  <View style={staticStyles.songDetails}>
                    <Text style={[
                      staticStyles.songTitle,
                      { color: theme === "dark" ? "#fff" : "#2c3e50" }
                    ]}>
                      {song.title}
                    </Text>
                    <Text style={[
                      staticStyles.songCategory,
                      { color: theme === "dark" ? "#bbb" : "#7f8c8d" }
                    ]}>
                      {song.category}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => toggleSelection(song.id)}
                style={staticStyles.selectionButton}
              >
                {isSelectionMode ? (
                  <Ionicons
                    name={selectedSongs.includes(song.id) ? "checkbox" : "square-outline"}
                    size={28}
                    color={selectedSongs.includes(song.id) ? "#0A1E42" : theme === "dark" ? "#bbb" : "#7f8c8d"}
                  />
                ) : (
                  <Ionicons
                    name="heart"
                    size={24}
                    color="#e74c3c"
                  />
                )}
              </TouchableOpacity>
            </View>
          ))
        ) : favoritesFromChantsDetails.length === 0 ? (
          <View style={staticStyles.emptyContainer}>
            <Ionicons 
              name="heart-outline" 
              size={80} 
              color={theme === "dark" ? "#555" : "#bdc3c7"} 
              style={staticStyles.emptyIcon}
            />
            <Text style={[
              staticStyles.noFavoritesText,
              { color: theme === "dark" ? "#bbb" : "#7f8c8d" }
            ]}>
              Aucun favori pour le moment !
            </Text>
            <Text style={[
              staticStyles.noFavoritesSubtext,
              { color: theme === "dark" ? "#888" : "#95a5a6" }
            ]}>
              Ajoutez vos chants préférés en appuyant sur l'étoile dans les détails du chant.
            </Text>
          </View>
        ) : (
          <View style={staticStyles.emptyContainer}>
            <Ionicons 
              name="search" 
              size={60} 
              color={theme === "dark" ? "#555" : "#bdc3c7"} 
              style={staticStyles.emptyIcon}
            />
            <Text style={[
              staticStyles.noFavoritesText,
              { color: theme === "dark" ? "#bbb" : "#7f8c8d" }
            ]}>
              Aucun résultat trouvé
            </Text>
            <Text style={[
              staticStyles.noFavoritesSubtext,
              { color: theme === "dark" ? "#888" : "#95a5a6" }
            ]}>
              Essayez avec d&apos;autres mots-clés
            </Text>
          </View>
        )}
      </ScrollView>

      {/* ✅ Bouton de suppression amélioré */}
      {selectedSongs.length > 0 && (
        <View style={staticStyles.deleteButton}>
          <TouchableOpacity
            onPress={handleRemoveSelected}
            style={staticStyles.deleteButtonContent}
          >
            <Ionicons 
              name="trash" 
              size={20} 
              color="red" 
              style={staticStyles.deleteButtonIcon} 
            />
            <Text style={staticStyles.deleteButtonText}>
              Supprimer {selectedSongs.length} sélection{selectedSongs.length > 1 ? 's' : ''}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
  const staticStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchContainer: {
      margin: 16,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      flexDirection: "row",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    searchInput: {
      flex: 1,
      marginLeft: 12,
      fontSize: 16,
      fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },
    scrollViewContent: {
      paddingBottom: 100,
    },
    favoriteItem: {
      marginHorizontal: 16,
      marginVertical: 8,
      borderRadius: 16,
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      elevation: 6,
      shadowRadius: moderateScale(8),
          borderColor: "#0A1E42",
          borderLeftWidth: scale(3),
          borderRightWidth: scale(2),
    },
    favoriteItemSelected: {
      borderWidth: 2,
      borderColor: "#0A1E42",
    },
    songTitleContainer: {
      flex: 1,
      marginRight: 12,
    },
    songTitle: {
      fontSize: 15,
      color: "#0A1E42",
      marginBottom: 4,
      fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
      fontWeight: "bold",
    
    },
    songCategory: {
      fontSize: 14,
      fontStyle: "italic",
      color: "#0A1E42",
    },
    selectionButton: {
      padding: 8,
      borderRadius: 20,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 40,
      paddingTop: 60,
    },
    emptyIcon: {
      marginBottom: 20,
      opacity: 0.6,
    },
    noFavoritesText: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "500",
      marginBottom: 12,
    },
    noFavoritesSubtext: {
      fontSize: 16,
      textAlign: "center",
      lineHeight: 24,
    },
    deleteButton: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: "#0A1E42",
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    deleteButtonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    statsContainer: {
      margin: 16,
      marginTop: 0,
      padding: 16,
      borderRadius: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    statsText: {
      fontSize: 16,
      fontWeight: "500",
    },
    favoriteIcon: {
      marginRight: 8,
    },
    songInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    songDetails: {
      flex: 1,
    },
    deleteButtonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    deleteButtonIcon: {
      marginRight: 8,
    }
  });
export default FavoritesScreen;
