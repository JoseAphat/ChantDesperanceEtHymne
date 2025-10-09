import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import CreoleSongs from './KeKreyol';

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

const { height } = Dimensions.get("window");

const ChoeurCreole: React.FC = () => {
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
        Chœurs Créole
      </Text>
    </View>
  ),
  headerStyle: {
    height: 200 + (Platform.OS === "android" 
      ? (StatusBar.currentHeight ?? 0) : 0),
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
      category: "Chœurs Créole",
      previousTitle: "Chœurs Créole",
      }
    });
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const scrollToBottom = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: CreoleSongs.length * 70 });
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    
    setShowUpArrow(offsetY > 100);
    setShowDownArrow(offsetY + height < contentHeight - 50);
  };
  const normalizeText = (text: string): string =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,/#!$%^&*;:{}=\-_`~()'"?«»]/g, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+/g," ")
      .replace(/\by\s*ap\b/g,"yap")
      .replace(/\bn\s*ap\b/g,"nap")
      .replace(/\bm\s*a\b/g,"ma")
      .replace(/\bm\s+ap\b/g,"map")
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
        ref={flatListRef} 
         data={
          searchInput.trim() === ""
            ? CreoleSongs
            : /^\d+$/.test(searchInput.trim())
            ? CreoleSongs.filter(
                (song) => song.id.toString() === searchInput.trim()
              )
            : CreoleSongs.filter((song) => {
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
          <TouchableOpacity style={styles.item} onPress={() => handleChantPress(item, index)}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        getItemLayout={(data, index) => ({ length: 70, offset: 70 * index, index })}
        onScroll={handleScroll}
        scrollEventThrottle={16}
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

export default ChoeurCreole;
