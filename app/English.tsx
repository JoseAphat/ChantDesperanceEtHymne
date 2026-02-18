import React from "react";
import SongListScreen from "../components/SongListScreen";
import englishSongs from "./ChantDE";
import AdBanner from "@/components/AdBanner";
import { View } from "react-native";

export default function English() {
  return (
    <View style={{ flex: 1 }}>
      <AdBanner />
      <SongListScreen
        data={englishSongs}
        headerTitle="Chœurs Anglais"
        category="Choeurs Anglais"
        previousTitle="Choeurs Anglais"
      />
  </View>
  );
}
