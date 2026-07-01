import chantsC from "@/data/ChantDC";
import englishSongs from "@/data/ChantDE";
import chantsF from "@/data/ChantDF";
import frenchSongs from "@/data/ChoeurFr";
import echo from "@/data/Echo";
import GloA from "@/data/Gloire";
import HaitiC from "@/data/Hait";
import HymneEtLouangeSongs from "@/data/Hymne";
import CreoleSongs from "@/data/KeKreyol";
import VoixC from "@/data/LaVoixCreole";
import VoixF from "@/data/LaVoixFrancais";
import MelodieC from "@/data/MelC";
import MelodieF from "@/data/MelF";
import OmbreF from "@/data/OmbreReveil";
import ReveNC from "@/data/ReveillonsCreole";
import ReveNF from "@/data/ReveillonsFrancais";
import RevNC from "@/data/ReveillonsNous";

export type Chant = {
  id: string | number;
  title: string;
  lyrics: string;
};

export type SongSource = {
  data: Chant[];
  type: string;
  category: string;
};

// Source unique utilisée à la fois par la recherche globale (utils/searchSongs.ts)
// et par categoryMap (components/data/categoryMap.ts).
// Pour ajouter un nouveau livre de chants, il suffit d'ajouter une ligne ici.
export const SOURCES: SongSource[] = [
  { data: chantsF, type: "ChantDesperanceFrancais", category: "Chant d'Esperance Francais" },
  { data: HymneEtLouangeSongs, type: "HymneEtLouange", category: "Hymne Et Louange" },
  { data: chantsC, type: "ChantDesperanceCreole", category: "Chant d'Esperance Créole" },
  { data: MelodieF, type: "MelodieJoyeusesFrancais", category: "Mélodies Joyeuses Français" },
  { data: MelodieC, type: "MelodieJoyeusesCreole", category: "Mélodies Joyeuses Créole" },
  { data: RevNC, type: "ReveillonsNousChretiens", category: "Réveillons-Nous Chrétiens" },
  { data: ReveNF, type: "ReveillonsNousFrancais", category: "Réveillons-Nous Français" },
  { data: ReveNC, type: "ReveillonsNousCreole", category: "Réveillons-Nous Créole" },
  { data: VoixF, type: "VoixRevF", category: "La Voix du Réveil Français" },
  { data: VoixC, type: "VoixRevC", category: "La Voix du Réveil Créole" },
  { data: OmbreF, type: "LombreDuReveil", category: "L'ombre du Réveil" },
  { data: HaitiC, type: "HaitiChante", category: "Haïti Chante avec Radio Lumière" },
  { data: GloA, type: "GloireAGneau", category: "Gloire à l'Agneau" },
  { data: echo, type: "EchoDesElus", category: "Écho des Élus" },
  { data: CreoleSongs, type: "Kreyol", category: "Chœurs Créole" },
  { data: englishSongs, type: "English", category: "Choeurs Anglais" },
  { data: frenchSongs, type: "Franc", category: "Choeurs Français" },
];
