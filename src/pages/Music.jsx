// src/pages/Music.jsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { TRACK_DATABASE } from "./songsData";

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState(TRACK_DATABASE[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const filteredTracks = useMemo(() => {
    return TRACK_DATABASE.filter((track) => {
      const matchesSearch = 
        track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLang = selectedLanguage === "All" || track.language === selectedLanguage;
      return matchesSearch && matchesLang;
    });
  }, [searchTerm, selectedLanguage]);

  const visibleTracks = useMemo(() => filteredTracks.slice(0, 80), [filteredTracks]);
  const embedUrl = `https://www.youtube.com/embed/${currentTrack.youtubeId}?autoplay=1&modestbranding=1&rel=0`;

  return (
    <div className="min-h-screen bg-[#06020b] text-gray-100 font-sans pb-12 relative overflow-hidden select-none">
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- TOP BAR NAVIGATION HEADER --- */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <Link to="/" className="text-sm font-semibold tracking-wider text-pink-400 hover:text-pink-300 transition flex items-center gap-2">
          ← Back To Home Menu
        </Link>
        <span className="text-xs bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-pink-300 tracking-widest font-mono uppercase">
          🎵 Jukebox Mode
        </span>
      </header>

      {/* --- WORKSPACE LAYOUT ARRANGEMENT --- */}
      <main className="max-w-6xl mx-auto px-6 mt-4 relative z-10 grid md:grid-cols-5 gap-8 items-start">
        
        {/* LEFT COMPONENT MODULE: PLAYER DECK VIEWPORT */}
        <div className="md:col-span-2 bg-white/[0.02] border border-white/10 rounded-3xl p-5 text-center shadow-2xl backdrop-blur-xl md:sticky md:top-6">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe
              key={currentTrack.id}
              className="w-full h-full"
              src={embedUrl}
              title="Vocal Track Stream Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex items-center justify-between gap-2 mt-5 text-left px-1">
            <div className="truncate">
              <h2 className="text-lg font-bold text-white truncate">{currentTrack.title}</h2>
              <p className="text-xs text-pink-400 mt-0.5 font-medium tracking-wide uppercase">{currentTrack.artist}</p>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-mono bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2.5 py-1 rounded-md shrink-0">
              {currentTrack.language}
            </span>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] text-gray-500 font-mono">
            <span className="animate-pulse inline-block w-2 h-2 bg-green-400 rounded-full"></span>
            Streaming Engine Connected: Full Vocals Active
          </div>
        </div>

        {/* RIGHT COMPONENT MODULE: JUKEBOX TRACKLIST PLATFORM */}
        <div className="md:col-span-3 w-full">
          <div className="mb-6">
            <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              🎵 Nihuu's Infinite Mega Playlist
            </h1>
            <p className="text-xs text-gray-400 mt-1">Tap any row to automatically load and play that song with full vocals.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl mb-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <input
              type="text"
              placeholder="Search by song name or artist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-pink-500 text-white placeholder:text-gray-600 transition-all"
            />
            
            <div className="flex gap-1.5 shrink-0 w-full sm:w-auto justify-end">
              {["All", "Hindi", "English"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wider uppercase transition-all ${
                    selectedLanguage === lang
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/10"
                      : "bg-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="text-[10px] text-gray-500 font-mono text-right mb-2 px-1">
            Found {filteredTracks.length} tracks matching criteria
          </div>

          <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
            {visibleTracks.length === 0 ? (
              <div className="text-center py-12 text-xs text-gray-600 border border-dashed border-white/5 rounded-xl">
                No matching tracks located in database.
              </div>
            ) : (
              visibleTracks.map((track, idx) => {
                const isSelected = track.id === currentTrack.id;
                return (
                  <div
                    key={track.id}
                    onClick={() => setCurrentTrack(track)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left border cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? "bg-pink-500/10 border-pink-500/30 shadow-md"
                        : "bg-white/[0.01] border-white/5 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="text-[10px] font-mono text-gray-600 w-6 shrink-0">
                        {isSelected ? "💿" : String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-base shrink-0">
                        {track.cover}
                      </div>
                      <div className="truncate">
                        <h4 className={`text-xs font-bold truncate ${isSelected ? "text-pink-400" : "text-gray-200"}`}>
                          {track.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 truncate mt-0.5">{track.artist}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">
                        {track.language}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 w-8 text-right">{track.duration}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}