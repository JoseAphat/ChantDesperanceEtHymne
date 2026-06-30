import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import AsyncStorage from '@react-native-async-storage/async-storage';
import chantsC from "./ChantDC";
import englishSongs from "./ChantDE";
import chantsF from "./ChantDF";
import frenchSongs from "./ChoeurFr";
import echo from "./Echo";
import GloA from "./Gloire";
import HaitiC from "./Hait";
import CreoleSongs from "./KeKreyol";
import VoixC from "./LaVoixCreole";
import VoixF from "./LaVoixFrancais";
import MelodieC from "./MelC";
import MelodieF from "./MelF";
import OmbreF from "./OmbreReveil";
import ReveNC from "./ReveillonsCreole";
import ReveNF from "./ReveillonsFrancais";
import RevNC from "./ReveillonsNous";

const SEARCH_HISTORY_KEY = '@search_history';
const MAX_HISTORY_ITEMS = 10;

const options = [
  {
    id: "1",
    title: "Chant d'Espérance Français",
    image: require("../assets/images/CE.png"),
  },
  {
    id: "3",
    title: "Chant d'Espérance Créole",
    image: require("../assets/images/CE.png"),
  },
  {
    id: "4",
    title: "Mélodies Joyeuses Français",
    image: require("../assets/images/Mjoyeuses.png"),
  },
  {
    id: "5",
    title: "Mélodies Joyeuses Créole",
    image: require("../assets/images/Mjoyeuses.png"),
  },
  {
    id: "6",
    title: "Réveillons-Nous Français",
    image: require("../assets/images/reveillons-nous.png"),
  },
  {
    id: "7",
    title: "Réveillons-Nous Créole",
    image: require("../assets/images/reveillons-nous.png"),
  },
  {
    id: "8",
    title: "La Voix du Réveil Français",
    image: require("../assets/images/VoixReve.png"),
  },
  {
    id: "9",
    title: "La Voix du Réveil Créole",
    image: require("../assets/images/VoixReve.png"),
  },
  {
    id: "10",
    title: "Réveillons-Nous Chrétiens",
    image: require("../assets/images/reveillons-nous-chretiens.png"),
  },
  {
    id: "11",
    title: "L'Ombre du Réveil",
    image: require("../assets/images/ombre-du-reveil.png"),
  },
  {
    id: "12",
    title: "Haïti Chante Avec Radio Lumière",
    image: require("../assets/images/haiti-chante.png"),
  },
  {
    id: "13",
    title: "Gloire à l'Agneau",
    image: require("../assets/images/gloireAgneau.png"),
  },
  {
    id: "14",
    title: "Écho des Élus",
    image: require("../assets/images/echo-des-elus.png"),
  },
];

const { width } = Dimensions.get("window");
const itemWidth = (width - 50) / 2;
type OptionTitle = (typeof options)[number]["title"];

const optionRoutes: Record<OptionTitle, string> = {
  "Chant d'Espérance Français": "ChantDesperanceFrancais",
  "Chant d'Espérance Créole": "ChantDesperanceCreole",
  "Mélodies Joyeuses Français": "MelodieJoyeusesFrancais",
  "Mélodies Joyeuses Créole": "MelodieJoyeusesCreole",
  "Réveillons-Nous Chrétiens": "ReveillonsNousChretiens",
  "Réveillons-Nous Français": "ReveillonsNousFrancais",
  "Réveillons-Nous Créole": "ReveillonsNousCreole",
  "La Voix du Réveil Français": "LaVoixDuReveilFrancais",
  "La Voix du Réveil Créole": "LaVoixDuReveilCreole",
  "L'Ombre du Réveil": "LombreDuReveil",
  "Haïti Chante Avec Radio Lumière": "HaitiChante",
  "Gloire à l'Agneau": "GloireAGneau",
  "Écho des Élus": "EchoDesElus",
};

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isSmallScreen = screenWidth < 400;
const isMediumScreen = screenWidth >= 400 && screenWidth < 768;
const isLargeScreen = screenWidth >= 768;

const responsiveScale = (size: number) => {
  if (isSmallScreen) return scale(size * 0.9);
  if (isMediumScreen) return scale(size);
  return scale(size * 1.1);
};

const responsiveVerticalScale = (size: number) => {
  if (isSmallScreen) return verticalScale(size * 0.9);
  if (isMediumScreen) return verticalScale(size);
  return verticalScale(size * 1.1);
};

