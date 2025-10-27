import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const options = [
  {
    id: "1",
    title: "Chant d'Espérance Français",
    image: require("../assets/images/CE.png"),
  },
  {
    id: "2",
    title: "Chant d'Espérance Français (V.Créole)",
    image: require("../assets/images/CE.png"),
  },
  {
    id: "3",
    title: "Chant d'Espérance Créole",
    image: require("../assets/images/CE.png"),
  },
  {
    id: "4",
    title: "Mélodies Joyeuses Français",
    image: require("../assets/images/Mjoyeuses.png"),
  },
  {
    id: "5",
    title: "Mélodies Joyeuses Créole",
    image: require("../assets/images/Mjoyeuses.png"),
  },
  {
    id: "6",
    title: "Réveillons-Nous Français",
    image: require("../assets/images/reveillons-nous.png"),
  },
  {
    id: "7",
    title: "Réveillons-Nous Créole",
    image: require("../assets/images/reveillons-nous.png"),
  },
  {
    id: "8",
    title: "La Voix du Réveil Français",
    image: require("../assets/images/VoixReve.png"),
  },
  {
    id: "9",
    title: "La Voix du Réveil Créole",
    image: require("../assets/images/VoixReve.png"),
  },
  {
    id: "10",
    title: "Réveillons-Nous Chrétiens",
    image: require("../assets/images/reveillons-nous-chretiens.png"),
  },
  {
    id: "11",
    title: "L'Ombre du Réveil",
    image: require("../assets/images/ombre-du-reveil.png"),
  },
  {
    id: "12",
    title: "Haïti Chante Avec Radio Lumière",
    image: require("../assets/images/haiti-chante.png"),
  },
  {
    id: "13",
    title: "Gloire à l'Agneau",
    image: require("../assets/images/gloireAgneau.png"),
  },
  {
    id: "14",
    title: "Écho des Élus",
    image: require("../assets/images/echo-des-elus.png"),
  },
];

const { width } = Dimensions.get("window");
const itemWidth = (width - 50) / 2; // Pour afficher deux éléments par ligne
type OptionTitle = (typeof options)[number]["title"];

const optionRoutes: Record<OptionTitle, string> = {
  "Chant d'Espérance Français": "ChantDesperanceFrancais",
  "Chant d'Espérance Français (V.Créole)": "NewCreole",
  "Chant d'Espérance Créole": "ChantDesperanceCreole",
  "Mélodies Joyeuses Français": "MelodieJoyeusesFrancais",
  "Mélodies Joyeuses Créole": "MelodieJoyeusesCreole",
  "Réveillons-Nous Chrétiens": "ReveillonsNousChretiens",
  "Réveillons-Nous Français": "ReveillonsNousFrancais",
  "Réveillons-Nous Créole": "ReveillonsNousCreole",
  "La Voix du Réveil Français": "LaVoixDuReveilFrancais",
  "La Voix du Réveil Créole": "LaVoixDuReveilCreole",
  "L'Ombre du Réveil": "LombreDuReveil",
  "Haïti Chante Avec Radio Lumière": "HaitiChante",
  "Gloire à l'Agneau": "GloireAGneau",
  "Écho des Élus": "EchoDesElus",
};
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
// Fonction pour déterminer si c'est un petit écran
const isSmallScreen = screenWidth < 400;
const isMediumScreen = screenWidth >= 400 && screenWidth < 768;
const isLargeScreen = screenWidth >= 768;
// Fonctions de scaling personnalisées pour une meilleure adaptation
const responsiveScale = (size: number) => {
  if (isSmallScreen) return scale(size * 0.9);
  if (isMediumScreen) return scale(size);
  return scale(size * 1.1);
};

const responsiveVerticalScale = (size: number) => {
  if (isSmallScreen) return verticalScale(size * 0.9);
  if (isMediumScreen) return verticalScale(size);
  return verticalScale(size * 1.1);
};

const responsiveModerateScale = (size: number) => {
  if (isSmallScreen) return moderateScale(size * 0.9);
  if (isMediumScreen) return moderateScale(size);
  return moderateScale(size * 1.1);
};

const ChantDesperance: React.FC = () => {
  const navigation =useNavigation();
  const router = useRouter();
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
      <Image
        source={require("../assets/images/ic_launcher_foreground.png")}
        style={{ width: 70, height: 70, marginRight: 8 }}
        resizeMode="contain"
      />
      <Text style={{ color: "#0A1E42", fontSize: 18, fontWeight: "bold" }}>
        Chant d&apos;Espérance
      </Text>
    </View>
  ),
  headerStyle: {
    height:
     Platform.OS === "android"
      ? 100 + (StatusBar.currentHeight ?? 0)
       : 100,
    backgroundColor: "#dfdedcf7",
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
        <Ionicons name="arrow-back" size={24} color="#0A1E42" />
      </TouchableOpacity>
    </View>
  ),
});
  }, [navigation]);
  const handleOptionPress = (optionId: string, optionTitle: string) => {
    const routeName = optionRoutes[optionTitle as OptionTitle]; 
    if (routeName) {
      router.push(routeName as any);
    } else {
      console.warn(`Route non définie pour l'option: ${optionTitle}`);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleOptionPress(item.id, item.title)}
            style={styles.chantItem}
          >
            <Image source={item.image} style={styles.chantImage} />
            <Text style={styles.chantTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1E42",
    padding: moderateScale(8), // Padding responsive ajusté
  },
  row: {
    flexDirection: "row", // Alignement horizontal
    justifyContent: "space-between",
    marginBottom: verticalScale(12), // Marge inférieure ajustée
  },
  chantItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfdedcf7",
    padding: verticalScale(0),
    borderRadius: 10,
    width: "40%", // Permet d'afficher 2 éléments par ligne
    height: verticalScale(100),
    marginVertical: verticalScale(15),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    borderColor: "red",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    top: verticalScale(20),
  },
  chantImage: {
    width: scale(70), // Largeur ajustée
    height: verticalScale(50), // Hauteur ajustée
    marginBottom: verticalScale(5), // Marge inférieure
    borderColor: "#0A1E42",
    borderWidth: 1,
    borderRadius: moderateScale(10),
  },
  chantTitle: {
   fontSize: responsiveModerateScale(12),
    color: "#0A1E42",
    textAlign: "center",
    lineHeight: responsiveModerateScale(17),
    paddingHorizontal: responsiveScale(4),
  },
});

export default ChantDesperance;
