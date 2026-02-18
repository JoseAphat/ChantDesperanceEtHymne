import React from "react";
import SongListScreen from "../components/SongListScreen";
import CreoleSongs from "./KeKreyol";
import AdBanner from "@/components/AdBanner";
import { View } from "react-native";

export default function ChoeurCreole() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={CreoleSongs}
      headerTitle="Chœurs Créole"
      category="Chœurs Créole"
      previousTitle="Chœurs Créole"
      normalizeMode="creole"
    />
    </View>
  );
}
