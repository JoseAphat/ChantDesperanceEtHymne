import React from "react";
import SongListScreen from "../components/SongListScreen";
import frenchSongs from "./ChoeurFr";
import AdBanner from "@/components/AdBanner";
import { View } from "react-native";

export default function ChoeurFrancais() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={frenchSongs}
      headerTitle="Chœurs Français"
      category="Choeurs Français"
      previousTitle="Choeurs Français"
    />
    </View>
  );
}
