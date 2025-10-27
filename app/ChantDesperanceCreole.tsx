import React from "react";
import SongListScreen from "../components/SongListScreen";
import chantsC from "./ChantDC";

export default function ChantDesperanceCreole() {
  return (
    <SongListScreen
      data={chantsC}
      headerTitle="Chant d'Espérance Créole"
      category="Chant d'Esperance Créole"
      previousTitle="Chant d’Espérance Créole"
      normalizeMode="creole"
    />
  );
}