const responsiveModerateScale = (size: number) => {
  if (isSmallScreen) return moderateScale(size * 0.9);
  if (isMediumScreen) return moderateScale(size);
  return moderateScale(size * 1.1);
};

const ChantDesperance: React.FC = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  
  const DASHES_RE = /[\u002D\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g;
  const DIACRITICS_RE = /[\u0300-\u036f]/g;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 40 : 30,
            height: 80,
          }}
        >
          <Text style={{ 
            color: "#0A1E42", 
            fontSize: responsiveModerateScale(17), 
            textAlign: "center",
            paddingHorizontal: 20,
          }}>
            Chant d&apos;Espérance
          </Text>
        </View>
      ),
      headerStyle: {
        height: Platform.OS === "android" ? 140 + (StatusBar.currentHeight ?? 0) : 140,
        backgroundColor: "#dfdedcf7",
        borderBottomWidth: 1,
        borderBottomColor: "#0A1E42",
      },
      headerTitleAlign: "center",
      headerLeft: () => (
        <View
          style={{
            marginLeft: 10,
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 40 : 35,
            height: 40,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={responsiveModerateScale(28)} color="#0A1E42" />
          </TouchableOpacity>
        </View>
      ),
    });
    
    loadSearchHistory();
  }, [navigation]);

  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'historique:', error);
    }
  };

  const saveToHistory = async (searchTerm: string) => {
    try {
      const trimmedTerm = searchTerm.trim();
      if (!trimmedTerm) return;

      let updatedHistory = [trimmedTerm];
      const filteredHistory = searchHistory.filter(item => item !== trimmedTerm);
      updatedHistory = [...updatedHistory, ...filteredHistory].slice(0, MAX_HISTORY_ITEMS);

      await AsyncStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(updatedHistory));
      setSearchHistory(updatedHistory);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'historique:', error);
    }
  };

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem(SEARCH_HISTORY_KEY);
      setSearchHistory([]);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'historique:', error);
    }
  };

  const removeHistoryItem = async (itemToRemove: string) => {
    try {
      const updatedHistory = searchHistory.filter(item => item !== itemToRemove);
      await AsyncStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(updatedHistory));
      setSearchHistory(updatedHistory);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'élément:', error);
    }
  };

  const normalizeText = (text: string): string =>
    text
      .toLowerCase()
      .replace(/œ/g, "oe").replace(/æ/g, "ae")
      .normalize("NFD").replace(DIACRITICS_RE, "")
      .replace(DASHES_RE, " ")
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .replace(/\s+/g, " ")
      .trim();

  const performSearch = (searchTerm: string) => {
    const isNumber = !isNaN(Number(searchTerm));
    let results: {
      id: string | number;
      type: string;
      title: string;
      lyrics: string;
      category: string;
    }[] = [];
    
    const normalizedInput = normalizeText(searchTerm);

    if (isNumber) {
      // Recherche par numéro
      const chantResults = chantsF.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...chantResults.map((song) => ({
          id: song.id,
          type: "Chant d'Esperance Francais",
          title: song.title,
          lyrics: song.lyrics,
          category: "Chant d'Esperance Francais",
        }))
      );
      const chantCResults = chantsC.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...chantCResults.map((song) => ({
          id: song.id,
          type: "ChantDesperanceCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "Chant d'Esperance Créole",
        }))
      );

      const melodieFResults = MelodieF.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...melodieFResults.map((song) => ({
          id: song.id,
          type: "MelodieFrancais",
          title: song.title,
          lyrics: song.lyrics,
          category: "Mélodies Joyeuses Français",
        }))
      );

      const melodieCResults = MelodieC.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...melodieCResults.map((song) => ({
          id: song.id,
          type: "MelodieJoyeuseCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "Mélodies Joyeuses Créole",
        }))
      );

      const ReveCResults = RevNC.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...ReveCResults.map((song) => ({
          id: song.id,
          type: "ReveillonsNousChretiens",
          title: song.title,
          lyrics: song.lyrics,
          category: "Réveillons-Nous Chrétiens",
        }))
      );

      const ReveNFResults = ReveNF.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...ReveNFResults.map((song) => ({
          id: song.id,
          type: "ReveillonsNousFrancais",
          title: song.title,
          lyrics: song.lyrics,
          category: "Réveillons-Nous Français",
        }))
      );

      const ReveNCResults = ReveNC.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...ReveNCResults.map((song) => ({
          id: song.id,
          type: "ReveillonsNousCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "Réveillons-Nous Créole",
        }))
      );

      const VoixFResults = VoixF.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...VoixFResults.map((song) => ({
          id: song.id,
          type: "LaVoixDuReveilFrancais",
          title: song.title,
          lyrics: song.lyrics,
          category: "La Voix du Réveil Français",
        }))
      );

      const VoixCResults = VoixC.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...VoixCResults.map((song) => ({
          id: song.id,
          type: "LaVoixDuReveilCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "La Voix du Réveil Créole",
        }))
      );

      const ombreResults = OmbreF.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...ombreResults.map((song) => ({
          id: song.id,
          type: "LombreDuReveil",
          title: song.title,
          lyrics: song.lyrics,
          category: "L'ombre du Réveil",
        }))
      );

      const HaiResults = HaitiC.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...HaiResults.map((song) => ({
          id: song.id,
          type: "HaitiChante",
          title: song.title,
          lyrics: song.lyrics,
          category: "Haïti Chante avec Radio Lumière",
        }))
      );

      const GResults = GloA.filter((song) => song.id.toString() === searchTerm);
      results.push(
        ...GResults.map((song) => ({
          id: song.id,
          type: "GloieAGneau",
          title: song.title,
          lyrics: song.lyrics,
          category: "Gloire à l'Agneau",
        }))
      );

      const EResults = echo.filter((song) => song.id.toString() === searchTerm);
      results.push(
        ...EResults.map((song) => ({
          id: song.id,
          type: "EchoDesElus",
          title: song.title,
          lyrics: song.lyrics,
          category: "Écho des Élus",
        }))
      );

      const KResults = CreoleSongs.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...KResults.map((song) => ({
          id: song.id,
          type: "kreyol",
          title: song.title,
          lyrics: song.lyrics,
          category: "Chœurs Créole",
        }))
      );

      const AngResults = englishSongs.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...AngResults.map((song) => ({
          id: song.id,
          type: "English",
          title: song.title,
          lyrics: song.lyrics,
          category: "Choeurs Anglais",
        }))
      );

      const FranResults = frenchSongs.filter(
        (song) => song.id.toString() === searchTerm
      );
      results.push(
        ...FranResults.map((song) => ({
          id: song.id,
          type: "Franc",
          title: song.title,
          lyrics: song.lyrics,
          category: "Choeurs Français",
        }))
      );
    } else {
      const chantLyricsResults = chantsF.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...chantLyricsResults.map((song) => ({
          id: song.id,
          type: "ChantDesperanceFrancais",
          title: song.title,
          lyrics: song.lyrics,
          category: "Chant d'Esperance Francais",
        }))
      );

      const chantCLyricsResults = chantsC.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...chantCLyricsResults.map((song) => ({
          id: song.id,
          type: "ChantDesperanceCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "Chant d'Esperance Créole",
        }))
      );

      const MelodieResults = MelodieF.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...MelodieResults.map((song) => ({
          id: song.id,
          type: "MelodieJoyeusesFrancais",
          title: song.title,
          lyrics: song.lyrics,
          category: "Mélodies Joyeuses Français",
        }))
      );

      const MelodieCResults = MelodieC.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...MelodieCResults.map((song) => ({
          id: song.id,
          type: "MelodieJoyeusesCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "Mélodies Joyeuses Créole",
        }))
      );

      const RevResults = RevNC.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...RevResults.map((song) => ({
          id: song.id,
          type: "ReveillonsNousChretiens",
          title: song.title,
          lyrics: song.lyrics,
          category: "Réveillons-Nous Chrétiens",
        }))
      );

      const RevNFResults = ReveNF.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...RevNFResults.map((song) => ({
          id: song.id,
          type: "ReveillonsNousFrancais",
          title: song.title,
          lyrics: song.lyrics,
          category: "Réveillons-Nous Français",
        }))
      );

      const RevNCResults = ReveNC.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...RevNCResults.map((song) => ({
          id: song.id,
          type: "ReveillonsNousCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "Réveillons-Nous Créole",
        }))
      );

      const VoiFResults = VoixF.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...VoiFResults.map((song) => ({
          id: song.id,
          type: "VoixRevF",
          title: song.title,
          lyrics: song.lyrics,
          category: "La Voix du Réveil Français",
        }))
      );

      const VoiCResults = VoixC.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...VoiCResults.map((song) => ({
          id: song.id,
          type: "VoixRevC",
          title: song.title,
          lyrics: song.lyrics,
          category: "La Voix du Réveil Créole",
        }))
      );

      const OmbreResults = OmbreF.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...OmbreResults.map((song) => ({
          id: song.id,
          type: "LombreDuReveil",
          title: song.title,
          lyrics: song.lyrics,
          category: "L'ombre du Réveil",
        }))
      );

      const HaiResults = HaitiC.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...HaiResults.map((song) => ({
          id: song.id,
          type: "HaitiChante",
          title: song.title,
          lyrics: song.lyrics,
          category: "Haïti Chante avec Radio Lumière",
        }))
      );

      const GloResults = GloA.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...GloResults.map((song) => ({
          id: song.id,
          type: "GloireAGneau",
          title: song.title,
          lyrics: song.lyrics,
          category: "Gloire à l'Agneau",
        }))
      );

      const EcResults = echo.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...EcResults.map((song) => ({
          id: song.id,
          type: "EchoE",
          title: song.title,
          lyrics: song.lyrics,
          category: "Écho des Élus",
        }))
      );

      const KcResults = CreoleSongs.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...KcResults.map((song) => ({
          id: song.id,
          type: "Kreyol",
          title: song.title,
          lyrics: song.lyrics,
          category: "Chœurs Créole",
        }))
      );

      const AngResults = englishSongs.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...AngResults.map((song) => ({
          id: song.id,
          type: "English",
          title: song.title,
          lyrics: song.lyrics,
          category: "Choeurs Anglais",
        }))
      );

      const FranResults = frenchSongs.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...FranResults.map((song) => ({
          id: song.id,
          type: "Franc",
          title: song.title,
          lyrics: song.lyrics,
          category: "Choeurs Français",
        }))
      );
    }

    return results;
  };

  const handleSearch = async () => {
    if (!inputValue.trim()) return;

    const results = performSearch(inputValue);

    if (results.length > 0) {
      await saveToHistory(inputValue);
      setShowHistory(false);
      router.push({
        pathname: "./SearchResults",
        params: { results: JSON.stringify(results) },
      });
    } else {
      alert("Aucun résultat trouvé");
    }
  };

  const handleHistoryItemPress = (item: string) => {
    setInputValue(item);
    setShowHistory(false);
    const results = performSearch(item);
    
    if (results.length > 0) {
      router.push({
        pathname: "./SearchResults",
        params: { results: JSON.stringify(results) },
      });
    }
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleOptionPress = (optionId: string, optionTitle: string) => {
    const routeName = optionRoutes[optionTitle as OptionTitle]; 
    if (routeName) {
      router.push(routeName as any);
    } else {
      console.warn(`Route non définie pour l'option: ${optionTitle}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Rechercher un chant (n°, titre, paroles)"
            placeholderTextColor="gray"
            returnKeyType="search"
            autoCapitalize="sentences"
            style={styles.textInput}
            value={inputValue}
            onChangeText={handleInputChange}
            onSubmitEditing={handleSearch}
            onFocus={() => setShowHistory(true)}
          />

          {inputValue.length > 0 && (
            <TouchableOpacity
              onPress={() => setInputValue("")}
              style={styles.clearButton}
            >
              <MaterialIcons name="clear" size={responsiveModerateScale(20)} style={styles.clearIcon} />
            </TouchableOpacity>
          )}
        </View>

        {/* Historique de recherche */}
        {showHistory && searchHistory.length > 0 && (
          <View style={styles.historyContainer}>
            <View style={styles.historyHeader}>
              <Text style={styles.historyTitle}>Recherches récentes</Text>
              <TouchableOpacity onPress={clearHistory}>
                <Text style={styles.clearHistoryText}>Effacer tout</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.historyList} nestedScrollEnabled={true}>
              {searchHistory.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                  <TouchableOpacity
                    style={styles.historyItemButton}
                    onPress={() => handleHistoryItemPress(item)}
                  >
                    <Ionicons 
                      name="time-outline" 
                      size={responsiveModerateScale(18)} 
                      color="#dfdedcf7" 
                      style={styles.historyIcon}
                    />
                    <Text style={styles.historyItemText}>{item}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => removeHistoryItem(item)}
                    style={styles.removeButton}
                  >
                    <Ionicons 
                      name="close" 
                      size={responsiveModerateScale(18)} 
                      color="#dfdedcf7" 
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>

      {/* Liste des options */}
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleOptionPress(item.id, item.title)}
            style={styles.chantItem}
          >
            <Image source={item.image} style={styles.chantImage} />
            <Text style={styles.chantTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1E42",
    paddingHorizontal: responsiveScale(16),
    paddingTop: responsiveVerticalScale(0),
  },
  searchWrapper: {
    position: 'relative',
    zIndex: 1000,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveVerticalScale(10),
    marginBottom: responsiveVerticalScale(20),
    marginHorizontal: responsiveScale(10),
    position: 'relative',
    maxWidth: isLargeScreen ? responsiveScale(400) : '100%',
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    height: responsiveVerticalScale(48),
    borderBottomColor: "#dfdedcf7",
    borderBottomWidth: moderateScale(2),
    paddingLeft: responsiveScale(15),
    paddingRight: responsiveScale(45),
    color: "#dfdedcf7",
    fontSize: responsiveModerateScale(13),
    backgroundColor: "transparent",
    minWidth: responsiveScale(250),
    maxWidth: responsiveScale(350),
    ...(Platform.OS === 'android' && {
      borderStyle: 'solid',
      borderBottomColor: '#FFFFFF',
      borderBottomWidth: 1,
      underlineColorAndroid: '#dfdedcf7',
    }),
    ...(Platform.OS === 'ios' && {
      borderBottomColor: "#dfdedcf7",
      borderBottomWidth: moderateScale(1),
    }),
  },
  clearButton: {
    position: "absolute",
    right: responsiveScale(8),
    backgroundColor: "#ddd",
    borderRadius: responsiveScale(15),
    width: responsiveScale(20),
    height: responsiveScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearIcon: {
    color: "red",
  },
  historyContainer: {
    backgroundColor: "#1a2d52",
    borderRadius: responsiveModerateScale(12),
    marginHorizontal: responsiveScale(10),
    marginTop: responsiveVerticalScale(-10),
    padding: responsiveScale(12),
    maxHeight: responsiveVerticalScale(250),
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
    maxWidth: isLargeScreen ? responsiveScale(400) : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveVerticalScale(10),
    paddingBottom: responsiveVerticalScale(8),
    borderBottomWidth: 1,
    borderBottomColor: '#dfdedcf7',
  },
  historyTitle: {
    color: '#dfdedcf7',
    fontSize: responsiveModerateScale(14),
    fontWeight: 'bold',
  },
  clearHistoryText: {
    color: '#ff6b6b',
    fontSize: responsiveModerateScale(12),
    fontWeight: '600',
  },
  historyList: {
    maxHeight: responsiveVerticalScale(180),
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveVerticalScale(10),
    borderBottomWidth: 0.5,
    borderBottomColor: '#dfdedcf750',
  },
  historyItemButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyIcon: {
    marginRight: responsiveScale(10),
  },
  historyItemText: {
    color: '#dfdedcf7',
    fontSize: responsiveModerateScale(13),
    flex: 1,
  },
  removeButton: {
    padding: responsiveScale(5),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: responsiveVerticalScale(16),
    gap: responsiveScale(10),
  },
  chantItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfdedcf7",
    padding: responsiveVerticalScale(10),
    borderRadius: responsiveModerateScale(12),
    width: "45%",
    height: responsiveVerticalScale(110),
    marginBottom: responsiveVerticalScale(15),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: responsiveModerateScale(6),
    elevation: 5,
    borderColor: "red",
    borderLeftWidth: responsiveModerateScale(4),
    borderRightWidth: responsiveModerateScale(4),
  },
  chantImage: {
    width: responsiveScale(65),
    height: responsiveVerticalScale(45),
    marginBottom: responsiveVerticalScale(6),
    borderColor: "#0A1E42",
    borderWidth: 1,
    borderRadius: responsiveModerateScale(10),
    resizeMode: "contain",
  },
  chantTitle: {
    fontSize: responsiveModerateScale(11),
    color: "#0A1E42",
    textAlign: "center",
    lineHeight: responsiveModerateScale(15),
    paddingHorizontal: responsiveScale(2),
    fontWeight: "600",
    flexShrink: 1,
  },
});

export default ChantDesperance;