import React from "react";
import SongListScreen from "../components/SongListScreen";
import RevNC from "@/data/ReveillonsNous";
import { View } from "react-native";
import AdBanner from "@/components/AdBanner";

export default function ReveillonsNousChretiens() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={RevNC}
      headerTitle="Réveillons-Nous Chrétiens"
      category="Réveillons-Nous Chrétiens"
      previousTitle="Réveillons-Nous Chrétiens"
    />
    </View>
  );
}
