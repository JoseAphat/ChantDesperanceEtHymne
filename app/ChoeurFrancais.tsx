import React from "react";
import SongListScreen from "../components/SongListScreen";
import frenchSongs from "./ChoeurFr";

export default function ChoeurFrancais() {
  return (
    <SongListScreen
      data={frenchSongs}
      headerTitle="Chœurs Français"
      category="Choeurs Français"
      previousTitle="Choeurs Français"
    />
  );
}
