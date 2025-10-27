import React from "react";
import SongListScreen from "../components/SongListScreen";
import CreoleSongs from "./KeKreyol";

export default function ChoeurCreole() {
  return (
    <SongListScreen
      data={CreoleSongs}
      headerTitle="Chœurs Créole"
      category="Chœurs Créole"
      previousTitle="Chœurs Créole"
      normalizeMode="creole"
    />
  );
}
