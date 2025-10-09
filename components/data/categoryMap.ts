// 📂 data/categoryMap.ts
import newCreole from "@/app/ChantCreoleData";
import chantsC from "@/app/ChantDC";
import englishSongs from "@/app/ChantDE";
import chantsF from "@/app/ChantDF";
import frenchSongs from "@/app/ChoeurFr";
import echo from "@/app/Echo";
import GloA from "@/app/Gloire";
import HaitiC from "@/app/Hait";
import HymneEtLouangeSongs from "@/app/Hymne";
import CreoleSongs from "@/app/KeKreyol";
import VoixC from "@/app/LaVoixCreole";
import VoixF from "@/app/LaVoixFrancais";
import MelodieC from "@/app/MelC";
import MelodieF from "@/app/MelF";
import OmbreF from "@/app/OmbreReveil";
import ReveNC from "@/app/ReveillonsCreole";
import ReveNF from "@/app/ReveillonsFrancais";
import RevNC from "@/app/ReveillonsNous";

export const categoryMap: Record<string, any[]> = {
  "Chant d'Esperance Créole": chantsC,
  "Chant d'Esperance Francais": chantsF,
  "Réveillons-Nous Français": ReveNF,
  "Mélodies Joyeuses Français": MelodieF,
  "Mélodies Joyeuses Créole": MelodieC,
  "Réveillons-Nous Chrétiens": RevNC,
  "Réveillons-Nous Créole": ReveNC,
  "La Voix du Réveil Français": VoixF,
  "La Voix du Réveil Créole": VoixC,
  "L'ombre du Réveil": OmbreF,
  "Haïti Chante avec Radio Lumière": HaitiC,
  "Gloire à l'Agneau": GloA,
  "Écho des Élus": echo,
  "Nouveaux Chants Créole": newCreole,
  "Chœurs Créole": CreoleSongs,
  "Choeurs Anglais": englishSongs,
  "Choeurs Français": frenchSongs,
  "Hymne Et Louange": HymneEtLouangeSongs,
};
