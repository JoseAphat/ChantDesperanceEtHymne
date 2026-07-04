import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainMenu from "@/components/MainMenu";
import { searchSongs } from "@/utils/searchSongs";
import { router, useFocusEffect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Platform,
  ScrollView,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import {
  styles,
  responsiveModerateScale,
} from "@/styles/index.styles";


export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const navigation = useNavigation();
  const { fromNotes, section } = useLocalSearchParams();
  const isFromNotes = fromNotes === "true";

  const SEARCH_HISTORY_KEY = '@search_history_main';
  const MAX_HISTORY_ITEMS = 10;

  // Charger l'historique au montage du composant
  useEffect(() => {
    loadSearchHistory();
  }, []);

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

  const openEmail = () => {
    const email = "gedelienjosaphat@gmail.com";
    const subject = "Demande depuis l'application Chant d'Espérance & Hymne";
    const body = "Bonjour ! Je vous contacte depuis l'application.";

    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url).catch(() => {
      alert(
        "Impossible d'ouvrir le client mail. Veuillez vérifier votre application de messagerie."
      );
    });
  };

  const openFacebook = async () => {
    const pageId = "61574869895472";
    const fbWebUrl = `https://www.facebook.com/profile.php?id=${pageId}`;

    const deepLinks = Platform.select({
      ios: [
        `fb://profile/${pageId}`,
        `fb://page/?id=${pageId}`,
        `fb://facewebmodal/f?href=${encodeURIComponent(fbWebUrl)}`,
      ],
      android: [
        `fb://profile/${pageId}`,
        `fb://page/${pageId}`,
        `fb://facewebmodal/f?href=${encodeURIComponent(fbWebUrl)}`,
        `intent://profile/${pageId}#Intent;scheme=fb;package=com.facebook.katana;end`,
      ],
    })!;

    for (const url of deepLinks) {
      try {
        await Linking.openURL(url);
        return;
      } catch {}
    }

    try {
      await Linking.openURL(fbWebUrl);
    } catch {
      Alert.alert("Erreur", "Impossible d'ouvrir Facebook. Vérifiez que l'application est installée.");
    }
  };

  const handleUpdateApp = () => {
    const updateUrl = "https://play.google.com/store/apps/details?id=com.berly.ChantDesperance";
    Linking.openURL(updateUrl);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Chant d'Espérance & Hymne",
      headerTitleStyle: {
        color: "#0A1E42",
        fontSize: moderateScale(16),
      },
      headerStyle: {
        height: verticalScale(100),
        backgroundColor: "#dfdedcf7",
      },
      headerLeft: () => (
        <View
          style={{
            width: scale(40),
            height: verticalScale(40),
            justifyContent: "center",
            alignItems: "center",
            marginLeft: scale(20),
          }}
        >
          <Image
            source={require("../../assets/images/chant.png")}
            style={{
              width: scale(40),
              height: scale(40),
              resizeMode: "contain",
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setMenuVisible(true)}
          style={{ marginRight: scale(15) }}
        >
          <AntDesign name="bars" size={moderateScale(24)} color="#001F5C" />
        </TouchableOpacity>
      ),
      headerTitleAlign: "center",
    });
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      setInputValue("");
    }, [])
  );

  const goToPolitique = () => {
    setMenuVisible(false);
    router.push("./Politique");
  };

  const goToFoire = () => {
    setMenuVisible(false);
    router.push("./Foire");
  };

  const goToAbout = () => {
    setMenuVisible(false);
    router.push("./About");
  };

  const goToSupport = () => {
    setMenuVisible(false);
    router.push("./Support");
  };

  const shareApp = async () => {
    setMenuVisible(false);

    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.berly.ChantDesperance';

    try {
      await Share.share({
        message: `Découvrez l'application Chant d'Espérance & Hymne: ${playStoreUrl}`,
      });
    } catch (error) {
      console.error('Erreur lors du partage:', error);
    }
  };

  const performSearch = (searchTerm: string) => searchSongs(searchTerm);

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

  const goToChantDesperance = () => {
    router.push("./ChantDesperance");
  };

  const goToHymneEtLouange = () => {
    router.push({
      pathname: "./HymneEtLouange",
      params: {
        fromNotes: isFromNotes ? "true" : "false",
        section
      },
    });
  };

  const goToEnglish = () => {
    router.push("./English")
  };

  const goToChoeurFrancais = () => {
    router.push("./ChoeurFrancais")
  };

  const goToChoeurCreole = () => {
    router.push("./ChoeurCreole")
  };

  const goToFavoris = () => {
    router.push("./FavoritesScreen")
  };

  const goToService = () => {
    router.push("./Service")
  };

  return (
    <SafeAreaView style={styles.container}>
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

      <View style={styles.bodyContainer}>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.bookButton} onPress={goToChantDesperance}>
            <Image
              source={require("../../assets/images/CE.png")}
              style={styles.image}
            />
            <Text style={styles.bookButtonText}>Chant d&apos;Espérance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookButton} onPress={goToHymneEtLouange}>
            <Image
              source={require("../../assets/images/hymne.png")}
              style={styles.image}
            />
            <Text style={styles.bookButtonText}>Hymne & Louange</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookButton} onPress={goToEnglish}>
            <Image
              source={require("../../assets/images/anglais.png")}
              style={styles.image}
            />
            <Text style={styles.bookButtonText}>Chœurs Anglais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookButton} onPress={goToChoeurCreole}>
            <Image
              source={require("../../assets/images/haiti.png")}
              style={styles.image}
            />
            <Text style={styles.bookButtonText}>Chœurs Créole</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookButton} onPress={goToChoeurFrancais}>
            <Image
              source={require("../../assets/images/franc.png")}
              style={styles.image}
            />
            <Text style={styles.bookButtonText}>Chœurs Français</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookButton} onPress={goToFavoris}>
            <Image
              source={require("../../assets/images/favorite.png")}
              style={styles.image}
            />
            <Text style={styles.bookButtonText}>Favoris</Text>
          </TouchableOpacity>
        </View>

        {/* Bouton "Mes Notes" centré séparément */}
        <View style={styles.notesButtonWrapper}>
          <TouchableOpacity style={styles.notesButton} onPress={goToService}>
            <MaterialCommunityIcons
              name="church"
              size={responsiveModerateScale(30)}
              color="#0A1E42"
            />
            <Text style={styles.notesButtonText}>Cultes & Notes</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MainMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onPolitique={goToPolitique}
        onFoire={goToFoire}
        onContact={openEmail}
        onFacebook={openFacebook}
        onUpdateApp={handleUpdateApp}
        onAbout={goToAbout}
        onSupport={goToSupport}
        onShare={shareApp}
      />
    </SafeAreaView>
  );
}