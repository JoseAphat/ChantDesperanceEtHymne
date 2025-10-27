import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { categories } from "../components/categories";

type SectionKey = "introduction" | "partie1" | "partie2" | "partie3";

interface PickerParams {
  serviceId?: string;
  section?: SectionKey;
}

const CategoryPicker: React.FC = () => {
  const { serviceId, section } = useLocalSearchParams<PickerParams>();
  const [query, setQuery] = useState("");
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const data = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        (c.searchKeywords?.some((k) => k.toLowerCase().includes(q)) ?? false)
    );
  }, [query]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false, headerTitle: "" });
  }, [navigation]);

  const handlePick = (route: string) => {
    if (!serviceId || !section) {
      alert("Paramètres incomplets (service/section).");
      return;
    }
    router.push({
      pathname: route,
      params: {
        fromNotes: "true",
        serviceId,
        section,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
      {/* 🔹 HEADER PERSONNALISÉ */}
      <View
        style={[
          styles.header,
          { paddingTop: insets.top + (Platform.OS === "android" ? verticalScale(6) : 0) },
        ]}
      >
        <View style={styles.headerInner}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerBtn}>
            <Ionicons name="arrow-back" size={scale(20)} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle} numberOfLines={1}>
            Choisir une catégorie
          </Text>

          <View style={styles.headerBtn} />
        </View>
      </View>

      {/* 🔹 CONTENU */}
      <View style={styles.container}>
        {/* Barre de recherche */}
        <View style={styles.searchRow}>
          <Ionicons name="search" size={scale(18)} color="#666" />
          <TextInput
            placeholder="Rechercher une catégorie…"
            placeholderTextColor="#666"
            value={query}
            onChangeText={setQuery}
            style={styles.searchInput}
            returnKeyType="search"
          />
        </View>

        {/* Liste de catégories */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.route}
          ItemSeparatorComponent={() => <View style={{ height: verticalScale(10) }} />}
          contentContainerStyle={{ paddingVertical: verticalScale(10), paddingBottom: verticalScale(20) }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handlePick(item.route)}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>{item.label}</Text>
                {item.subtitle ? <Text style={styles.itemSub}>{item.subtitle}</Text> : null}
              </View>
              <Ionicons name="chevron-forward" size={scale(18)} color="#0A1E42" />
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>Aucune catégorie ne correspond à votre recherche.</Text>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryPicker;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0A1E42",
  },

  header: {
    backgroundColor: "#0A1E42",
    borderBottomLeftRadius: moderateScale(12),
    borderBottomRightRadius: moderateScale(12),
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(12),
  },

  headerInner: {
    height: verticalScale(50),
    flexDirection: "row",
    alignItems: "center",
  },

  headerBtn: {
    padding: scale(6),
    width: scale(36),
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: scale(15),
  },

  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: scale(12),
    paddingTop: verticalScale(10),
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(8),
    gap: scale(8),
    marginBottom: verticalScale(6),
  },

  searchInput: {
    flex: 1,
    color: "#111",
    fontSize: scale(13),
    paddingVertical: verticalScale(2),
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(10),
    padding: moderateScale(14),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },

  itemTitle: {
    color: "#0A1E42",
    fontWeight: "700",
    fontSize: scale(14),
  },

  itemSub: {
    color: "#666",
    marginTop: verticalScale(2),
    fontSize: scale(11),
  },

  empty: {
    textAlign: "center",
    color: "#999",
    marginTop: verticalScale(20),
    fontStyle: "italic",
    fontSize: scale(12),
  },
});
