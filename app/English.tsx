import React from "react";
import SongListScreen from "../components/SongListScreen";
import englishSongs from "./ChantDE";

export default function English() {
  return (
    <SongListScreen
      data={englishSongs}
      headerTitle="Chœurs Anglais"
      category="Choeurs Anglais"
      previousTitle="Choeurs Anglais"
    />
  );
}
