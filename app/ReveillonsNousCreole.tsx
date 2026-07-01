import React from "react";
import SongListScreen from "../components/SongListScreen";
import ReveNC from "@/data/ReveillonsCreole";
import { View } from "react-native";
import AdBanner from "@/components/AdBanner";

export default function ReveillonsNousCreole() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={ReveNC}
      headerTitle="Réveillons-Nous Créole"
      category="Réveillons-Nous Créole"
      previousTitle="Réveillons-Nous Créole"
      normalizeMode="creole"
    />
    </View>
  );
}
