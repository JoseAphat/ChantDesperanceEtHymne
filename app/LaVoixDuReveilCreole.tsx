import React from "react";
import SongListScreen from "../components/SongListScreen";
import VoixC from "./LaVoixCreole";

export default function LaVoixDuReveilCreole() {
  return (
    <SongListScreen
      data={VoixC}
      headerTitle="La Voix du Réveil Créole"
      category="La Voix du Réveil Créole"
      previousTitle="La Voix du Réveil Créole"
      normalizeMode="creole"
    />
  );
}
