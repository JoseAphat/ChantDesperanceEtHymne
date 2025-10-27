import React from "react";
import SongListScreen from "../components/SongListScreen";
import echo from "./Echo";

export default function EchoDesElus() {
  return (
    <SongListScreen
      data={echo}
      headerTitle="Écho des Élus"
      category="Écho des Élus"
      previousTitle="Écho des Élus"
    />
  );
}
