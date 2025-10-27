import React from "react";
import SongListScreen from "../components/SongListScreen";
import RevNC from "./ReveillonsNous";

export default function ReveillonsNousChretiens() {
  return (
    <SongListScreen
      data={RevNC}
      headerTitle="Réveillons-Nous Chrétiens"
      category="Réveillons-Nous Chrétiens"
      previousTitle="Réveillons-Nous Chrétiens"
    />
  );
}
