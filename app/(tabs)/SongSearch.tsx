import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker"; // utilisé uniquement sur Android
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";
import AdBanner from '@/components/AdBanner';

// --- Données ---
import chantsF from "@/data/ChantDF";


// Harmonisation des champs (déduit type pour 1..33 sinon garde l’existant si présent)
const updatedChantsF = chantsF.map((chant: any) => {
  const idNumber = parseInt(chant.id, 10);
  return {
    ...chant,
    id: chant.id,
    title: chant.title,
    lyrics: chant.lyrics,
    type: idNumber >= 1 && idNumber <= 33 ? "Adoration et Louange" : chant.type || "",
    category: "Chant d'Esperance Francais",
  };
});

type Chant = {
  id: string | number;
  title: string;
  lyrics: string;
  type: string;
  category: string;
};

// ----- Mini “dropdown” iOS (modal) pour unifier l’UX avec Android -----
const IOSPicker: React.FC<{
  value: string;
  onChange: (val: string) => void;
  items: { label: string; value: string }[];
  placeholder?: string;
}> = ({ value, onChange, items, placeholder = "Choisir…" }) => {
  const [open, setOpen] = useState(false);
  const current = items.find((i) => i.value === value)?.label || placeholder;

  return (
    <>
      <TouchableOpacity
        style={[styles.pickerWrapper, styles.iosPickerTrigger]}
        activeOpacity={0.7}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.iosPickerTriggerText}>{current}</Text>
        <Ionicons name="chevron-down" size={18} color="#0A1E42" />
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <View style={styles.iosPickerOverlay}>
          <View style={styles.iosPickerSheet}>
            <View style={styles.iosPickerHeader}>
              <Text style={styles.iosPickerHeaderTitle}>Sélectionner</Text>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Text style={styles.iosPickerHeaderClose}>Fermer</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={items}
              keyExtractor={(it) => it.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                  style={styles.iosPickerRow}
                >
                  <Text
                    style={[
                      styles.iosPickerRowText,
                      item.value === value && { fontWeight: "700" },
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.iosPickerSeparator} />}
              contentContainerStyle={{ paddingBottom: 12 }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default function SongSearch() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const navigation = useNavigation();
  const { category = "" } = useLocalSearchParams();

  // Header custom (même look & largeur iOS/Android)
  useEffect(() => {
  navigation.setOptions({
    header: () => (
      <SafeAreaView style={{ backgroundColor: "#0A1E42" }}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingBottom: 6,
            height: 84,                     // ← avant: 120
            backgroundColor: "#0A1E42",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>

          <Text
            style={{ color: "#fff", fontSize: 16, fontWeight: "700" }} // ← avant: 18
            numberOfLines={1}
          >
            Recherche par Index
          </Text>

          <View style={{ width: 22 }} />
        </View>
      </SafeAreaView>
    ),
  });
}, [navigation]);
 // Simuler un temps de chargement (ou remplace par ton vrai fetch)
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, [category, selectedType, selectedCategory]);

  // Toutes les chansons (mémo)
  const allSongs: Chant[] = useMemo(() => [...updatedChantsF], []);

  // Filtres (mémo)
  const filteredSongs = useMemo(() => {
    return allSongs.filter(
      (song) =>
        (selectedType === "" || song.type === selectedType) &&
        (selectedCategory === "" || song.category === selectedCategory)
    );
  }, [allSongs, selectedType, selectedCategory]);

  const handleSongPress = useCallback(
    (chant: Chant) => {
      router.push({
        pathname: "./ChantDetails",
        params: {
          id: String(chant.id),
          title: chant.title,
          lyrics: chant.lyrics,
          type: chant.type,
          category: chant.category,
        },
      });
    },
    [router]
  );

  // Items des sélecteurs
  const categoryItems = useMemo(
    () => [{ label: "Chant d'Esperance Français", value: "Chant d'Esperance Francais" }],
    []
  );

  const typeItems = useMemo(
    () => [
      { label: "Adoration et Louange", value: "Adoration et Louange" },
      { label: "Noël", value: "Noël" },
      { label: "Jésus-Christ : Sa Mort", value: "Jésus-Christ, sa mort" },
      {
        label: "Jésus-Christ : Sa Résurrection & Ascension",
        value: "Jésus-Christ,sa résurrection & son ascension",
      },
      { label: "Jésus-Christ : Son Œuvre Continuelle", value: "Jésus-Christ, son oeuvre continuelle" },
      { label: "Jésus-Christ : Son Retour", value: "Jésus-Christ, son retour" },
      { label: "Le Saint-Esprit", value: "Saint-Esprit" },
      { label: "La Parole", value: "La parole" },
      { label: "Confiance et Assurance", value: "Confiance et Assurance" },
      { label: "Consécration & Persévérance", value: "Consécration et persévérance" },
      { label: "La Sanctification", value: "La sanctification" },
      { label: "Paix, Repos et Bonheur du Racheté", value: "Paix et Bonheur du racheté" },
      { label: "La Prière", value: "La prière" },
      { label: "Combat et Victoire", value: "Combat et Victoire" },
      { label: "Évangélisation", value: "Évangélisation" },
      { label: "Le Ciel", value: "Le Ciel" },
      { label: "Amour fraternel", value: "Amour Fraternel" },
      { label: "Le Culte et Dimanche", value: "Le Culte et Dimanche" },
      { label: "Appel", value: "Appel" },
      { label: "La Repentance", value: "Repentance" },
      { label: "Le salut par la Foi", value: "Le Salut par la Foi" },
      { label: "Mariage", value: "Mariage" },
      { label: "Enterrements", value: "Enterrements" },
      { label: "Chants Nationaux Chrétiens", value: "Chants Nationaux" },
      { label: "Les Enfants", value: "Les enfants" },
      { label: "Le Baptême", value: "Le Baptême" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <AdBanner />
      {/* Catégorie */}
      <View style={{ marginBottom: 10 }}>
        {Platform.OS === "ios" ? (
          <IOSPicker
            value={selectedCategory}
            onChange={setSelectedCategory}
            items={categoryItems}
            placeholder="Catégorie"
          />
        ) : (
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(v) => setSelectedCategory(v)}
              style={styles.picker}
              dropdownIconColor="#0A1E42"
              mode="dropdown"
            >
              {categoryItems.map((it) => (
                <Picker.Item key={it.value} label={it.label} value={it.value} color="#0A1E42" />
              ))}
            </Picker>
          </View>
        )}
      </View>

      {/* Type */}
      <View style={{ marginBottom: 10 }}>
        {Platform.OS === "ios" ? (
          <IOSPicker
            value={selectedType}
            onChange={setSelectedType}
            items={typeItems}
            placeholder="Type"
          />
        ) : (
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedType}
              onValueChange={(v) => setSelectedType(v)}
              style={styles.picker}
              dropdownIconColor="#0A1E42"
              mode="dropdown"
            >
              {typeItems.map((it) => (
                <Picker.Item key={it.value} label={it.label} value={it.value} color="#0A1E42" />
              ))}
            </Picker>
          </View>
        )}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0A1E42" />
      ) : (
        <FlatList
          data={filteredSongs}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.songItem} onPress={() => handleSongPress(item)}>
              <View style={styles.songTextContainer}>
                <Text style={styles.songTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.songType} numberOfLines={1}>
                  {item.type}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.songList}
          removeClippedSubviews
          windowSize={10}
          maxToRenderPerBatch={10}
          initialNumToRender={12}
          bounces={false}                 // iOS : pas d'effet ressort
          decelerationRate="fast"         // inertie proche Android
          keyboardShouldPersistTaps="handled"
          ItemSeparatorComponent={() => <View style={{ height: verticalScale(6) }} />}
          ListEmptyComponent={
            <Text style={styles.noSongsText}>Aucun chant pour ce filtre.</Text>
          }
        />
      )}
    </View>
  );
}

