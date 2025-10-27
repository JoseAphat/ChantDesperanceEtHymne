import React from "react";
import SongListScreen from "../components/SongListScreen";
import HaitiC from "./Hait";

export default function HaitiChante() {
  return (
    <SongListScreen
      data={HaitiC}
      headerTitle="Haïti Chante avec Radio Lumière"
      category="Haïti Chante avec Radio Lumière"
      previousTitle="Haïti Chante avec Radio Lumière"
      normalizeMode="creole"
    />
  );
}
