// app/components/SongListScreen.tsx
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

// ⬇️ adapte cet import si besoin: "@/utils/services" ou "../../utils/services"
import { addChantToService, SectionKey } from "@/utils/services";

export interface Chant {
  id: string | number;
  title: string;
  lyrics: string;
  author?: string; // ← Rend author optionnel pour correspondre à ChantDetails
}

type NormalizeMode = "default" | "creole";

interface Props {
  data: Chant[];
  headerTitle: string;
  category: string;
  previousTitle?: string;
  normalizeMode?: NormalizeMode;
}

const SongListScreen: React.FC<Props> = ({
  data,
  headerTitle,
  category,
  previousTitle,
  normalizeMode = "default",
}) => {
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList<Chant>>(null);

  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const params = useLocalSearchParams();
  const fromNotes = params?.fromNotes === "true";
  const section = (params?.section as SectionKey) || undefined;
  const serviceId = (params?.serviceId as string) || undefined;

  const isNumericInput = /^\d+$/.test(searchInput.trim());
  const DASHES_RE = /[\u002D\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g; // -, ‐, -, ‒, –, —, ―, −, ﹘, ﹣, －
  const DIACRITICS_RE = /[\u0300-\u036f]/g;
  const PUNCT_RE = /[.,/#!$%^&*;:{}=_`~()'"?«»]/g; // on laisse le tiret géré à part
  const MULTISPACE_RE = /\s{2,}/g;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 60, paddingBottom: 40 }}>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>{headerTitle}</Text>
        </View>
      ),
      headerStyle: {
        height: 200 + (Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) : 0),
        backgroundColor: "#0A1E42",
      },
      headerTitleAlign: "center",
      headerLeft: () => (
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, headerTitle]);

  const normalize = (text: string): string => {
    let t = (text || "")
      .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(DIACRITICS_RE, "")       // ô -> o, naïf -> naif, etc.
    .replace(DASHES_RE, " ")           // tous les tirets -> espace
    .replace(PUNCT_RE, "")             // ponctuation (sans tirets)
    .replace(/\s+/g, " ")              // compresse
    .trim();

    if (normalizeMode === "creole") {
      t = t
        .replace(/\s+/g, " ")
        .replace(/\by\s*ap\b/g, "yap")
        .replace(/\bn\s*ap\b/g, "nap")
        .replace(/\bm\s*a\b/g, "ma")
        .replace(/\bm\s+ap\b/g, "map");
    }
    return t;
  };

  const filteredData = useMemo(() => {
    const q = searchInput.trim();
    if (!q) return data;

    if (/^\d+$/.test(q)) {
      return data.filter((song) => String(song.id) === q);
    }

    const nq = normalize(q);
    return data.filter((song) => {
      const t = normalize(song.title || "");
      const l = normalize(song.lyrics || "");
      const a = normalize(song.author || "");

      return t.includes(nq) || l.includes(nq) || a.includes(nq);
    });
  }, [searchInput, data]);

  const handlePress = async (chant: Chant) => {
    if (fromNotes) {
      if (!serviceId || !section) {
        Alert.alert("Notes", "Service ou section manquant.");
        return;
      }
      const res = await addChantToService(serviceId, section, {
        id: chant.id,
        title: chant.title,
        lyrics: chant.lyrics,
        author: chant.author || "", 
        category, 
      });
      if (!res.ok) {
        Alert.alert("Erreur", res.error || "Impossible d'ajouter ce chant.");
        return;
      }
      Alert.alert("Ajouté", "Chant ajouté au service !", [
        { text: "OK", onPress: () => router.back() },
      ]);
      return;
    }

    // Sinon: ouvrir les détails
    router.push({
      pathname: "/ChantDetails",
      params: {
        id: String(chant.id),
        title: chant.title,
        lyrics: chant.lyrics,
        author: chant.author || "", // ← Gère author optionnel
        category,
        previousTitle: previousTitle || headerTitle,
      },
    });
  };

  const handleScroll = (e: any) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const contentH = e.nativeEvent.contentSize.height;
    const layoutH = e.nativeEvent.layoutMeasurement.height;

    setShowUpArrow(offsetY > 100);
    setShowDownArrow(offsetY + layoutH < contentH - 20);
  };

  const scrollToTop = () => flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  const scrollToBottom = () => flatListRef.current?.scrollToEnd({ animated: true });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Numéro ou paroles"
        placeholderTextColor="#555"
        keyboardType={isNumericInput ? "numeric" : "default"}
        value={searchInput}
        onChangeText={setSearchInput}
        style={styles.search}
        returnKeyType="search"
        onSubmitEditing={() => filteredData.length && scrollToTop()}
      />

  <FlatList
  ref={flatListRef}
  data={filteredData}
  keyExtractor={(item) => String(item.id)}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      {!!item.author && (
        <Text style={styles.author} numberOfLines={1}>Traduit par {item.author}</Text>
      )}
    </TouchableOpacity>
  )}
  // getItemLayout — supprimé
  onScroll={handleScroll}
  scrollEventThrottle={16}
  removeClippedSubviews={true}         // perf Android
  windowSize={10}
  maxToRenderPerBatch={10}
  initialNumToRender={12}
  contentContainerStyle={{ paddingBottom: verticalScale(140) }} // pour ne pas cacher le dernier item
  ItemSeparatorComponent={() => <View style={{ height: verticalScale(8) }} />}
/>


      {showUpArrow && (
        <TouchableOpacity style={styles.upButton} onPress={scrollToTop}>
          <AntDesign name="arrow-up" size={20} color="#fff" />
        </TouchableOpacity>
      )}

      {showDownArrow && (
        <TouchableOpacity style={styles.downButton} onPress={scrollToBottom}>
          <AntDesign name="arrow-down" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SongListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#dfdedcf7", padding: moderateScale(16) },
  search: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: moderateScale(16),
    marginVertical: verticalScale(8),
    marginHorizontal: scale(12),
    borderRadius: moderateScale(8),
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderColor: "red",
    borderLeftWidth: scale(3),
    borderRightWidth: scale(2),
  },
  title: { 
    fontSize: scale(15), 
    fontWeight: "600", 
    color: "#0A1E42" 
  },
  author: {
    fontSize: scale(12),
    fontStyle: "italic",
    color: "#666",
    marginTop: verticalScale(4),
  },
  upButton: {
    position: "absolute",
    bottom: verticalScale(80), // ← Ajusté pour éviter chevauchement
    right: scale(20),
    backgroundColor: "#0A1E42",
    borderRadius: scale(25),
    padding: scale(10),
    elevation: 5,
  },
  downButton: {
    position: "absolute",
    bottom: verticalScale(30),
    right: scale(20),
    backgroundColor: "#0A1E42",
    borderRadius: scale(25),
    padding: scale(10),
    elevation: 10,
  },
});