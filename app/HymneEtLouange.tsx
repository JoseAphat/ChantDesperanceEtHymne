// app/HymneEtLouange.tsx
import React from "react";
import SongListScreen from "../components/SongListScreen";
import HymneEtLouangeSongs from "./Hymne";

export default function HymneEtLouange() {
  return (
    <SongListScreen
      data={HymneEtLouangeSongs}
      headerTitle="Hymne & Louange"
      category="Hymne Et Louange"
      previousTitle="Hymne et Louange"
    />
  );
}
