import { categoryMap } from "@/components/data/categoryMap";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontProvider } from "../font/FontContext";
import useFavorites from "./useFavorites";

/* ---------- helpers tolérants ---------- */
const normalize = (s?: string) =>
  (s ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,/#!$%^&*;:{}=\-_`~()'"?«»]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

const resolveCategoryKey = (cat: any): string | undefined => {
  const wanted = normalize(String(cat || ""));
  const keys = Object.keys(categoryMap || {});
  const direct = keys.find((k) => k === cat);
  if (direct) return direct;
  return keys.find((k) => normalize(k) === wanted);
};
/* ---------- fin helpers ---------- */

const ChantDetails: React.FC = () => {
  const params = useLocalSearchParams();
  const {
    id,
    title: paramTitle = "Titre Inconnu",
    lyrics: paramLyrics = "Aucune Parole Disponible",
    author: paramAuthor = "",
    category,
    previousTitle = "",
    useStorage,
  } = params as {
    id?: string | number;
    title?: string;
    lyrics?: string;
    author?: string;
    category?: string;
    previousTitle?: string;
    useStorage?: string;
  };

  const navigation = useNavigation();
  const { getFavorites } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [title, setTitle] = useState(paramTitle || "Titre Inconnu");
  const [author, setAuthor] = useState(paramAuthor || "");
  const [lyrics, setLyrics] = useState(paramLyrics || "Aucune Parole Disponible");

  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  const [fontPickerVisible, setFontPickerVisible] = useState(false);
  const [fontFamily, setFontFamily] = useState(Platform.OS === "ios" ? "System" : "sans-serif");
  const [fontWeight, setFontWeight] = useState<"normal" | "bold">("bold");
  const [fontId, setFontId] = useState("sans-serif-bold");

  // Zoom/tailles
  const [baseFontSize, setBaseFontSize] = useState(18);
  const [currentFontSize, setCurrentFontSize] = useState(18);
  const ZOOM_MIN = 0.8;
  const ZOOM_MAX = 3.0;
  const ZOOM_STEP = 0.2;
  const [zoomLevel, setZoomLevel] = useState(1);
  const scrollViewRef = useRef<ScrollView>(null);

  // charger prefs
  useEffect(() => {
    const loadSavedSettings = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("appTheme");
        if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);

        const savedFont = await AsyncStorage.getItem("fontFamily");
        setFontFamily(savedFont || (Platform.OS === "ios" ? "System" : "sans-serif"));

        const savedFontWeight = await AsyncStorage.getItem("fontWeight");
        setFontWeight(savedFontWeight === "bold" || savedFontWeight === "normal" ? savedFontWeight : "bold");

        const savedFontId = await AsyncStorage.getItem("fontId");
        setFontId(savedFontId || "sans-serif-bold");

        const savedFontSize = await AsyncStorage.getItem("fontSize");
        if (savedFontSize) {
          const size = parseInt(savedFontSize, 10);
          setBaseFontSize(size);
          setCurrentFontSize(size);
        }

        const savedZoomLevel = await AsyncStorage.getItem("zoomLevel");
        if (savedZoomLevel) {
          const zoom = parseFloat(savedZoomLevel);
          setZoomLevel(zoom);
          const baseSize = savedFontSize ? parseInt(savedFontSize, 10) : 18;
          setCurrentFontSize(baseSize * zoom);
        }
      } catch (e) {
        console.error("Erreur chargement paramètres:", e);
      }
    };
    loadSavedSettings();
  }, []);

  // appliquer zoom
  useEffect(() => {
    setCurrentFontSize(baseFontSize * zoomLevel);
  }, [zoomLevel, baseFontSize]);

  // charger chant depuis params / storage temporaire
  useEffect(() => {
    const loadChantData = async () => {
      let finalTitle = paramTitle || "Titre Inconnu";
      let finalLyrics = paramLyrics || "Aucune Parole Disponible";
      let finalAuthor = paramAuthor || ""; // CORRECTION: Utilise paramAuthor au lieu de paramLyrics

      if (useStorage === "true" && id) {
        try {
          const tempDataString = await AsyncStorage.getItem(`temp_chant_${id}`);
          if (tempDataString) {
            const tempData = JSON.parse(tempDataString);
            const now = Date.now();
            if (now - tempData.timestamp < 5 * 60 * 1000) {
              finalTitle = tempData.title;
              finalLyrics = tempData.lyrics;
              finalAuthor = tempData.author || ""; // CORRECTION: Récupère aussi l'auteur du stockage temporaire
            }
            await AsyncStorage.removeItem(`temp_chant_${id}`);
          }
        } catch (e) {
          console.error("Erreur récupération données temporaires:", e);
        }
      }

      try {
        if (typeof finalTitle === "string" && finalTitle.includes("%")) {
          finalTitle = decodeURIComponent(finalTitle);
        }
        if (typeof finalLyrics === "string" && finalLyrics.includes("%")) {
          finalLyrics = decodeURIComponent(finalLyrics);
        }
        if (typeof finalAuthor === "string" && finalAuthor.includes("%")) {
          finalAuthor = decodeURIComponent(finalAuthor);
        }
      } catch (e) {
        console.error("Erreur décodage:", e);
      }

      setTitle(finalTitle);
      setLyrics(finalLyrics);
      setAuthor(finalAuthor);
    };

    const checkIfFavorite = async () => {
      if (!id || !category) return;
      const favorites = await getFavorites();
      const uniqueId = `${category}-${id}`;
      const favoriteExists = favorites.some((song: { id: string }) => song.id === uniqueId);
      setIsFavorite(favoriteExists);
    };

    loadChantData();
    checkIfFavorite();
  }, [id, category, getFavorites, paramTitle, paramLyrics, paramAuthor, useStorage]);

  // header dynamique
  useEffect(() => {
    if (!title) return;
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
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <Text style={{ color: "white", fontSize: 15 }}>
              {(category as string) || previousTitle || "Chant"}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => setFontPickerVisible(true)} style={{ padding: 8 }}>
                <MaterialIcons name="format-size" size={moderateScale(20)} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ),
      });
    };
    const t = requestAnimationFrame(() => requestAnimationFrame(configureHeader));
    return () => cancelAnimationFrame(t);
  }, [title, previousTitle, category, navigation]);

  // zoom handlers
  const handleZoomIn = async () => {
    const newZoom = Math.min(zoomLevel + ZOOM_STEP, ZOOM_MAX);
    setZoomLevel(newZoom);
    setTimeout(() => scrollViewRef.current?.scrollTo({ y: 0, animated: true }), 100);
    await AsyncStorage.setItem("zoomLevel", newZoom.toString());
  };
  const handleZoomOut = async () => {
    const newZoom = Math.max(zoomLevel - ZOOM_STEP, ZOOM_MIN);
    setZoomLevel(newZoom);
    setTimeout(() => scrollViewRef.current?.scrollTo({ y: 0, animated: true }), 100);
    await AsyncStorage.setItem("zoomLevel", newZoom.toString());
  };

  const styles = createStyles(theme === "dark");

  /* ---------- navigation prev/next tolérante ---------- */
  const songs = useMemo(() => {
    const key = resolveCategoryKey(category as string);
    if (!key) return [];
    const arr = (categoryMap as any)[key];
    return Array.isArray(arr) ? arr : [];
  }, [category]);

  const idStr = useMemo(() => String(id ?? ""), [id]);

  const currentIndex = useMemo(() => {
    if (!songs.length) return -1;
    return songs.findIndex((song: { id: string | number }) => String(song.id) === idStr);
  }, [songs, idStr]);

  const previousSong = useMemo(() => {
    if (currentIndex > 0) return songs[currentIndex - 1];
    return null;
  }, [currentIndex, songs]);

  const nextSong = useMemo(() => {
    if (currentIndex >= 0 && currentIndex < songs.length - 1) return songs[currentIndex + 1];
    return null;
  }, [currentIndex, songs]);

  // affiche l'erreur seulement si aucune liste ET pas de paroles
  if ((!lyrics || String(lyrics).trim() === "") && currentIndex === -1 && songs.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Erreur : Chanson introuvable</Text>
      </View>
    );
  }
  /* ---------- fin bloc tolérant ---------- */

  const handleFavoritePress = async () => {
    const uniqueId = `${category}-${id}`;
    const storedFavorites = await AsyncStorage.getItem("favorites");
    const parsed = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (isFavorite) {
      const updated = parsed.filter((fav: { id: string }) => fav.id !== uniqueId);
      await AsyncStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
      setConfirmationMessage("Chant retiré des favoris");
    } else {
      const newFavorite = { id: uniqueId, title, lyrics, category, originalId: id, author };
      const updated = [...parsed, newFavorite];
      await AsyncStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(true);
      setConfirmationMessage("Chant ajouté aux favoris");
    }
    setTimeout(() => setConfirmationMessage(null), 2000);
  };

  const handleShare = async () => {
    const appLink = "https://play.google.com/store/apps/details?id=com.berly.ChantDesperance";
    const messagePerso = "Retrouvez plus de cantiques dans l'application!";
    const authorText = author ? `\nAuteur : ${author}` : "";
    try {
      await Share.share({
        message: `Titre : ${title}${authorText}\n\nParoles :\n${lyrics}\n\n${messagePerso}\n${appLink}`,
      });
    } catch (e) {
      console.error("Erreur partage:", e);
    }
  };

  const handleToggleNightMode = async () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    await AsyncStorage.setItem("appTheme", newTheme);
  };

  const handleFontChange = async (
    newFontFamily: string,
    weight?: "bold" | "normal",
    fId?: string
  ) => {
    setFontFamily(newFontFamily);
    setFontWeight(weight || "normal");
    try {
      await AsyncStorage.setItem("fontFamily", newFontFamily);
      await AsyncStorage.setItem("fontWeight", weight || "normal");
      await AsyncStorage.setItem("fontId", fId || "");
    } catch (e) {
      console.error("Erreur sauvegarde police:", e);
    }
    setFontPickerVisible(false);
  };

  return (
    <FontProvider>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={{ flex: 1 }}>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingTop: 25,
              paddingBottom: author ? 100 : 80,
            }}
            showsVerticalScrollIndicator={false}
          >
            <Text
              selectable
              style={{
                textAlign: "center",
                color: theme === "dark" ? "#fff" : "#000",
                fontSize: currentFontSize,
                fontFamily: fontFamily === "System" ? undefined : fontFamily,
                lineHeight: currentFontSize * 1.4,
              }}
            >
              {lyrics}
            </Text>

            {/* Auteur intégré dans le contenu */}
            {author && String(author).trim() !== "" && (
              <View style={{ marginTop: 30, marginBottom: 20 }}>
                <Text
                  style={{
                    color: theme === "dark" ? "#aaa" : "#444",
                    fontStyle: "italic",
                    fontSize: currentFontSize * 0.9,
                    textAlign: "right",
                  }}
                >
                  {author}
                </Text>
              </View>
            )}
          </ScrollView>
        </View>

        {/* Prev/Next : visibles seulement si une liste existe */}
        {songs.length > 0 && (
          <View style={styles.fixedNavigationButtons}>
            <TouchableOpacity
              style={[styles.button, !previousSong && styles.disabledButton]}
              onPress={() =>
                previousSong &&
                router.replace({
                  pathname: "./ChantDetails",
                  params: {
                    id: previousSong.id,
                    title: previousSong.title,
                    lyrics: previousSong.lyrics,
                    author: previousSong.author,
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
                color={previousSong ? (theme === "dark" ? "#555" : "#0A1E42") : "gray"}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, !nextSong && styles.disabledButton]}
              onPress={() =>
                nextSong &&
                router.replace({
                  pathname: "./ChantDetails",
                  params: {
                    id: nextSong.id,
                    title: nextSong.title,
                    lyrics: nextSong.lyrics,
                    author: nextSong.author,
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
                color={nextSong ? (theme === "dark" ? "#555" : "#0A1E42") : "gray"}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* Barre de zoom */}
        <View style={styles.zoomContainer}>
          <TouchableOpacity
            onPress={handleZoomOut}
            disabled={zoomLevel <= ZOOM_MIN}
            style={[styles.zoomButton, zoomLevel <= ZOOM_MIN && styles.zoomButtonDisabled]}
          >
            <MaterialIcons
              name="zoom-out"
              size={moderateScale(24)}
              color={
                zoomLevel <= ZOOM_MIN ? (theme === "dark" ? "#666" : "#999") : theme === "dark" ? "#fff" : "#0A1E42"
              }
            />
            <Text
              style={[
                styles.zoomButtonText,
                {
                  color:
                    zoomLevel <= ZOOM_MIN
                      ? theme === "dark" ? "#666" : "#999"
                      : theme === "dark" ? "#fff" : "#0A1E42",
                },
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleZoomIn}
            disabled={zoomLevel >= ZOOM_MAX}
            style={[styles.zoomButton, zoomLevel >= ZOOM_MAX && styles.zoomButtonDisabled]}
          >
            <MaterialIcons
              name="zoom-in"
              size={moderateScale(24)}
              color={
                zoomLevel >= ZOOM_MAX ? (theme === "dark" ? "#666" : "#999") : theme === "dark" ? "#fff" : "#0A1E42"
              }
            />
            <Text
              style={[
                styles.zoomButtonText,
                {
                  color:
                    zoomLevel >= ZOOM_MAX
                      ? theme === "dark" ? "#666" : "#999"
                      : theme === "dark" ? "#fff" : "#0A1E42",
                },
              ]}
            />
          </TouchableOpacity>
        </View>

        {/* Footer actions */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={handleFavoritePress}>
            <AntDesign name="star" size={32} color={isFavorite ? "gold" : "gray"} />
            <Text style={styles.footerButtonText}>{isFavorite ? "Retirer" : "Favoris"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerButton} onPress={handleShare}>
            <AntDesign name="share-alt" size={28} color="white" />
            <Text style={styles.footerButtonText}>Partager</Text>
          </TouchableOpacity>
        </View>

        {/* Modal choix de police */}
        <Modal visible={fontPickerVisible} transparent animationType="slide" onRequestClose={() => setFontPickerVisible(false)}>
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
                  const isSelected = fontFamily === font.name && fontWeight === (font.fontWeight || "normal");
                  return (
                    <TouchableOpacity
                      key={font.id}
                      onPress={() => handleFontChange(font.name, font.fontWeight, font.id)}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 5,
                        marginVertical: 5,
                        borderRadius: 8,
                        backgroundColor: isSelected ? (theme === "dark" ? "#4a90e2" : "#e3f2fd") : "transparent",
                        borderWidth: isSelected ? 2 : 1,
                        borderColor: isSelected ? "#4a90e2" : theme === "dark" ? "#555" : "#ddd",
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
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Fermer</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>

        {/* Mode Nuit */}
        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, { color: theme === "dark" ? "#fff" : "#000", marginLeft: 15 }]}>
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

        {/* Toast */}
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
            <Text style={{ color: "#fff", fontSize: 14 }}>{confirmationMessage}</Text>
          </View>
        )}
      </View>
    </FontProvider>
  );
};

const createStyles = (dark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(10),
      backgroundColor: dark ? "black" : "#dfdedcf7",
    },
    title: {
      fontSize: scale(15),
      fontWeight: "bold",
      padding: moderateScale(10),
      textAlign: "center",
      color: dark ? "#fff" : "#0A1E42",
      top: verticalScale(9),
      position: "relative",
      width: "100%",
    },
    scrollViewContent: {
      paddingBottom: verticalScale(150),
    },
    fixedNavigationButtons: {
      position: "absolute",
      bottom: verticalScale(450),
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: moderateScale(5),
    },
    button: {
      padding: moderateScale(-5),
      top: verticalScale(70),
    },
    disabledButton: {
      opacity: 0.5,
    },
    zoomContainer: {
      position: "absolute",
      bottom: verticalScale(40),
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: dark ? "#333" : "#e0e0e0",
      paddingHorizontal: moderateScale(20),
      paddingVertical: moderateScale(8),
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: dark ? "#555" : "#ccc",
      height: verticalScale(90),
    },
    zoomButton: {
      flexDirection: "row",
      alignItems: "center",
      padding: moderateScale(8),
      borderRadius: 8,
      minWidth: scale(80),
      justifyContent: "center",
      bottom: verticalScale(30),
    },
    zoomButtonDisabled: { opacity: 0.5 },
    zoomButtonText: { fontSize: scale(12), fontWeight: "bold", marginLeft: moderateScale(5) },
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
      height: verticalScale(100),
      paddingHorizontal: moderateScale(5),
    },
    footerButton: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: moderateScale(10),
      bottom: 15,
    },
    footerButtonText: {
      color: dark ? "#bbb" : "white",
      fontSize: scale(15),
      marginLeft: moderateScale(10),
      fontWeight: "bold",
    },
    switchContainer: {
      position: "absolute",
      top: verticalScale(-5),
      left: 0,
      right: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: dark ? "#555" : "#ccc",
      paddingHorizontal: scale(10),
      height: verticalScale(30),
      borderBottomWidth: 1,
      borderColor: "white",
      zIndex: 10,
    },
    switchLabel: {
      color: dark ? "white" : "black",
      fontWeight: "bold",
      fontSize: moderateScale(13),
    },
    author: {
      fontStyle: "italic",
      textAlign: "left",
      color: "#750d0dff",
      marginTop: 10,
    },
  });

export default ChantDetails;