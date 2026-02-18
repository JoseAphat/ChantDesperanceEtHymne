import React from "react";
import SongListScreen from "../components/SongListScreen";
import chantsF from "./ChantDF";
import AdBanner from "@/components/AdBanner";
import { View } from "react-native";

export default function ChantDesperanceFrancais() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={chantsF}
      headerTitle="Chant d'Espérance Français"
      category="Chant d'Esperance Francais"
      previousTitle="Chant d’Espérance Français"
    />
    </View>
  );
}
