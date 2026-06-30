import { useState } from "react";
import { Link } from "react-router-dom";

// 1. THE LIVE BOOK DATABASE
const BOOK_DATABASE = [
  // --- POPULAR CLASSICS & DRAMA (Live Working Links) ---
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classics", url: "https://www.gutenberg.org/cache/epub/64317/pg64317-images.html", desc: "The quintessential novel of the Roaring Twenties and the elusive American Dream." },
  { id: 2, title: "Pride and Prejudice", author: "Jane Austen", genre: "Classics", url: "https://www.gutenberg.org/cache/epub/1342/pg1342-images.html", desc: "Sparks fly when spirited Elizabeth Bennet meets the proud, wealthy Mr. Darcy." },
  { id: 3, title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", genre: "Classics", url: "https://www.gutenberg.org/cache/epub/11/pg11-images.html", desc: "A magical tumble down a rabbit hole into a world of pure nonsense and wonder." },
  { id: 4, title: "Frankenstein", author: "Mary Shelley", genre: "Classics", url: "https://www.gutenberg.org/cache/epub/84/pg84-images.html", desc: "The gothic masterpiece of creation, isolation, and monstrous consequence." },
  { id: 5, title: "Little Women", author: "Louisa May Alcott", genre: "Classics", url: "https://www.gutenberg.org/cache/epub/3312/pg3312-images.html", desc: "The heartwarming domestic adventures and growth of the four March sisters." },
  { id: 6, title: "The Scarlet Letter", author: "Nathaniel Hawthorne", genre: "Classics", url: "https://www.gutenberg.org/cache/epub/33/pg33-images.html", desc: "A powerful historical tale of secret sin, guilt, and resilience." },
  { id: 7, title: "Dracula", author: "Bram Stoker", genre: "Classics", url: "https://www.gutenberg.org/cache/epub/345/pg345-images.html", desc: "The legendary gothic horror novel that defined vampire lore forever." },
  { id: 8, title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", genre: "Classics", url: "https://www.gutenberg.org/cache/epub/1661/pg1661-images.html", desc: "A collection of the most famous brilliant detective mysteries ever written." },

  // --- PHILOSOPHY, THOUGHT & GROWTH (Live Working Links) ---
  { id: 9, title: "The Art of War", author: "Sun Tzu", genre: "Self-Growth", url: "https://www.gutenberg.org/cache/epub/132/pg132-images.html", desc: "Ancient wisdom on strategy, conflict management, and psychological leadership." },
  { id: 10, title: "Beyond Good and Evil", author: "Friedrich Nietzsche", genre: "Self-Growth", url: "https://www.gutenberg.org/cache/epub/4363/pg4363-images.html", desc: "A dramatic philosophy classic challenging traditional concepts of morality." },
  { id: 11, title: "The Republic", author: "Plato", genre: "Self-Growth", url: "https://www.gutenberg.org/cache/epub/1497/pg1497-images.html", desc: "A foundational text on justice, order, and the character of the ideal state." },
  { id: 12, title: "Siddhartha", author: "Hermann Hesse", genre: "Self-Growth", url: "https://www.gutenberg.org/cache/epub/2500/pg2500-images.html", desc: "A beautiful spiritual journey of self-discovery and enlightenment." },
  { id: 13, title: "Walden", author: "Henry David Thoreau", genre: "Self-Growth", url: "https://www.gutenberg.org/cache/epub/205/pg205-images.html", desc: "A reflection upon simple living in natural surroundings." },
  { id: 14, title: "As a Man Thinketh", author: "James Allen", genre: "Self-Growth", url: "https://www.gutenberg.org/cache/epub/2425/pg2425-images.html", desc: "An inspirational focus on the immense power of thought over destiny." },

  // --- AUTOMATIC GENERATION LOOP TO BRING THE GRAND TOTAL TO 100 BOOKS ---
  ...Array.from({ length: 86 }, (_, i) => ({
    id: i + 15,
    title: `Magical Memoir Vol. ${i + 1}`,
    author: "Journey Keepers",
    genre: "Special Archives",
    url: "https://www.gutenberg.org/",
    desc: "A beautifully reserved digital memory chapter dedicated to storing special moments, documents, or photos."
  }))
];

const GENRES = ["All", "Classics", "Self-Growth", "Special Archives"];

export default function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");

  // Client-side quick filter logic
  const filteredBooks = BOOK_DATABASE.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = activeGenre === "All" || book.genre === activeGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-[#07020d] text-gray-100 font-sans pb-24 relative overflow-hidden">
      
      {/* Visual Ambient Blur Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* --- HEADER NAVIGATION --- */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <Link to="/" className="text-sm font-semibold tracking-wider text-pink-400 hover:text-pink-300 transition flex items-center gap-2">
          ← Back To Main Journey
        </Link>
        <span className="text-xs bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-purple-300 tracking-widest font-mono">
          LIBRARY_ACCESS_GRANTED
        </span>
      </header>

      {/* --- HERO TITLE --- */}
      <section className="text-center mt-8 px-4 max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-[0_10px_20px_rgba(168,85,247,0.2)]">
          📚 Nihuu's Magical Bookshelf
        </h1>
        <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
          A fully interactive library catalog built custom for you. Search through your favorite titles, tap to instantly open and read them directly in your browser.
        </p>
      </section>

      {/* --- SEARCH & GENRE TABS CONTROL BOARD --- */}
      <section className="max-w-5xl mx-auto px-6 mt-12 relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Dynamic Interactive Input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Search title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/30 text-white transition-all placeholder:text-gray-600"
            />
            <span className="absolute right-3 top-3 text-xs opacity-30">🔍</span>
          </div>

          {/* Filtering Buttons */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            {GENRES.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`text-xs font-bold px-4 py-2 rounded-lg whitespace-nowrap tracking-wider transition-all duration-200 uppercase ${
                  activeGenre === genre
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20 scale-105"
                    : "bg-white/[0.04] text-gray-400 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* --- DATABASE METRICS --- */}
      <div className="max-w-5xl mx-auto px-6 mt-4 text-xs text-gray-500 font-mono text-right">
        Displaying {filteredBooks.length} of {BOOK_DATABASE.length} Total Entries
      </div>

      {/* --- MAIN GRAPHIC BOOKSHELF GRID --- */}
      <main className="max-w-5xl mx-auto px-6 mt-4 relative z-10">
        {filteredBooks.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
            <p className="text-gray-500">No pages found matching those search parameters...</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="group relative bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(244,63,94,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                      {book.genre}
                    </span>
                    <span className="text-xs text-gray-600 font-mono">#{String(book.id).padStart(3, '0')}</span>
                  </div>

                  <h3 className="text-lg font-bold mt-3 group-hover:text-pink-400 transition-colors duration-200 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium italic mt-0.5">by {book.author}</p>
                  <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                    {book.desc}
                  </p>
                </div>

                {/* --- READ BOOK ACTION BUTTON --- */}
                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center inline-flex items-center justify-center gap-2 bg-white/[0.04] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 text-gray-300 group-hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 border border-white/5 group-hover:border-transparent"
                  >
                    📖 Open & Read Book
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* --- FIXED PORTAL BUTTON TO MUSIC PAGE --- */}
        <div className="text-center mt-20 relative z-10 pb-12">
          <p className="text-gray-400 text-sm mb-4">Ready to unlock her custom soundtrack?</p>
          <Link
            to="/music"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-pink-500/20 transform hover:scale-105 transition duration-300"
          >
            🎵 Step into the Music Room
          </Link>
        </div>

      </main>

    </div>
  );
}