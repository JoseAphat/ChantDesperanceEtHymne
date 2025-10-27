import React from "react";
import SongListScreen from "../components/SongListScreen";
import OmbreF from "./OmbreReveil";

export default function LombreDuReveil() {
  return (
    <SongListScreen
      data={OmbreF}
      headerTitle="L'ombre du Réveil"
      category="L'ombre du Réveil"
      previousTitle="L'ombre du Réveil"
    />
  );
}
