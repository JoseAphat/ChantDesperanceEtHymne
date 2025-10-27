import React from "react";
import SongListScreen from "../components/SongListScreen";
import ReveNC from "./ReveillonsCreole";

export default function ReveillonsNousCreole() {
  return (
    <SongListScreen
      data={ReveNC}
      headerTitle="Réveillons-Nous Créole"
      category="Réveillons-Nous Créole"
      previousTitle="Réveillons-Nous Créole"
      normalizeMode="creole"
    />
  );
}
