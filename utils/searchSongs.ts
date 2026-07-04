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

// ✅ Cache des textes normalisés par chant, calculé une seule fois par chant
// (évite de re-normaliser ~1,9 Mo de paroles à CHAQUE recherche, ce qui
// bloquait le thread JS et provoquait des freezes/ANR).
type NormalizedEntry = { title: string; lyrics: string };
const normalizedCache = new WeakMap<Chant, NormalizedEntry>();

function getNormalized(song: Chant): NormalizedEntry {
  let entry = normalizedCache.get(song);
  if (!entry) {
    entry = {
      title: song.title ? normalizeText(song.title) : "",
      lyrics: song.lyrics ? normalizeText(song.lyrics) : "",
    };
    normalizedCache.set(song, entry);
  }
  return entry;
}

// ✅ Préchauffe le cache en arrière-plan, par petits paquets, pour ne jamais
// bloquer le thread JS d'un seul coup (ni au démarrage, ni à la 1ère recherche).
let warmupStarted = false;
export function warmupSearchCache(): void {
  if (warmupStarted) return;
  warmupStarted = true;

  let sourceIndex = 0;
  let itemIndex = 0;
  const CHUNK_SIZE = 200; // nb de chants normalisés par tick

  const processChunk = () => {
    let processed = 0;
    while (sourceIndex < SOURCES.length && processed < CHUNK_SIZE) {
      const data = SOURCES[sourceIndex].data;
      while (itemIndex < data.length && processed < CHUNK_SIZE) {
        getNormalized(data[itemIndex]);
        itemIndex++;
        processed++;
      }
      if (itemIndex >= data.length) {
        sourceIndex++;
        itemIndex = 0;
      }
    }
    if (sourceIndex < SOURCES.length) {
      setTimeout(processChunk, 0);
    }
  };

  setTimeout(processChunk, 0);
}

// Limite le nombre de résultats renvoyés pour éviter de générer/sérialiser
// des résultats énormes (ex: recherche d'un mot très courant sur 17 recueils).
const MAX_RESULTS = 300;

export function searchSongs(searchTerm: string): SearchResult[] {
  const isNumber = !isNaN(Number(searchTerm));
  const results: SearchResult[] = [];

  if (isNumber) {
    outer: for (const source of SOURCES) {
      for (const song of source.data) {
        if (song.id.toString() === searchTerm) {
          results.push({
            id: song.id,
            type: source.type,
            title: song.title,
            lyrics: song.lyrics,
            category: source.category,
          });
          if (results.length >= MAX_RESULTS) break outer;
        }
      }
    }
  } else {
    const normalizedInput = normalizeText(searchTerm);
    outer2: for (const source of SOURCES) {
      for (const song of source.data) {
        const { title, lyrics } = getNormalized(song);
        if (title.includes(normalizedInput) || lyrics.includes(normalizedInput)) {
          results.push({
            id: song.id,
            type: source.type,
            title: song.title,
            lyrics: song.lyrics,
            category: source.category,
          });
          if (results.length >= MAX_RESULTS) break outer2;
        }
      }
    }
  }

  return results;
}
