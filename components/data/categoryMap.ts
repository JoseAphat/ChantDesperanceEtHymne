import { SOURCES } from "@/data/songSources";

// categoryMap est maintenant dérivé automatiquement de SOURCES (data/songSources.ts).
// Ajouter un livre de chants dans SOURCES suffit à le faire apparaître ici aussi.
export const categoryMap: Record<string, any[]> = SOURCES.reduce(
  (map, source) => {
    map[source.category] = source.data;
    return map;
  },
  {} as Record<string, any[]>
);
