import { categoryMap } from "@/components/data/categoryMap";
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Image,
  Modal,
  Platform,
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontProvider } from "../font/FontContext";
import useFavorites from "./useFavorites";

const ChantDetails: React.FC = () => {
  // ✅ CORRECTION : Déplacer useLocalSearchParams au niveau du composant
const params = useLocalSearchParams();
const {
  id,
  title: paramTitle = "Titre Inconnu",
  lyrics: paramLyrics = "Aucune Parole Disponible",
  category,
  previousTitle = "",
  useStorage,
} = params;

const { getFavorites } = useFavorites();
const [isFavorite, setIsFavorite] = useState(false);
const [menuVisible, setMenuVisible] = useState(false);
const navigation = useNavigation();
const [theme, setTheme] = useState<"light" | "dark">("light");

// ✅ États locaux pour le titre et les paroles
const [title, setTitle] = useState(paramTitle || "Titre Inconnu");
const [lyrics, setLyrics] = useState(
  paramLyrics || "Aucune Parole Disponible"
);

const [fontSize, setFontSize] = useState(18);
const [confirmationMessage, setConfirmationMessage] = useState<string | null>(
  null
);
const [fontPickerVisible, setFontPickerVisible] = useState(false);
const [fontFamily, setFontFamily] = useState(
  Platform.OS === "ios" ? "System" : "sans-serif"
);
const [fontWeight, setFontWeight] = useState<"normal" | "bold">("bold");
const [fontId, setFontId] = useState("sans-serif-bold"); // Nouveau state



// Ref pour éviter les re-renders excessifs lors du pincement
const gestureRef = useRef(null);
const lastScale = useRef(1);

// ✅ Charger la police sauvegardée au démarrage
useEffect(() => {
  const loadSavedSettings = async () => {
    try {
      // Charger le thème
      const savedTheme = await AsyncStorage.getItem("appTheme");
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
      }

      // ✅ Charger la police sauvegardée
      const savedFont = await AsyncStorage.getItem("fontFamily");
      if (savedFont) {
        setFontFamily(savedFont);
      } else {
        const defaultFont = Platform.OS === "ios" ? "System" : "sans-serif";
        setFontFamily(defaultFont);
      }

      // ✅ Charger le fontWeight sauvegardé
      const savedFontWeight = await AsyncStorage.getItem("fontWeight");
      if (savedFontWeight === "bold" || savedFontWeight === "normal") {
        setFontWeight(savedFontWeight);
      } else {
        setFontWeight("bold");
      }

      // ✅ Charger le fontId sauvegardé
      const savedFontId = await AsyncStorage.getItem("fontId");
      if (savedFontId) {
        setFontId(savedFontId);
      } else {
        setFontId("sans-serif-bold");
      }

      // ✅ Charger la taille de police sauvegardée
      const savedFontSize = await AsyncStorage.getItem("fontSize");
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize));
      }
    } catch (error) {
      console.error("Erreur lors du chargement des paramètres:", error);
    }
  };

  loadSavedSettings();
}, []);

// Séparer les useEffect pour une meilleure logique

