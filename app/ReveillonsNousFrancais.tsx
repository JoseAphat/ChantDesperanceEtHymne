import React from "react";
import SongListScreen from "../components/SongListScreen";
import ReveNF from "@/data/ReveillonsFrancais";
import { View } from "react-native";
import AdBanner from "@/components/AdBanner";

export default function ReveillonsNousFrancais() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={ReveNF}
      headerTitle="Réveillons-Nous Français"
      category="Réveillons-Nous Français"
      previousTitle="Réveillons-Nous Français"
    />
    </View>
  );
}
