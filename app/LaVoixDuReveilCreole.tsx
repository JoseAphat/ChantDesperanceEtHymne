import React from "react";
import SongListScreen from "../components/SongListScreen";
import VoixC from "./LaVoixCreole";
import { View } from "react-native";
import AdBanner from "@/components/AdBanner";

export default function LaVoixDuReveilCreole() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={VoixC}
      headerTitle="La Voix du Réveil Créole"
      category="La Voix du Réveil Créole"
      previousTitle="La Voix du Réveil Créole"
      normalizeMode="creole"
    />
    </View>
  );
}
