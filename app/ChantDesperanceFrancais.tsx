import React from "react";
import SongListScreen from "../components/SongListScreen";
import chantsF from "./ChantDF";

export default function ChantDesperanceFrancais() {
  return (
    <SongListScreen
      data={chantsF}
      headerTitle="Chant d'Espérance Français"
      category="Chant d'Esperance Francais"
      previousTitle="Chant d’Espérance Français"
    />
  );
}
