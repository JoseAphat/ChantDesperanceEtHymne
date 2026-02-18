import React from "react";
import { View } from "react-native";
import SongListScreen from "../components/SongListScreen";
import HymneEtLouangeSongs from "./Hymne";
import AdBanner from '@/components/AdBanner';

export default function HymneEtLouange() {
  return (
    <View style={{ flex: 1 }}>
      <AdBanner />
      <SongListScreen
        data={HymneEtLouangeSongs}
        headerTitle="Hymne & Louange"
        category="Hymne Et Louange"
        previousTitle="Hymne et Louange"
      />
    </View>
  );
}
