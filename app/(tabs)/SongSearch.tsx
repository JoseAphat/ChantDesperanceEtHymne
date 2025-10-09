import { Picker } from "@react-native-picker/picker";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator, FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
//import chantsC from "../ChantDC";
import { Ionicons } from "@expo/vector-icons";
import chantsF from "../ChantDF";

// Mise à jour des données chantsF
const updatedChantsF = chantsF.map((chant) => {
  const idNumber = parseInt(chant.id);
  return {
    ...chant,
    category: "Chant d'Esperance Francais",
    type: idNumber >= 1 && idNumber <= 33 ? "Adoration et Louange" : chant.type,
  };
});
export default function SongSearch() {
  const [selectedType, setSelectedType] = useState(""); // Type par défaut
  const [selectedCategory, setSelectedCategory] = useState(""); // Nouvelle catégorie
  const [loading, setLoading] = useState(true); // État de chargement
  const router = useRouter();
  const navigation = useNavigation();
  const { category = "" } = useLocalSearchParams();

  useEffect(() => {
    setLoading(true); // Commencer le chargement des données
    // Simuler un temps de chargement pour les données
    setTimeout(() => setLoading(false), 1000); // Par exemple, 1 seconde de délai
  }, [category, selectedType, selectedCategory]);

  // Regroupez toutes les chansons
  const allSongs = useMemo(() => [...updatedChantsF], []);

  // Filtrez les chansons par type et catégorie
  const filteredSongs = useMemo(() => {
    return allSongs.filter(
      (song) =>
        (selectedType === "" || song.type === selectedType) &&
        (selectedCategory === "" || song.category === selectedCategory)
    );
  }, [allSongs, selectedType, selectedCategory]);

  const handleSongPress = useCallback((chant: { id: { toString: () => any; }; title: any; lyrics: any; type: any; category: any; }) => {
    router.push({
      pathname: "/ChantDetails",
      params: {
        id: chant.id.toString(),
        title: chant.title,
        lyrics: chant.lyrics,
        type: chant.type,
        category: chant.category, 
      },
    });
  }, [router]);

  useEffect(() => {
  navigation.setOptions({
  headerTitle: () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop:
         Platform.OS === "android" 
         ? StatusBar.currentHeight ?? 24 : 0,
      }}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        Recherche par Index
      </Text>
    </View>
  ),
  headerStyle: {
    height:
     Platform.OS === "android"
      ? 100 + (StatusBar.currentHeight ?? 0)
       : 100,
    backgroundColor: "#0A1E42",
  },
  headerTitleAlign: "center",
  headerLeft: () => (
    <View
      style={{
        marginLeft: 10,
        marginTop: Platform.OS === "android" 
        ? StatusBar.currentHeight ?? 24 : 0,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    </View>
  ),
});
}, [category, navigation]);

  return (
    <View style={styles.container}>
      {/* Sélection de la catégorie */}
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Chant d'Esperance Français" 
          value="Chant d'Esperance Francais" color="#0A1E42" />
        </Picker>
      </View>

      {/* Sélection du type */}
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Adoration et Louange" value="Adoration et Louange" color="#0A1E42" />
          <Picker.Item label="Noël" value="Noël" color="#0A1E42" />
          <Picker.Item label="Jésus-Christ : Sa Mort" value="Jésus-Christ, sa mort"  color="#0A1E42"/>
          <Picker.Item label="Jésus-Christ : Sa Résurrection & Ascension " value="Jésus-Christ,sa résurrection & son ascension" color="#0A1E42" />
          <Picker.Item label="Jésus-Christ : Son Œuvre Continuelle" value="Jésus-Christ, son oeuvre continuelle"  color="#0A1E42"/>
          <Picker.Item label="Jésus-Christ : Son Retour" value="Jésus-Christ, son retour" color="#0A1E42" />
          <Picker.Item label="Le Saint-Esprit" value="Saint-Esprit"  color="#0A1E42"/>
          <Picker.Item label="La Parole" value="La parole"  color="#0A1E42"/>
          <Picker.Item label="Confiance et Assurance" value="Confiance et Assurance" color="#0A1E42" />
          <Picker.Item label="Consécration & Persévérance" value="Consécration et persévérance"  color="#0A1E42"/>
          <Picker.Item label="La Sanctification" value="La sanctification"  color="#0A1E42"/>
          <Picker.Item label="Paix, Repos et Bonheur du Racheté" value="Paix et Bonheur du racheté"  color="#0A1E42"/>
          <Picker.Item label="La Prière" value="La prière" color="#0A1E42" />
          <Picker.Item label="Combat et Victoire" value="Combat et Victoire"  color="#0A1E42"/>
          <Picker.Item label="Évangélisation" value="Évangélisation"  color="#0A1E42"/>
          <Picker.Item label="Le Ciel" value="Le Ciel"  color="#0A1E42"/>
          <Picker.Item label="Amour fraternel" value="Amour Fraternel"  color="#0A1E42"/>
          <Picker.Item label="Le Culte et Dimanche" value="Le Culte et Dimanche" color="#0A1E42" />
          <Picker.Item label="Appel" value="Appel" color="#0A1E42" />
          <Picker.Item label="La Repentance" value="Repentance"  color="#0A1E42"/>
          <Picker.Item label="Le salut par la Foi" value="Le Salut par la Foi" color="#0A1E42" />
          <Picker.Item label="Mariage" value="Mariage" color="#0A1E42" />
          <Picker.Item label="Enterrements" value="Enterrements" color="#0A1E42" />
          <Picker.Item label="Chants Nationaux Chrétiens" value="Chants Nationaux" color="#0A1E42" />
          <Picker.Item label="Les Enfants" value="Les enfants" />
          <Picker.Item label="Le Baptême" value="Le Baptême" color="#0A1E42" />
        </Picker>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredSongs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.songItem} onPress={() => handleSongPress(item)}>
              <View style={styles.songTextContainer}>
                <Text style={styles.songTitle}>{item.title}</Text>
                <Text style={styles.songType}>{item.type}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.songList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  pickerWrapper: {
    borderColor: "#0A1E42",
    borderRadius:5,
    marginVertical: 10,
    shadowColor: "gray",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#f0f0f0',
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
  picker: {
    height: Platform.OS === 'ios' ? 80 : 70,
    fontWeight: "bold",
    color:"#0A1E42",
    marginRight:10

  },
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
  marginTop: verticalScale(7),
  color: "red",
  textAlign: "center",
  left: scale(0),
  top: verticalScale(5),
  fontStyle:"italic"
},
noSongsText: {
  fontSize: moderateScale(16),
  color: "#888",
  textAlign: "center",
  marginTop: verticalScale(20),
},
});



