import React from "react";
import SongListScreen from "../components/SongListScreen";
import VoixF from "@/data/LaVoixFrancais";
import { View } from "react-native";
import AdBanner from "@/components/AdBanner";

export default function LaVoixDuReveilFrancais() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={VoixF}
      headerTitle="La Voix du Réveil Français"
      category="La Voix du Réveil Français"
      previousTitle="La Voix du Réveil Français"
    />
    </View>
  );
}