// 1. Premier useEffect : Charger les données du chant
useEffect(() => {
  const loadChantData = async () => {
    // ✅ CORRECTION : Utiliser les paramètres déjà extraits au niveau du composant
    let finalTitle = paramTitle || "Titre Inconnu";
    let finalLyrics = paramLyrics || "Aucune Parole Disponible";

    if (useStorage === "true" && id) {
      try {
        const tempDataString = await AsyncStorage.getItem(`temp_chant_${id}`);
        if (tempDataString) {
          const tempData = JSON.parse(tempDataString);
          const now = Date.now();
          if (now - tempData.timestamp < 5 * 60 * 1000) {
            finalTitle = tempData.title;
            finalLyrics = tempData.lyrics;
          }
          await AsyncStorage.removeItem(`temp_chant_${id}`);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données temporaires:",
          error
        );
      }
    }

    try {
      if (typeof finalTitle === "string" && finalTitle.includes("%")) {
        finalTitle = decodeURIComponent(finalTitle);
      }
      if (typeof finalLyrics === "string" && finalLyrics.includes("%")) {
        finalLyrics = decodeURIComponent(finalLyrics);
      }
    } catch (decodeError) {
      console.error("Erreur lors du décodage:", decodeError);
    }

    setTitle(finalTitle);
    setLyrics(finalLyrics);
  };

  const checkIfFavorite = async () => {
    if (!id || !category) return;
    const favorites = await getFavorites();
    const uniqueId = `${category}-${id}`;
    const favoriteExists = favorites.some(
      (song: { id: string }) => song.id === uniqueId
    );
    setIsFavorite(favoriteExists);
  };

  loadChantData();
  checkIfFavorite();
}, [id, category, getFavorites, paramTitle, paramLyrics, useStorage]); 
useEffect(() => {
  if (title) {
    const configureHeader = () => {
      navigation.setOptions({
        header: () => (
          <View
            style={{
              height: 100, 
              backgroundColor: "#0A1E42",
              paddingTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            {/* Left: Bouton retour */}
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* Center: Titre */}
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 15 }}>
                {previousTitle || category}
              </Text>
            </View>

            {/* Right: Bouton taille de police */}
            <View
              style={{
                marginRight: scale(15),
                minWidth: moderateScale(24),
                minHeight: moderateScale(24),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setFontPickerVisible(true)}
                style={{
                  padding: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons
                  name="format-size"
                  size={moderateScale(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        ),
      });
    };
    const timer = requestAnimationFrame(() => {
      requestAnimationFrame(configureHeader); 
    });
    return () => cancelAnimationFrame(timer);
  }
}, [title, previousTitle, category, navigation]);

const styles = createStyles(theme === "dark");

const songs = useMemo(() => {
  return categoryMap[category] || [];
}, [category]);

const currentIndex = useMemo(
  () => songs.findIndex((song: { id: number }) => song.id === id),
  [songs, id]
);

if (currentIndex === -1) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Erreur : Chanson introuvable</Text>
    </View>
  );
}

const previousSong = useMemo(
  () => (currentIndex > 0 ? songs[currentIndex - 1] : null),
  [currentIndex, songs]
);

const nextSong = useMemo(
  () => (currentIndex < songs.length - 1 ? songs[currentIndex + 1] : null),
  [currentIndex, songs]
);

const handleFavoritePress = async () => {
  const uniqueId = `${category}-${id}`;
  const storedFavorites = await AsyncStorage.getItem("favorites");
  const parsed = storedFavorites ? JSON.parse(storedFavorites) : [];

  if (isFavorite) {
    const updated = parsed.filter((fav: { id: string; }) => fav.id !== uniqueId);
    await AsyncStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(false);
    setConfirmationMessage("Chant retiré des favoris");
  } else {
    const newFavorite = {
      id: uniqueId,
      title,
      lyrics,
      category,
      originalId: id,
    };
    const updated = [...parsed, newFavorite];
    await AsyncStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(true);
    setConfirmationMessage("Chant ajouté aux favoris");
  }

  setTimeout(() => setConfirmationMessage(null), 2000);
};

const handleShare = async () => {
  const appLink =
    "https://play.google.com/store/apps/details?id=com.berly.ChantDesperance";
  const messagePerso = "Retrouvez plus de cantiques dans l'application!";

  try {
    await Share.share({
      message: `Titre : ${title}\n\nParoles :\n${lyrics}\n\n${messagePerso}\n${appLink}`,
    });
  } catch (error) {
    console.error("Erreur lors du partage :", error);
  }
};

const handleToggleNightMode = async () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  await AsyncStorage.setItem("appTheme", newTheme);
};

const handleFontChange = async (newFontFamily: string, weight?: "bold" | "normal", fontId?: string) => {
  console.log("Changement de police vers:", newFontFamily, "poids:", weight);
  setFontFamily(newFontFamily);
  setFontWeight(weight || "normal");

  try {
    await AsyncStorage.setItem("fontFamily", newFontFamily);
    await AsyncStorage.setItem("fontWeight", weight || "normal");
    await AsyncStorage.setItem("fontId", fontId || ""); 
    console.log("Police sauvegardée avec succès:", newFontFamily, "poids:", weight || "normal");
  } catch (error) {
    console.error("Erreur lors de la sauvegarde de la police:", error);
  }

  setFontPickerVisible(false);
};
const handlePinchEnd = useCallback(() => {
  lastScale.current = 1;
}, []);

  return (
    <FontProvider>
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>

    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Text
          selectable={true}
          style={[
            styles.lyrics,
            {
              fontSize,
              fontFamily:
                fontFamily === "System" ? undefined : fontFamily, // ✅ Gestion spéciale pour System
              lineHeight: fontSize * 1.4, // ✅ Améliorer la lisibilité
            },
          ]}
        >
          {lyrics}
        </Text>
      </ScrollView>
    </View>

    {/* Navigation buttons */}
    <View style={styles.fixedNavigationButtons}>
      <TouchableOpacity
        style={[styles.button, !previousSong && styles.disabledButton]}
        onPress={() =>
          previousSong &&
          router.replace({
            pathname: "/ChantDetails",
            params: {
              id: previousSong.id,
              title: previousSong.title,
              lyrics: previousSong.lyrics,
              category,
              previousTitle,
            },
          })
        }
        disabled={!previousSong}
      >
        <Ionicons
          name="chevron-back-circle"
          size={30}
          color={
            previousSong ? (theme === "dark" ? "#555" : "#0A1E42") : "gray"
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !nextSong && styles.disabledButton]}
        onPress={() =>
          nextSong &&
          router.replace({
            pathname: "/ChantDetails",
            params: {
              id: nextSong.id,
              title: nextSong.title,
              lyrics: nextSong.lyrics,
              category,
              previousTitle,
            },
          })
        }
        disabled={!nextSong}
      >
        <Ionicons
          name="chevron-forward-circle"
          size={30}
          color={
            nextSong ? (theme === "dark" ? "#555" : "#0A1E42") : "gray"
          }
        />
      </TouchableOpacity>
    </View>

    {/* Footer */}
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={handleFavoritePress}
      >
        <AntDesign
          name="star"
          size={32}
          color={isFavorite ? "gold" : "gray"}
        />
        <Text style={styles.footerButtonText}>
          {isFavorite ? "Retirer" : "Favoris"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={handleShare}>
        <AntDesign name="share-alt" size={28} color="white" />
        <Text style={styles.footerButtonText}>Partager</Text>
      </TouchableOpacity>
    </View>

    {/* ✅ Modal amélioré pour le choix de police */}
    <Modal
      visible={fontPickerVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setFontPickerVisible(false)}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setFontPickerVisible(false)}
      >
        <TouchableOpacity
          style={{
            backgroundColor: theme === "dark" ? "#2c2c2c" : "#fff",
            width: "85%",
            borderRadius: 12,
            padding: 20,
            maxHeight: "60%",
          }}
          onPress={() => {}}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
  {[
    {
      name: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
      displayName: "Sans Serif",
      fontWeight: "normal" as const,
      id: "sans-serif-normal",
    },
    {
      name: Platform.OS === "ios" ? "Georgia" : "serif",
      displayName: "Serif",
      fontWeight: "normal" as const,
      id: "serif-georgia",
    },
    {
      name: Platform.OS === "ios" ? "Bradley Hand" : "cursive",
      displayName: "Cursive",
      fontWeight: "normal" as const,
      id: "cursive-normal",
    },
  ].map((font) => {
  const isSelected = 
    fontFamily === font.name && 
    fontWeight === (font.fontWeight || "normal");
  
  return (
    <TouchableOpacity
      key={font.id}
      onPress={() => handleFontChange(font.name, font.fontWeight, font.id)}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: isSelected
          ? theme === "dark"
            ? "#4a90e2"
            : "#e3f2fd"
          : "transparent",
        borderWidth: isSelected ? 2 : 1,
        borderColor: isSelected
          ? "#4a90e2"
          : theme === "dark"
          ? "#555"
          : "#ddd",
      }}
    >
      <Text
        style={{
          fontFamily: font.name,
          fontSize: 16,
          fontWeight: font.fontWeight || "normal",
          color: theme === "dark" ? "#fff" : "#000",
          textAlign: "center",
        }}
      >
        {font.displayName}
      </Text>
    </TouchableOpacity>
  );
})}
          </ScrollView>
          <TouchableOpacity
            onPress={() => setFontPickerVisible(false)}
            style={{
              marginTop: 15,
              padding: 12,
              backgroundColor: "#0A1E42",
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
            >
              Fermer
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>

    {/* Mode Nuit */}
    <View style={styles.switchContainer}>
      <Text
        style={[
          styles.switchLabel,
          { color: theme === "dark" ? "#fff" : "#000", marginLeft: 15 },
        ]}
      >
        Mode: {theme === "dark" ? "🌙 Nuit" : "☀️ Jour"}
      </Text>
      <Switch
        value={theme === "dark"}
        onValueChange={handleToggleNightMode}
        trackColor={{ false: "#ccc", true: "#4a90e2" }}
        thumbColor={theme === "dark" ? "#fff" : "#0A1E42"}
        style={{ marginTop: verticalScale(3) }}
        ios_backgroundColor="#ccc"
      />
    </View>

    {/* Message de confirmation */}
    {confirmationMessage && (
  <View
    style={{
      position: "absolute",
      top: 400,
      alignSelf: "center",
      backgroundColor: "#0A1E42",
      padding: 12,
      borderRadius: 25,
      flexDirection: "row",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <Image
      source={require("../assets/images/ic_launcher_foreground.png")}
      style={{ width: 30, height: 30, marginRight: 10 }}
    />
    <Text style={{ color: "#fff", fontSize: 14 }}>
      {confirmationMessage}
    </Text>
  </View>   
)}
  </View>
</FontProvider>
  );
};
const createStyles = (theme: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(10),
      backgroundColor: theme ? "black" : "#dfdedcf7",
    },
    title: {
      fontSize: scale(16),
      fontWeight: "bold",
      padding: moderateScale(10),
      textAlign: "center",
      color: theme ? "#fff" : "#0A1E42",
      top: verticalScale(9),
      position: "relative",
      width: "100%",
    },
    scrollViewContent: {
      paddingBottom: verticalScale(80),
    },
    lyrics: {
      lineHeight: verticalScale(30),
      textAlign: "center",
      color: theme ? "#fff" : "#000",
      maxWidth: "100%",
      alignSelf: "center",
      //fontWeight: "bold",
    },
    spacing: {
      height: verticalScale(20),
    },
    fixedNavigationButtons: {
      position: "absolute",
      bottom: verticalScale(400),
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: moderateScale(5),
    },
    navigationButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: verticalScale(20),
      bottom: verticalScale(90),
      width: scale(100),
    },
    button: {
      padding: moderateScale(-5),
      top: verticalScale(70),
    },
    disabledButton: {
      opacity: 0.5,
    },
    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#0A1E42",
      padding: moderateScale(10),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: verticalScale(90),
      paddingHorizontal: moderateScale(5),
    },
    footerButton: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: moderateScale(10),
      bottom: 25,
    },
    footerButtonText: {
      color: theme ? "#bbb" : "white",
      fontSize: scale(15),
      marginLeft: moderateScale(10),
      fontWeight: "bold",
    },
    switchContainer: {
      position: "absolute",
      top: verticalScale(-2),
      left: 0,
      right: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme ? "#555" : "#ccc", // plus visibles
      paddingHorizontal: scale(10),
      height: verticalScale(30),
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "white",
      zIndex: 10,
    },

    switchLabel: {
      color: theme ? "white" : "black",
      fontWeight: "bold",
      fontSize: moderateScale(13),
    },
  });

export default ChantDetails;
function runOnJS(updateFontSize: () => void) {
  throw new Error("Function not implemented.");
}

