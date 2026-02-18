import React from "react";
import SongListScreen from "../components/SongListScreen";
import echo from "./Echo";
import AdBanner from "@/components/AdBanner";
import { View } from "react-native";

export default function EchoDesElus() {
  return (
    <View style={{ flex: 1 }}>
      <AdBanner />
    <SongListScreen
      data={echo}
      headerTitle="Écho des Élus"
      category="Écho des Élus"
      previousTitle="Écho des Élus"
    />
    </View>
  );
}
