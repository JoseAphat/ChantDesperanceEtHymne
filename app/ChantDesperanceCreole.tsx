import React from "react";
import SongListScreen from "../components/SongListScreen";
import chantsC from "./ChantDC";
import { View } from "react-native";
import AdBanner from "@/components/AdBanner";

export default function ChantDesperanceCreole() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={chantsC}
      headerTitle="Chant d'Espérance Créole"
      category="Chant d'Esperance Créole"
      previousTitle="Chant d’Espérance Créole"
      normalizeMode="creole"
    />
    </View>
  );
}
