import React from "react";
import SongListScreen from "../components/SongListScreen";
import HaitiC from "./Hait";
import AdBanner from "@/components/AdBanner";
import { View } from "react-native";

export default function HaitiChante() {
  return (
    <View style={{ flex: 1 }}>
      <AdBanner />
    <SongListScreen
      data={HaitiC}
      headerTitle="Haïti Chante avec Radio Lumière"
      category="Haïti Chante avec Radio Lumière"
      previousTitle="Haïti Chante avec Radio Lumière"
      normalizeMode="creole"
    />
    </View>
  );
}
