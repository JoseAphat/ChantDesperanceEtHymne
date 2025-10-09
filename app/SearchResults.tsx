import { categoryMap } from "@/components/data/categoryMap";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
/*
import newCreole from "./ChantCreoleData";
import chantsC from "./ChantDC";
import englishSongs from "./ChantDE";
import chantsF from "./ChantDF";
import frenchSongs from "./ChoeurFr";
import echo from "./Echo";
import GloA from "./Gloire";
import HaitiC from "./Hait";
import HymneEtLouangeSongs from "./Hymne";
import CreoleSongs from "./KeKreyol";
import VoixC from "./LaVoixCreole";
import VoixF from "./LaVoixFrancais";
import MelodieC from "./MelC";
import MelodieF from "./MelF";
import OmbreF from "./OmbreReveil";
import ReveNC from "./ReveillonsCreole";
import ReveNF from "./ReveillonsFrancais";
import RevNC from "./ReveillonsNous";

// Types pour les catégories
type CategoryKey =
  | "Chant d'Esperance Créole"
  | "Chant d'Esperance Francais"
  | "Réveillons-Nous Français"
  | "Mélodies Joyeuses Français"
  | "Mélodies Joyeuses Créole"
  | "Réveillons-Nous Chrétiens"
  | "Réveillons-Nous Créole"
  | "La Voix du Réveil Français"
  | "La Voix du Réveil Créole"
  | "L'ombre du Réveil"
  | "Haïti Chante avec Radio Lumière"
  | "Gloire à l'Agneau"
  | "Écho des Élus"
  | "Chœurs Créole"
  | "Hymne Et Louange"
  | "Choeurs Anglais"
  | "Nouveaux Chants Créole"
  | "Choeurs Français";

// Définir la carte des catégories
/*
const categoryMap: Record<CategoryKey, any[]> = {
  "Chant d'Esperance Créole": chantsC,
  "Chant d'Esperance Francais": chantsF,
  "Réveillons-Nous Français": ReveNF,
  "Mélodies Joyeuses Français": MelodieF,
  "Mélodies Joyeuses Créole": MelodieC,
  "Réveillons-Nous Chrétiens": RevNC,
  "Réveillons-Nous Créole": ReveNC,
  "La Voix du Réveil Français": VoixF,
  "La Voix du Réveil Créole": VoixC,
  "L'ombre du Réveil": OmbreF,
  "Haïti Chante avec Radio Lumière": HaitiC,
  "Gloire à l'Agneau": GloA,
  "Écho des Élus": echo,
  "Chœurs Créole": CreoleSongs,
  "Hymne Et Louange": HymneEtLouangeSongs,
  "Nouveaux Chants Créole": newCreole,
  "Choeurs Français": frenchSongs,
  "Choeurs Anglais":englishSongs,
};*/