/* ============================== Styles ============================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },

  /* Header */
  headerBar: {
    paddingHorizontal: 20,
    paddingBottom: 14,
    height: 120,
    backgroundColor: "#0A1E42",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  /* Pickers */
  pickerWrapper: {
    borderColor: "#0A1E42",
    borderRadius: 6,
    backgroundColor: "#f0f0f0",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    elevation: 5,
    shadowColor: "gray",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  picker: {
    height: Platform.OS === "ios" ? 80 : 70,
    color: "#0A1E42",
    fontWeight: "bold",
  },

  // iOS custom dropdown
  iosPickerTrigger: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
  },
  iosPickerTriggerText: {
    color: "#0A1E42",
    fontWeight: "600",
  },
  iosPickerOverlay: {
    flex: 1,
    backgroundColor: "rgba(222, 214, 214, 0.35)",
    justifyContent: "flex-end",
  },
  iosPickerSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: "60%",
  },
  iosPickerHeader: {
    padding: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iosPickerHeaderTitle: {
    fontWeight: "700",
    color: "#0A1E42",
  },
  iosPickerHeaderClose: {
    color: "#0A1E42",
    fontWeight: "600",
  },
  iosPickerRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iosPickerRowText: {
    color: "#0A1E42",
    fontWeight: "500",
  },
  iosPickerSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#eee",
  },

  /* Liste */
  songList: {
    paddingBottom: 25,
  },
  songItem: {
    backgroundColor: "#ffffff",
    padding: moderateScale(10),
    marginVertical: moderateScale(5),
    marginHorizontal: moderateScale(8),
    borderRadius: moderateScale(6),
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: "red",
    borderLeftWidth: moderateScale(3),
    borderRightWidth: moderateScale(2),
  },
  songTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  songTitle: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "#0A1E42",
  },
  songType: {
    fontSize: moderateScale(14),
    marginTop: verticalScale(6), 
    color: "#888",
    textAlign: "center",
    fontStyle: "italic",
  },
  noSongsText: {
    fontSize: moderateScale(16),
    color: "#888",
    textAlign: "center",
    marginTop: verticalScale(20),
  },
});
