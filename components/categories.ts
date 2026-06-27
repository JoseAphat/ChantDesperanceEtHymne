export type CategoryItem = {
  label: string;
  route: string;         // chemin expo-router vers la liste
  subtitle?: string;     // optionnel (description)
  searchKeywords?: string[]; // pour améliorer la recherche
};

export const categories: CategoryItem[] = [
  { label: "Hymne & Louange", route: "/HymneEtLouange", searchKeywords: ["hymne", "louange", "hl"] },

  { label: "Chant d’Espérance (Français)", route: "/ChantDesperanceFrancais", searchKeywords: ["esperance", "fr", "cdf"] },
  { label: "Chant d’Espérance (Créole)", route: "/ChantDesperanceCreole", searchKeywords: ["esperance", "creole", "cdc"] },

  { label: "Mélodies Joyeuses (Français)", route: "/MelodieJoyeusesFrancais", searchKeywords: ["melodies", "joyeuses", "fr"] },
  { label: "Mélodies Joyeuses (Créole)", route: "/MelodieJoyeusesCreole", searchKeywords: ["melodies", "joyeuses", "creole"] },

  { label: "Réveillons-Nous (Français)", route: "/ReveillonsNousFrancais", searchKeywords: ["reveillons", "fr"] },
  { label: "Réveillons-Nous (Créole)", route: "/ReveillonsNousCreole", searchKeywords: ["reveillons", "creole"] },
  { label: "Réveillons-Nous Chrétiens", route: "/ReveillonsNousChretiens", searchKeywords: ["reveillons", "chretiens"] },

  { label: "La Voix du Réveil (Français)", route: "/LaVoixDuReveilFrancais", searchKeywords: ["voix", "reveil", "fr"] },
  { label: "La Voix du Réveil (Créole)", route: "/LaVoixDuReveilCreole", searchKeywords: ["voix", "reveil", "creole"] },

  { label: "L’ombre du Réveil", route: "/LombreDuReveil", searchKeywords: ["ombre", "reveil"] },
  { label: "Haïti Chante Avec Radio Lumière", route: "/HaitiChante", searchKeywords: ["haiti", "radio", "lumiere"] },
  { label: "Gloire à l'Agneau", route: "/GloireAGneau", searchKeywords: ["Gloire", "agneau"] },
  { label: "Écho des Élus", route: "/EchoDesElus", searchKeywords: ["echo", "elus"] },

  { label: "Chœurs Français", route: "/ChoeurFrancais", searchKeywords: ["choeurs", "fr"] },
  { label: "Chœurs Créole", route: "/ChoeurCreole", searchKeywords: ["choeurs", "creole"] },
  { label: "Chœurs Anglais", route: "/English", searchKeywords: ["english", "ang", "choirs"] },
];