const SearchResults: React.FC = () => {
  const { id, previousTitle = "" } = useLocalSearchParams();
  const router = useRouter();
  const { results: resultsString, category = "" } = useLocalSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const categoryTitle = categoryMap[category as CategoryKey] ? category : "Recherche";
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/ic_launcher_foreground.png")}
            style={{ width: 70, height: 70, marginRight: 10 }}
          />
          <Text style={{ color: "white", fontSize: 17 }}>
            {categoryTitle}
          </Text>
        </View>
      ),
      headerStyle: { height: 100, backgroundColor: "#0A1E42" },
      headerTitleAlign: "center",
      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, category]);

  // Désérialisation des résultats
  let results = [];
  try {
    results = JSON.parse(resultsString as string);
  } catch (error) {
    console.error("Erreur lors du parsing JSON:", error);
  }

  // Vérification des résultats
  const validatedResults = Array.isArray(results) ? results : [];

  // Filtrer les résultats
  const filteredItems = validatedResults.filter(
    (chant) =>
      chant.id.toString().startsWith(searchTerm) || // Recherche partielle par ID
      chant.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) // Recherche par titre
  );

  const handlePress = useCallback(
  (id: number, title: string, lyrics: string, category: string) => {
    try {
      // ✅ Vérification des paramètres
      if (!id || !title || !category) {
        console.error("❌ Paramètres manquants :", { id, title, category });
        return;
      }

      // ✅ Vérification que la catégorie existe bien
      if (!categoryMap.hasOwnProperty(category)) {
        console.error(`❌ Catégorie invalide pour la chanson avec ID : ${id}`);
        return;
      }

      // ✅ Préparer les paramètres de navigation
      const navigationParams = {
        id: String(id), // toujours string pour éviter les bugs
        title: title.substring(0, 500), // limite pour éviter crash
        lyrics: lyrics?.substring(0, 10000) || "Paroles non disponibles", // fallback
        category: category,
        previousTitle: category,
      };

      // ✅ Navigation principale
      router.push({
        pathname: "ChantDetails",
        params: navigationParams,
      });
    } catch (error) {
      console.error("⚠️ Erreur lors de la navigation :", error);

      // 🔄 Fallback : si jamais la navigation échoue
      try {
        router.replace({
          pathname: "ChantDetails",
          params: {
            id: String(id),
            title: encodeURIComponent(title),
            lyrics: encodeURIComponent(lyrics),
            category: encodeURIComponent(category),
            previousTitle: encodeURIComponent(category),
          },
        });
      } catch (fallbackError) {
        console.error("⚠️ Erreur dans la navigation fallback :", fallbackError);

        // 🚨 Dernier recours : navigation en query string basique
        router.push(`/ChantDetails?id=${id}&category=${encodeURIComponent(category)}`);
      }
    }
  },
  [router]
);
  // 🆕 Alternative: Méthode avec stockage temporaire (si les paramètres sont trop volumineux)
  const handlePressWithStorage = useCallback(async (id: number, title: string, lyrics: string, category: string) => {
    try {
      // Stocker les données temporairement
      const tempData = {
        id,
        title,
        lyrics,
        category,
        previousTitle: category,
        timestamp: Date.now()
      };

      await AsyncStorage.setItem(`temp_chant_${id}`, JSON.stringify(tempData));

      // Navigation avec seulement l'ID et la catégorie
      router.push({
        pathname: "ChantDetails",
        params: {
          id: String(id),
          category: category,
          useStorage: "true" // Flag pour indiquer d'utiliser le stockage
        }
      });

    } catch (error) {
      console.error("Erreur lors de la navigation avec stockage:", error);
      // Fallback vers la méthode normale
      handlePress(id, title, lyrics, category);
    }
  }, [handlePress, router]);

  const renderItem = ({ item }: { item: { id: number; title: string; lyrics: string; category: string } }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handlePress(item.id, item.title, item.lyrics, item.category)}
      // 🆕 Ajout de activeOpacity pour améliorer la réactivité sur anciennes versions
      activeOpacity={0.7}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemCategory}>
        {item.category}
      </Text>
    </TouchableOpacity>
  );

  const handleSearch = async () => {
    setIsLoading(true);
    // Simuler une recherche longue
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Tapez des paroles pour une recherche plus rapide !"
        placeholderTextColor={"gray"}
        style={styles.searchInput}
      />
      {isLoading && <ActivityIndicator size="large" color="#1C1362" />}
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        // 🆕 Optimisations pour meilleures performances sur anciennes versions
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={10}
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={styles.emptyText}>Aucun résultat trouvé.</Text>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => setSearchTerm("")}
            >
              <Text style={{ color: "white" }}>Réinitialiser la recherche</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: moderateScale(20),
  },
  searchInput: {
    borderWidth: scale(1),
    borderColor: "#ccc",
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(15),
    backgroundColor: "#fff",
    fontSize: moderateScale(12),
    padding: moderateScale(10),
  },
  listContainer: {
    paddingBottom: verticalScale(20),
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: moderateScale(16),
    marginVertical: verticalScale(8),
    marginHorizontal: scale(12),
    borderRadius: moderateScale(8),
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.5,
    shadowRadius: moderateScale(4),
    borderColor: "red",
    borderLeftWidth: scale(3),
    borderRightWidth: scale(2),
  },
  itemTitle: {
    fontSize: moderateScale(17),
    fontWeight: "bold",
    color: "#0A1E42",
    bottom: verticalScale(5),
  },
  emptyText: {
    textAlign: "center",
    marginTop: verticalScale(20),
    fontSize: moderateScale(16),
    color: "#777",
  },
  itemCategory: {
    fontSize: moderateScale(14),
    color: "red",
    marginTop: verticalScale(5),
    marginLeft: scale(0),
    fontStyle: "italic",
    textAlign: "center",
    top: verticalScale(5),
  },
  resetButton: {
    marginTop: verticalScale(10),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    backgroundColor: "#1C1362",
    borderRadius: moderateScale(5),
  },
});

export default SearchResults;
