// app/results.tsx (ou app/SearchResults.tsx selon ta route)
import { categoryMap } from "@/components/data/categoryMap";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

/* ========= Normalisation robuste (accents, tirets, apostrophes, ligatures) ========= */
const DASHES_RE =
  /[\u002D\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g; // -, ‐, -, ‒, –, —, ―, −, ﹘, ﹣, －
const DIACRITICS_RE = /[\u0300-\u036f]/g;

const normalizeText = (s: string) =>
  (s || "")
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(DIACRITICS_RE, "")
    .replace(DASHES_RE, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();

/* ========= Debounce simple ========= */
function useDebouncedValue<T>(value: T, delay = 250) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

type ResultItem = {
  id: number | string;
  type: string;
  title: string;
  lyrics: string;
  category: string;
  author?: string;
};

const LONG_LYRICS_THRESHOLD = 4000; // au-delà => on passe par AsyncStorage

const SearchResults: React.FC = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  // Récupération sûre du JSON une seule fois
  const results: ResultItem[] = useMemo(() => {
    try {
      const raw = Array.isArray(params.results)
        ? params.results[0]
        : (params.results as string);
      const parsed = JSON.parse(raw || "[]");
      return Array.isArray(parsed)
        ? parsed.map((r) => ({
            id: r.id,
            type: r.type ?? "",
            title: r.title ?? "",
            lyrics: r.lyrics ?? "",
            category: r.category ?? "",
            author: r.author ?? "",
          }))
        : [];
    } catch (e) {
      console.warn("results: JSON parse error", e);
      return [];
    }
  }, [params.results]);

  // Catégorie transmise (facultatif)
  const category = useMemo(() => {
    const c = Array.isArray(params.category)
      ? params.category[0]
      : (params.category as string) || "";
    return c;
  }, [params.category]);

useEffect(() => {
  const barTop = Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) : 0;
  const title =
    (category && (category as string) in categoryMap ? category : "Recherche") ||
    "Recherche";

  navigation.setOptions({
    header: () => (
      <SafeAreaView style={{ backgroundColor: "#0A1E42" }}>
        <View
          style={{
            paddingTop: barTop,          // évite chevauchement Android
            paddingHorizontal: 20,       // >>> plus d'espace horizontal
            paddingBottom: 16,
            height: 80,                 // >>> plus haut (augmente si tu veux)
            backgroundColor: "#0A1E42",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Back */}
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{top:10,left:10,bottom:10,right:10}}>
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>

          {/* Titre au centre, occupe la largeur */}
          <View style={{ flex: 1, paddingHorizontal: 12 }}>
            <Text
              numberOfLines={2}                 // autorise 2 lignes si titre long
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          </View>

          {/* Espace à droite pour équilibrer la flèche gauche */}
          <View style={{ width: 26 }} />
        </View>
      </SafeAreaView>
    ),
  });
}, [navigation, category]);


  // Recherche locale (sur les résultats déjà calculés par l'écran précédent)
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebouncedValue(searchTerm, 250);
  const [loading, setLoading] = useState(false);

  const filteredItems = useMemo(() => {
    const q = debouncedTerm.trim();
    if (!q) return results;

    const isNum = /^\d+$/.test(q);
    if (isNum) {
      return results.filter((it) => String(it.id).startsWith(q));
    }

    const nq = normalizeText(q);
    return results.filter((it) => {
      const t = normalizeText(it.title || "");
      // on normalise un extrait des lyrics pour éviter un coût énorme
      const ly = normalizeText((it.lyrics || "").slice(0, 800));
      return t.includes(nq) || ly.includes(nq);
    });
  }, [debouncedTerm, results]);

  // Navigation : use Storage automatiquement si gros texte
  const goToDetails = useCallback(
    async (item: ResultItem) => {
      const idStr = String(item.id);
      const isHuge = (item.lyrics || "").length > LONG_LYRICS_THRESHOLD;

      try {
        if (isHuge) {
          await AsyncStorage.setItem(
            `temp_chant_${idStr}`,
            JSON.stringify({
              id: idStr,
              title: item.title,
              lyrics: item.lyrics,
              author: item.author ?? "",
              category: item.category,
              previousTitle: item.type || item.category,
              timestamp: Date.now(),
            })
          );

          router.push({
            pathname: "/ChantDetails",
            params: {
              id: idStr,
              category: item.category,
              useStorage: "true",
            },
          });
        } else {
          router.push({
            pathname: "/ChantDetails",
            params: {
              id: idStr,
              title: item.title.slice(0, 500),
              lyrics: (item.lyrics || "").slice(0, 10000),
              author: item.author ?? "",
              category: item.category,
              previousTitle: item.type || item.category,
            },
          });
        }
      } catch (e) {
        console.error("Navigation error:", e);
        // dernier recours minimal
        router.push(`/ChantDetails?id=${encodeURIComponent(idStr)}&category=${encodeURIComponent(item.category)}`);
      }
    },
    []
  );

  // (Optionnel) si tu veux montrer un “chargement” lors du debounce
  useEffect(() => {
    if (!searchTerm) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 180);
    return () => clearTimeout(t);
  }, [debouncedTerm]);

  const renderItem = useCallback(
    ({ item }: { item: ResultItem }) => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => goToDetails(item)}
        activeOpacity={0.7}
      >
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.itemCategory} numberOfLines={1}>
          {item.category}
        </Text>
      </TouchableOpacity>
    ),
    [goToDetails]
  );

  const keyExtractor = useCallback(
    (it: ResultItem, idx: number) => `${it.type}|${it.category}|${it.id}|${idx}`,
    []
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Rechercher dans ces résultats (n°, titre, paroles)…"
        placeholderTextColor={"gray"}
        style={styles.searchInput}
        returnKeyType="search"
      />
      {loading && <ActivityIndicator size="small" color="#1C1362" style={{ marginBottom: 8 }} />}

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews
        maxToRenderPerBatch={12}
        windowSize={10}
        initialNumToRender={12}
        ItemSeparatorComponent={() => <View style={{ height: verticalScale(8) }} />}
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

export default SearchResults;

/* =================================== Styles =================================== */
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
    marginBottom: verticalScale(10),
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
    bottom: verticalScale(2),
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
    marginTop: verticalScale(4),
    fontStyle: "italic",
    textAlign: "center",
    top: verticalScale(4),
  },
  resetButton: {
    marginTop: verticalScale(10),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    backgroundColor: "#1C1362",
    borderRadius: moderateScale(5),
  },
});
