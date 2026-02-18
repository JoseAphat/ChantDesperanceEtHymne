// app/MelodieJoyeusesFrancais.tsx
import React from "react";
import SongListScreen from "../components/SongListScreen";
import MelodieF from "./MelF";
import AdBanner from "@/components/AdBanner";
import { View } from "react-native";

export default function MelodieJoyeusesFrancais() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={MelodieF}
      headerTitle="Mélodies Joyeuses Français"
      category="Mélodies Joyeuses Français"
      previousTitle="Mélodies Joyeuses Français"
    />
    </View>
  );
}
