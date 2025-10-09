/* eslint-disable react/display-name */
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MelodieF from './MelF';

import { Ionicons } from '@expo/vector-icons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

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

const MelodieJoyeusesFrancais: React.FC = () => {
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
        Mélodies Joyeuses Français
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
        marginTop: 20,
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
      category: "Mélodies Joyeuses Français",
      previousTitle: "Mélodies Joyeuses Français",
      }
    });
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowUpArrow(offsetY > 100);
    setShowDownArrow(offsetY < MelodieF.length * 60 - 600);
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
        ref={flatListRef}
        data={
          searchInput.trim() === ""
            ? MelodieF
            : /^\d+$/.test(searchInput.trim())
            ? MelodieF.filter(
                (song) => song.id.toString() === searchInput.trim()
              )
            : MelodieF.filter((song) => {
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
        getItemLayout={(data, index) => ({ length: 60, offset: 60 * index, index })}
        onScroll={handleScroll}
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
           padding: moderateScale(16), // Ajustement avec moderateScale pour un padding plus fluide
         },
         item: {
           backgroundColor: "#ffffff", // Blanc pour le fond de chaque item
           padding: moderateScale(16), // Utilisation de moderateScale pour le padding
           marginVertical: verticalScale(8), // Marge verticale responsive
           marginHorizontal: scale(12), // Marge horizontale responsive
           borderRadius: moderateScale(8), // Border-radius ajusté avec moderateScale
           elevation: 3,
           shadowColor: "#000",
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.5, // Ombre plus douce
           shadowRadius: 4,
           borderColor: "red",
           borderLeftWidth: scale(3), // Largeur de la bordure avec scale
           borderRightWidth: scale(2), // Largeur de la bordure avec scale
         },
         title: {
           fontSize: scale(16), // Taille de police ajustée avec scale
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

export default MelodieJoyeusesFrancais;
