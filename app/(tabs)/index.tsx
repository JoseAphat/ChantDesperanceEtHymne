import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useFocusEffect, useNavigation } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Linking,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import "react-native-gesture-handler";
// Importation des données des chants
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import chantsC from "../ChantDC";
import englishSongs from "../ChantDE";
import chantsF from "../ChantDF";
import frenchSongs from "../ChoeurFr";
import echo from "../Echo";
import GloA from "../Gloire";
import HaitiC from "../Hait";
import HymneEtLouangeSongs from "../Hymne";
import CreoleSongs from "../KeKreyol";
import VoixC from "../LaVoixCreole";
import VoixF from "../LaVoixFrancais";
import MelodieC from "../MelC";
import MelodieF from "../MelF";
import OmbreF from "../OmbreReveil";
import ReveNC from "../ReveillonsCreole";
import ReveNF from "../ReveillonsFrancais";
import RevNC from "../ReveillonsNous";
import VCreole from "../VersionCreole";
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Fonction pour déterminer si c'est un petit écran
const isSmallScreen = screenWidth < 400;
const isMediumScreen = screenWidth >= 400 && screenWidth < 768;
const isLargeScreen = screenWidth >= 768;

// Fonctions de scaling personnalisées pour une meilleure adaptation
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

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const { fromNotes, section } = useLocalSearchParams();
  const isFromNotes = fromNotes === "true";
  const DASHES_RE = /[\u002D\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g; // tous les tirets
  const DIACRITICS_RE = /[\u0300-\u036f]/g;
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
      // Variante intent (Android uniquement)
      `intent://profile/${pageId}#Intent;scheme=fb;package=com.facebook.katana;end`,
    ],
  })!;

  for (const url of deepLinks) {
    try {
      // on tente directement; si l’app n’est pas visible, ça throw
      await Linking.openURL(url);
      return;
    } catch {}
  }

  // Fallback web
  try {
    await Linking.openURL(fbWebUrl);
  } catch {
    Alert.alert("Erreur", "Impossible d’ouvrir Facebook. Vérifiez que l’application est installée.");
  }
};
  const handleUpdateApp = () => {
  const updateUrl = "https://play.google.com/store/apps/details?id=com.berly.ChantDesperance"; // ⬅️ Remplace par ton vrai lien (App Store, GitHub, etc.)
  Linking.openURL(updateUrl);
};

  useLayoutEffect(() => {
  navigation.setOptions({
    headerTitle: "Chant d’Espérance & Hymne",
    headerTitleStyle: {
      color: "#0A1E42",
      //fontWeight: "bold",
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


  // Réinitialiser inputValue à chaque fois que la page devient active
  useFocusEffect(
    React.useCallback(() => {
      setInputValue(""); // Réinitialisation du champ de recherche
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
  router.push("/About" as any);  
};
const goToSupport = () => {
  setMenuVisible(false);
  router.push("/Support" as any);  
};
  const handleSearch = () => {
    const isNumber = !isNaN(Number(inputValue));
    let results: {
      id: string | number;
      type: string;
      title: string;
      lyrics: string;
      category: string;
    }[] = [];
    const normalizeText = (text: string): string =>
      text
    .toLowerCase()
    .replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(DIACRITICS_RE, "")
    .replace(DASHES_RE, " ")          // tirets -> espace
    .replace(/[^\p{L}\p{N}\s]/gu, "") // supprime ponctuation
    .replace(/\s+/g, " ")
    .trim();

    const normalizedInput = normalizeText(inputValue);
    if (isNumber) {
      const chantResults = chantsF.filter(
        (song) => song.id.toString() === inputValue
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
      const hymnResults = HymneEtLouangeSongs.filter(
        (song) => song.id.toString() === inputValue
      );
      results.push(
        ...hymnResults.map((song) => ({
          id: song.id,
          type: "HymneEtLouange",
          title: song.title,
          lyrics: song.lyrics,
          category: "Hymne Et Louange",
        }))
      );
      const chantCResults = chantsC.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour les melodies joyeuses francais
      const melodieFResults = MelodieF.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour les melodies joyeuses creole
      const melodieCResults = MelodieC.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour Reveillon-nous Chretiens
      const ReveCResults = RevNC.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour Reveillon-nous Francais
      const ReveNFResults = ReveNF.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour Reveillon-nous Creole
      const ReveNCResults = ReveNC.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour La voix du reveil francais
      const VoixFResults = VoixF.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour La voix du reveil creole
      const VoixCResults = VoixC.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour ombre du reveil
      const ombreResults = OmbreF.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour ombre du reveil
      const HaiResults = HaitiC.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour gloire a l'Agneau
      const GResults = GloA.filter((song) => song.id.toString() === inputValue);
      results.push(
        ...GResults.map((song) => ({
          id: song.id,
          type: "GloieAGneau",
          title: song.title,
          lyrics: song.lyrics,
          category: "Gloire à l'Agneau",
        }))
      );
      //recherche par id pour Echo
      const EResults = echo.filter((song) => song.id.toString() === inputValue);
      results.push(
        ...EResults.map((song) => ({
          id: song.id,
          type: "EchoDesElus",
          title: song.title,
          lyrics: song.lyrics,
          category: "Écho des Élus",
        }))
      );
      const CResults = VCreole.filter(
        (song) => song.id.toString() === inputValue
      );
      results.push(
        ...CResults.map((song) => ({
          id: song.id,
          type: "ChantCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "Nouveaux Chants Créole",
        }))
      );
      //recherche par id pour Echo
      const KResults = CreoleSongs.filter(
        (song) => song.id.toString() === inputValue
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
      //recherche par id pour Echo
      const AngResults = englishSongs.filter(
        (song) => song.id.toString() === inputValue
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
        (song) => song.id.toString() === inputValue
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
      const hymnLyricsResults = HymneEtLouangeSongs.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...hymnLyricsResults.map((song) => ({
          id: song.id,
          type: "HymneEtLouange",
          title: song.title,
          lyrics: song.lyrics,
          category: "Hymne Et Louange",
        }))
      );
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
      //commencement du traitement pour les chantdesperance creole pour la recherche par parole
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
      //fin
      //commencement du traitement pour les melodies joyeuses francais pour la recherche par parole
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
      //Fin
      //commencement du traitement pour les melodies joyeuses creole pour la recherche par parole
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
      //Fin
      //commencement du traitement pour Reveillons-Nous Chretiens pour la recherche par parole
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
      //Fin
      //commencement du traitement pour Reveillons-Nous Francais pour la recherche par parole
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
      //commencement du traitement pour Reveillons-Nous Creole pour la recherche par parole
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
      //Fin
      //commencement du traitement pour voix du rev francais pour la recherche par parole
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
      //commencement du traitement pour voix du rev francais pour la recherche par parole
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
      //Fin
      //commencement du traitement pour ombre du reveil pour la recherche par parole
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
      //commencement du traitement pour ombre du reveil pour la recherche par parole
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
      //commencement du traitement pour ombre du reveil pour la recherche par parole
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
      //commencement du traitement pour ombre du reveil pour la recherche par parole
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
      //................................
      const CResults = VCreole.filter((song) => {
        const songTitle = song.title ? normalizeText(song.title) : "";
        const songLyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return (
          songTitle.includes(normalizedInput) ||
          songLyrics.includes(normalizedInput)
        );
      });
      results.push(
        ...CResults.map((song) => ({
          id: song.id,
          type: "ChantCreole",
          title: song.title,
          lyrics: song.lyrics,
          category: "Nouveaux Chants Créole",
        }))
      );
      //...............................................
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
      //.........................................
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
      //........................................
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
    if (results.length > 0) {
      router.push({
        pathname: "./SearchResults",
        params: { results: JSON.stringify(results) },
      });
    } else {
      alert("Aucun résultat trouvé");
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
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Rechercher un chant"
          placeholderTextColor="gray"
          returnKeyType="search"
          autoCapitalize="sentences"
          style={styles.textInput}
          value={inputValue}
          onChangeText={handleInputChange}
          onSubmitEditing={handleSearch}
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
              size={responsiveModerateScale(40)}
              color="#0A1E42"
            />
            <Text style={styles.notesButtonText}>Cultes & Notes</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
  visible={menuVisible}
  transparent
  animationType="slide"
  onRequestClose={() => setMenuVisible(false)}
>
  <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
    <View style={styles.modalOverlay}>
      <TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          
          <TouchableOpacity style={styles.modalButton} onPress={goToPolitique}>
            <Text style={styles.modalText}>Politique de Confidentialité</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton} onPress={goToFoire}>
            <Text style={styles.modalText}>Foire aux Questions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton} onPress={openEmail}>
            <Text style={styles.modalText}>Nous Contacter</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.modalButton} onPress={openFacebook}>
                <Text style={styles.modalText}>Suivez-nous sur Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={handleUpdateApp}
          >
            <Text style={styles.modalText}>Mettre à jour</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={goToAbout}
          >
            <Text style={styles.modalText}> À propos </Text>
          </TouchableOpacity>
           <TouchableOpacity
            style={styles.modalButton}
            onPress={goToSupport}
          >
            <Text style={styles.modalText}> Nous supporter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setMenuVisible(false)}
          >
            <Text style={styles.modalText}>Fermer</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    </View>
    
  </TouchableWithoutFeedback>
</Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1E42",
    paddingHorizontal: responsiveScale(10),
    paddingTop: responsiveVerticalScale(-30),
  },
  
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveVerticalScale(5),
    marginBottom: responsiveVerticalScale(10),
    marginHorizontal: responsiveScale(10),
    position: 'relative',
    maxWidth: isLargeScreen ? responsiveScale(400) : '100%',
    alignSelf: 'center',
  },

   textInput: {
    flex: 1,
    height: responsiveVerticalScale(45),
    borderBottomColor: "#dfdedcf7",
    borderBottomWidth: moderateScale(2),
    paddingLeft: responsiveScale(15),
    paddingRight: responsiveScale(45), // Espace pour le bouton clear
    color: "#dfdedcf7",
    fontSize: responsiveModerateScale(14),
    backgroundColor: "transparent",
    minWidth: responsiveScale(250),
    maxWidth: isLargeScreen ? responsiveScale(350) : '100%',
    // Propriétés spécifiques pour Android
    ...(Platform.OS === 'android' && {
      borderStyle: 'solid',
      borderBottomColor: '#FFFFFF',
      borderBottomWidth: 1,
      // Alternative avec underlineColorAndroid si nécessaire
      underlineColorAndroid: '#dfdedcf7',
    }),
    // Propriétés spécifiques pour iOS
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

  bodyContainer: {
    flex: 1,
    paddingHorizontal: responsiveScale(15),
    paddingTop: responsiveVerticalScale(15),
    paddingBottom: responsiveVerticalScale(20),
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "flex-start",
  },

  bookButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfdedcf7",
    padding: responsiveVerticalScale(10),
    borderRadius: responsiveModerateScale(12),
    width: isSmallScreen ? "45%" : isMediumScreen ? "46%" : "45%",
    height: responsiveVerticalScale(100),
    marginBottom: responsiveVerticalScale(15),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: responsiveModerateScale(6),
    elevation: 5, // Pour Android
    borderColor: "red",
    borderLeftWidth: responsiveModerateScale(4),
    borderRightWidth: responsiveModerateScale(4),
  },

  image: {
    width: responsiveScale(60),
    height: responsiveScale(60),
    resizeMode: "contain",
    marginBottom: responsiveVerticalScale(5),
  },

  bookButtonText: {
    fontSize: responsiveModerateScale(14),
    fontWeight: "bold",
    color: "#0A1E42",
    textAlign: "center",
    lineHeight: responsiveModerateScale(16),
    paddingHorizontal: responsiveScale(4),
    bottom: responsiveVerticalScale(14),

  },

  // Wrapper pour centrer le bouton "Mes Notes"
  notesButtonWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveVerticalScale(0),
  },

  notesButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfdedcf7",
    padding: responsiveVerticalScale(10),
    borderRadius: responsiveModerateScale(12),
    width: isSmallScreen ? "48%" : isMediumScreen ? "47%" : "45%",
    height: responsiveVerticalScale(110),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: responsiveModerateScale(6),
    elevation: 5,
    borderColor: "red",
    borderLeftWidth: responsiveModerateScale(4),
    borderRightWidth: responsiveModerateScale(4),
  },

  notesButtonText: {
    marginTop: responsiveVerticalScale(5),
    fontSize: responsiveModerateScale(13),
    fontWeight: "bold",
    color: "#0A1E42",
    textAlign: "center",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    backgroundColor: "#0A1E42",
    width: isSmallScreen ? responsiveScale(200) : responsiveScale(220),
    padding: responsiveVerticalScale(12),
    position: "absolute",
    top: responsiveVerticalScale(50),
    right: responsiveScale(0),
    borderRadius: responsiveModerateScale(8),
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
  },

  modalButton: {
    paddingVertical: responsiveVerticalScale(12),
    paddingHorizontal: responsiveScale(12),
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },

  modalText: {
    fontSize: responsiveModerateScale(14),
    color: "#dfdedcf7",
    textAlign: "left",
    lineHeight: responsiveModerateScale(18),
  },
});
