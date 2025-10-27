import React from "react";
import SongListScreen from "../components/SongListScreen";
import ReveNF from "./ReveillonsFrancais";

export default function ReveillonsNousFrancais() {
  return (
    <SongListScreen
      data={ReveNF}
      headerTitle="Réveillons-Nous Français"
      category="Réveillons-Nous Français"
      previousTitle="Réveillons-Nous Français"
    />
  );
}
