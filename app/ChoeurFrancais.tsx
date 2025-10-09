import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import frenchSongs from './ChoeurFr';

const { width, height } = Dimensions.get("window");
// Typage pour les chants
interface Chant {
  id: string | number;
  title: string;
  lyrics: string;
}

// Props pour RenderItem
interface RenderItemProps {
  item: Chant;
  onPress: (chant: Chant) => void;
}

const RenderItem = React.memo(({ item, onPress }: RenderItemProps) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(item)}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
));

const ChoeurFrancais: React.FC = () => {
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList>(null);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
   const [searchInput, setSearchInput] = useState("");
   const isNumericInput = /^\d+$/.test(searchInput.trim());

  useEffect(() => {
     navigation.setOptions({
  headerTitle: () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 60,  // Ajouter du padding en haut
        paddingBottom: 40,  // Ajouter du padding en bas
      }}
    >
      <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
        Chœurs Français
      </Text>
    </View>
  ),
  headerStyle: {
    height: 200 + (Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) : 0),
    backgroundColor: "#0A1E42",
  },
  headerTitleAlign: "center",
  headerLeft: () => (
    <View
      style={{
        marginLeft: 10,
        marginTop: 20,  // Ajuster pour aligner avec le titre
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    </View>
  ),
});
  }, [navigation]);

  const handleChantPress = (chant: Chant, index: number) => {
      router.push({
        pathname: '/ChantDetails' as any,
        params: {
          id: chant.id.toString(),
          title: chant.title,
          lyrics: chant.lyrics,
      category: "Choeurs Français",
      previousTitle: "Choeurs Français",
        }
    });
  };

  // Défilement vers le haut
  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  // Défilement vers le bas
  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const handleScroll = (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowUpArrow(offsetY > 100);
    setShowDownArrow(offsetY < (frenchSongs.length * 70) - height); // Ajustement dynamique
  };
  const normalizeText = (text: string): string =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,/#!$%^&*;:{}=\-_`~()'"?«»]/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  return (
    <View style={styles.container}>
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
            />
      <FlatList
        ref={flatListRef} // 🔹 Ajout de la référence
        data={
          searchInput.trim() === ""
            ? frenchSongs
            : /^\d+$/.test(searchInput.trim())
            ? frenchSongs.filter(
                (song) => song.id.toString() === searchInput.trim()
              )
            : frenchSongs.filter((song) => {
                const normalizedTitle = normalizeText(song.title || "");
                const normalizedLyrics = normalizeText(song.lyrics || "");
                const normalizedSearch = normalizeText(searchInput);

                return (
                  normalizedTitle.includes(normalizedSearch) ||
                  normalizedLyrics.includes(normalizedSearch)
                );
              })
        }
        renderItem={({ item, index }) => (
          <RenderItem item={item} onPress={() => handleChantPress(item, index)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        getItemLayout={(data, index) => ({ length: 70, offset: 70 * index, index })}
        onScroll={handleScroll} // 🔹 Ajout de l'écouteur de scroll
        scrollEventThrottle={16} // Meilleure fluidité du scroll
        contentContainerStyle={{ paddingBottom: 80 }} // 🔹 Ajoute de l'espace en bas
      />

      {/* Bouton pour défiler vers le haut */}
      {showUpArrow && (
        <TouchableOpacity style={styles.upButton} onPress={scrollToTop}>
          <AntDesign name="arrow-up" size={20} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Bouton pour défiler vers le bas */}
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
    backgroundColor: "#dfdedcf7",
    padding: moderateScale(16),
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
    fontSize: scale(16),
    fontWeight: "600",
    color: "#0A1E42",
  },
  upButton: {
    position: 'absolute',
    bottom: verticalScale(30),
    right: scale(20),
    backgroundColor: "#0A1E42",
    borderRadius: scale(25),
    padding: scale(10),
    elevation: 5,
  },
  downButton: {
    position: 'absolute',
    bottom: verticalScale(30),
    right: scale(20),
    backgroundColor: "#0A1E42",
    borderRadius: scale(25),
    padding: scale(10),
    elevation: 10,
  },
});

export default ChoeurFrancais;
