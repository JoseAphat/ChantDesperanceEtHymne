// app/MelodieJoyeusesFrancais.tsx
import React from "react";
import SongListScreen from "../components/SongListScreen";
import MelodieF from "./MelF";

export default function MelodieJoyeusesFrancais() {
  return (
    <SongListScreen
      data={MelodieF}
      headerTitle="Mélodies Joyeuses Français"
      category="Mélodies Joyeuses Français"
      previousTitle="Mélodies Joyeuses Français"
    />
  );
}
