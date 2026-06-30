// src/pages/Gallery.jsx
import { Link } from "react-router-dom";
import { MEMORY_PICTURES } from "./picsData";

export default function Gallery() {
  const backgroundMusicUrl = "https://www.youtube.com/embed/P3wSn5K9quo?autoplay=1&mute=0&loop=1&playlist=P3wSn5K9quo&controls=0&modestbranding=1";

  return (
    <div className="min-h-screen bg-[#06020b] text-gray-100 font-sans pb-16 relative overflow-hidden select-none">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Hidden Background Music Player */}
      <iframe
        className="hidden w-0 h-0 absolute pointer-events-none"
        src={backgroundMusicUrl}
        title="Background Birthday Ballad"
        allow="accelerometer; autoplay; encrypted-media; gyroscope"
      ></iframe>

      {/* --- HEADER (FIXED ROUTE TO MAIN HOME SCREEN) --- */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <Link to="/" className="text-sm font-semibold tracking-wider text-pink-400 hover:text-pink-300 transition flex items-center gap-2">
          ← Back To Home
        </Link>
        <span className="text-xs bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-pink-300 tracking-widest font-mono uppercase animate-pulse">
          ✨ Memory Chapter Active
        </span>
      </header>

      {/* --- HEADER BRANDING --- */}
      <div className="max-w-4xl mx-auto text-center mt-6 mb-12 px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 tracking-tight">
          📸 Moments That Define Nihuu
        </h1>
        <p className="text-sm text-gray-400 mt-3 max-w-xl mx-auto font-light leading-relaxed">
          A collection of her favorite pictures, beautiful memories, and all the little things that make her absolutely unforgettable.
        </p>
      </div>

      {/* --- POLAROID GRID PLATFORM --- */}
      <main className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          
          {MEMORY_PICTURES.map((pic) => (
            <div
              key={pic.id}
              className={`w-full max-w-[260px] bg-white p-3.5 pb-5 shadow-2xl rounded-sm border border-neutral-200 text-neutral-800 transform transition-all duration-300 ease-out hover:scale-105 hover:z-20 hover:shadow-[0_20px_50px_rgba(236,72,153,0.25)] group ${pic.rotation}`}
            >
              <div className="w-full aspect-[4/5] bg-neutral-100 overflow-hidden border border-neutral-300/60 relative rounded-sm">
                <img
                  src={pic.imageUrl}
                  alt={pic.title}
                  className="w-full h-full object-cover filter contrast-[1.02] saturate-[1.05] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40"></div>
              </div>

              <div className="mt-4 px-0.5">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-mono tracking-wider text-pink-500 font-bold uppercase">
                    {pic.date}
                  </span>
                  <h3 className="font-bold text-sm tracking-tight text-neutral-900 truncate font-serif">
                    {pic.title}
                  </h3>
                </div>
                
                <p className="text-[11px] text-neutral-600 mt-2 font-sans leading-relaxed tracking-wide font-light">
                  {pic.description}
                </p>
              </div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-pink-500/20 backdrop-blur-[2px] border border-pink-500/10 transform -rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            </div>
          ))}

        </div>

        {/* --- DEDICATED BIG HAPPY BIRTHDAY PARAGRAPH SECTION --- */}
        <section className="mt-20 max-w-2xl mx-auto bg-white/[0.02] border border-white/10 rounded-2xl p-8 text-center backdrop-blur-xl shadow-xl relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-mono uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
            My Wish For You 🎂
          </div>
          
          <h2 className="text-2xl font-black text-white tracking-tight mb-4 mt-2">
            Happy Birthday to My Favorite Person! 🎉✨
          </h2>
          
          <p className="text-sm text-gray-300 font-light leading-relaxed tracking-wide">
            Sending the biggest, most magical Happy Birthday to my absolute favorite person in the entire universe. 
            No fictional hero or storybook character could ever come close to how incredible you are in real life. 
            Thank you for filling my days with so much laughter, sweet moments, and unforgettable memories. 
            I hope your day is as brilliant, beautiful, and wonderful as you are. Thank you for just being you! ❤️
          </p>
        </section>
      </main>

      {/* --- FOOTER BUTTON --- */}
      <footer className="max-w-6xl mx-auto text-center mt-12 relative z-10">
        <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/10">
          <div className="bg-[#06020b] hover:bg-transparent rounded-full transition-all duration-300">
            <Link to="/" className="inline-block px-8 py-3 text-xs font-bold uppercase tracking-widest text-white">
              Our Journey Continues ❤️
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}