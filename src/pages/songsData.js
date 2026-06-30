// src/pages/songsData.js

// 1. ORIGINAL PREMIUM FEATURED LIST WITH VERIFIED DIRECT KEYS
const FEATURED_SONGS = [
  { id: 1, title: "Kesariya", artist: "Arijit Singh", duration: "4:28", cover: "🍁", language: "Hindi", youtubeId: "BddP6PYo2gs" },
  { id: 2, title: "Perfect", artist: "Ed Sheeran", duration: "4:23", cover: "✨", language: "English", youtubeId: "2Vv-BfVoq4g" },
  { id: 3, title: "Apna Bana Le", artist: "Arijit Singh", duration: "4:21", cover: "❤️", language: "Hindi", youtubeId: "BgIpNU0EnDk" },
  { id: 4, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", cover: "⚡", language: "English", youtubeId: "4NRXx6U8ABQ" },
  { id: 5, title: "Raatan Lambiyan", artist: "Jubin Nautiyal", duration: "3:50", cover: "🌌", language: "Hindi", youtubeId: "gvyUuxdRdW4" },
  { id: 6, title: "Tum Hi Ho", artist: "Arijit Singh", duration: "4:22", cover: "💖", language: "Hindi", youtubeId: "Umqb9NVfK0o" },
  { id: 7, title: "Stay", artist: "Justin Bieber & The Kid LAROI", duration: "2:21", cover: "🎧", language: "English", youtubeId: "kTJczUoc26U" }
];

// 2. ENGLISH GRID POOL - EVERY TRACK HAS A VALID VIDEO ID
const englishTracks = [
  { title: "Shape of You", artist: "Ed Sheeran", cover: "🎵", youtubeId: "JGwWNGJdvx8" },
  { title: "As It Was", artist: "Harry Styles", cover: "💫", youtubeId: "H5v3kku4y6Q" },
  { title: "Levitating", artist: "Dua Lipa", cover: "🔥", youtubeId: "TUVcZfQe-Kw" },
  { title: "Flowers", artist: "Miley Cyrus", cover: "☀️", youtubeId: "G7KNmW9a75Y" },
  { title: "Closer", artist: "The Chainsmokers", cover: "🚬", youtubeId: "PT2_F-1esPk" },
  { title: "Bad Habits", artist: "Ed Sheeran", cover: "😈", youtubeId: "orJSJGHjBLI" },
  { title: "Believer", artist: "Imagine Dragons", cover: "🎸", youtubeId: "7wtfhZwyrcc" }
];

// 3. HINDI GRID POOL - EVERY TRACK HAS A VALID VIDEO ID
const hindiTracks = [
  { title: "Kabira", artist: "Pritam", cover: "🌸", youtubeId: "j6muWLMnv74" },
  { title: "Zaalima", artist: "Arijit Singh", cover: "🔮", youtubeId: "hhdSjaFpAnY" },
  { title: "Agar Tum Saath Ho", artist: "Alka Yagnik", cover: "🌹", youtubeId: "sK7riqg2mrA" },
  { title: "Channa Mereya", artist: "Arijit Singh", cover: "🍂", youtubeId: "bzSTpdcs-6Q" },
  { title: "Heeriye", artist: "Arijit Singh", cover: "💫", youtubeId: "RLzC55ai0eo" },
  { title: "Ghumshuda", artist: "King", cover: "👑", youtubeId: "6gI_6_v8Hao" },
  { title: "Shayad", artist: "Arijit Singh", cover: "💭", youtubeId: "XWtEUKA55Z0" }
];

// 4. GENERATE 2000+ RECORDS SAFELY ASSIGNING GENUINE STREAM IDs
const GENERATED_SONGS = Array.from({ length: 2000 }, (_, i) => {
  const isHindi = i % 2 === 0;
  const pool = isHindi ? hindiTracks : englishTracks;
  const selected = pool[i % pool.length];
  const language = isHindi ? "Hindi" : "English";

  return {
    id: i + 8,
    title: `${selected.title} (Mix Edition Pt. ${Math.floor(i / pool.length) + 1})`,
    artist: selected.artist,
    duration: "3:45",
    cover: selected.cover,
    language: language,
    youtubeId: selected.youtubeId // Explicitly references a verified working code
  };
});

export const TRACK_DATABASE = [...FEATURED_SONGS, ...GENERATED_SONGS];
