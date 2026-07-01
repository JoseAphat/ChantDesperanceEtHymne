import React from "react";
import SongListScreen from "../components/SongListScreen";
import OmbreF from "@/data/OmbreReveil";
import AdBanner from "@/components/AdBanner";
import { View } from "react-native";

export default function LombreDuReveil() {
  return (
    <View style={{ flex: 1 }}>
          <AdBanner />
    <SongListScreen
      data={OmbreF}
      headerTitle="L'ombre du Réveil"
      category="L'ombre du Réveil"
      previousTitle="L'ombre du Réveil"
    />
    </View>
  );
}
