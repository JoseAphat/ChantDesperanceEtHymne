// app/MelodieJoyeusesCreole.tsx
import React from "react";
import SongListScreen from "../components/SongListScreen";
import MelodieC from "./MelC";
import { View } from "react-native";
import AdBanner from "@/components/AdBanner";

export default function MelodieJoyeusesCreole() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={MelodieC}
      headerTitle="Mélodies Joyeuses Créole"
      category="Mélodies Joyeuses Créole"
      previousTitle="Mélodies Joyeuses Créole"
      normalizeMode="creole"
    />
    </View>
  );
}
