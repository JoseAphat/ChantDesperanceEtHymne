import React from "react";
import SongListScreen from "../components/SongListScreen";
import VoixF from "./LaVoixFrancais";

export default function LaVoixDuReveilFrancais() {
  return (
    <SongListScreen
      data={VoixF}
      headerTitle="La Voix du Réveil Français"
      category="La Voix du Réveil Français"
      previousTitle="La Voix du Réveil Français"
    />
  );
}
