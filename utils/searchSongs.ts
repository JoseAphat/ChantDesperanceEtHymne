import { SOURCES, Chant } from "@/data/songSources";

export type SearchResult = {
  id: string | number;
  type: string;
  title: string;
  lyrics: string;
  category: string;
};

const DASHES_RE = /[\u002D\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g;
const DIACRITICS_RE = /[\u0300-\u036f]/g;

export const normalizeText = (text: string): string =>
  text
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(DIACRITICS_RE, "")
    .replace(DASHES_RE, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();

export function searchSongs(searchTerm: string): SearchResult[] {
  const isNumber = !isNaN(Number(searchTerm));
  const results: SearchResult[] = [];

  if (isNumber) {
    for (const source of SOURCES) {
      const matches = source.data.filter((song) => song.id.toString() === searchTerm);
      results.push(
        ...matches.map((song) => ({
          id: song.id,
          type: source.type,
          title: song.title,
          lyrics: song.lyrics,
          category: source.category,
        }))
      );
    }
  } else {
    const normalizedInput = normalizeText(searchTerm);
    for (const source of SOURCES) {
      const matches = source.data.filter((song) => {
        const title = song.title ? normalizeText(song.title) : "";
        const lyrics = song.lyrics ? normalizeText(song.lyrics) : "";
        return title.includes(normalizedInput) || lyrics.includes(normalizedInput);
      });
      results.push(
        ...matches.map((song) => ({
          id: song.id,
          type: source.type,
          title: song.title,
          lyrics: song.lyrics,
          category: source.category,
        }))
      );
    }
  }

  return results;
}
