// app/MelodieJoyeusesCreole.tsx
import React from "react";
import SongListScreen from "../components/SongListScreen";
import MelodieC from "./MelC";

export default function MelodieJoyeusesCreole() {
  return (
    <SongListScreen
      data={MelodieC}
      headerTitle="Mélodies Joyeuses Créole"
      category="Mélodies Joyeuses Créole"
      previousTitle="Mélodies Joyeuses Créole"
      normalizeMode="creole"
    />
  );
}
