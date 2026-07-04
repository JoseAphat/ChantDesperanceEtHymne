/* eslint-disable react/display-name */
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
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
  View
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import GloA from "@/data/Gloire";
import AdBanner from "@/components/AdBanner";
// ✨ Aligné sur SongListScreen.tsx : on utilise le même système de service Firestore
import { addChantToService, SectionKey } from "@/utils/services";

// Typage pour les chants
interface Chant {
  id: string | number;
  title: string;
  lyrics: string;
}

// Props pour RenderItem
interface RenderItemProps {
  item: Chant;
  onPress: () => void; // ✨ MODIF: simplifié
}

const RenderItem = React.memo(({ item, onPress }: RenderItemProps) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
));

const GloireAGneau: React.FC = () => {
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList>(null);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const isNumericInput = /^\d+$/.test(searchInput.trim());

  // Paramètres envoyés depuis le sélecteur de catégorie (Mes Notes / Cultes)
  const params = useLocalSearchParams();
  const fromNotes = params?.fromNotes === "true";
  const section = (params?.section as SectionKey) || undefined;
  const serviceId = (params?.serviceId as string) || undefined;

  // ✨ MODIF: header sans flicker
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 60,
            paddingBottom: 40,
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
            Gloire à l&apos;Agneau
          </Text>
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
  }, [navigation]);

  // Normalisation (kreyòl-friendly)
  const normalizeText = (text: string): string =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,/#!$%^&*;:{}=\-_`~()'"?«»]/g, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+/g, " ")
      .replace(/\by\s*ap\b/g, "yap")
      .replace(/\bn\s*ap\b/g, "nap")
      .replace(/\bm\s*a\b/g, "ma")
      .replace(/\bm\s+ap\b/g, "map")
      .trim();

  // ✨ MODIF: filtrage mémoïsé
  const filteredData = useMemo(() => {
    const q = searchInput.trim();
    if (!q) return GloA;

    if (/^\d+$/.test(q)) {
      return GloA.filter((song) => song.id.toString() === q);
    }
    const nq = normalizeText(q);
    return GloA.filter((song) => {
      const t = normalizeText(song.title || "");
      const l = normalizeText(song.lyrics || "");
      return t.includes(nq) || l.includes(nq);
    });
  }, [searchInput]);

  // Ajout au culte en cours via Firestore — même logique que SongListScreen.tsx
  const addChantToNotes = async (chant: Chant) => {
    if (!serviceId || !section) {
      Alert.alert("Notes", "Service ou section manquant.");
      return;
    }
    const res = await addChantToService(serviceId, section, {
      id: chant.id,
      title: chant.title,
      lyrics: chant.lyrics,
      category: "Gloire à l'Agneau",
    });
    if (!res.ok) {
      Alert.alert("Erreur", res.error || "Impossible d'ajouter ce chant.");
      return;
    }
    Alert.alert("Ajouté", "Chant ajouté au service !", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  // ✨ MODIF: si fromNotes => ajout; sinon => Détails
  const handleChantPress = (chant: Chant) => {
    if (fromNotes) {
      addChantToNotes(chant);
      return;
    }
    router.push({
  pathname: './ChantDetails',
  params: {
    id: chant.id.toString(),
    title: chant.title,
    category: "Gloire à l'Agneau",
    previousTitle: "Gloire à l'Agneau",
  }
});
  };

  // ✨ MODIF: flèches basées sur mesures réelles (plus fiable)
  const [contentHeight, setContentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const handleScrollMeasured = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowUpArrow(offsetY > 100);
    setShowDownArrow(offsetY + viewportHeight < contentHeight - 20);
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <AdBanner />
      <TextInput
        placeholder="Numéro ou paroles..."
        placeholderTextColor="#555"
        keyboardType={isNumericInput ? "numeric" : "default"}
        value={searchInput}
        onChangeText={setSearchInput}
        style={{
          backgroundColor: "#f0f0f0",
          padding: 10,
          margin: 10,
          borderRadius: 8,
          fontSize: 16,
        }}
        returnKeyType="search"
        onSubmitEditing={() => filteredData.length && scrollToTop()}
      />

      <FlatList
        ref={flatListRef}
        data={filteredData}
        renderItem={({ item }) => (
          <RenderItem item={item} onPress={() => handleChantPress(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        getItemLayout={(data, index) => ({ length: 60, offset: 60 * index, index })}
        onScroll={handleScrollMeasured}
        // 🔹 AJOUT: mesures pour des flèches fiables
        onLayout={(e) => setViewportHeight(e.nativeEvent.layout.height)}
        onContentSizeChange={(_, h) => setContentHeight(h)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdedcf7", // Couleur d'arrière-plan claire
    padding: moderateScale(16),   // Ajustement avec moderateScale pour un padding plus fluide
  },
  item: {
    backgroundColor: "#ffffff", // Blanc pour le fond de chaque item
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
    fontSize: scale(16),
    fontWeight: "600",
    color: "#0A1E42", // ✨ MODIF: corrige la couleur (manquait le '#')
  },
  upButton: {
    position: "absolute",
    bottom: verticalScale(30),
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

export default GloireAGneau;