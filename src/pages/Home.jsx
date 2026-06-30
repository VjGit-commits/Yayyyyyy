// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#0b0314] text-gray-100 overflow-x-hidden relative font-sans select-none">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse delay-700"></div>

      {/* --- SECTION 1: HERO ENTER --- */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-center px-4 overflow-hidden">
        
        {/* Floating elements styling injected directly */}
        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
          }
          .floating-heart {
            position: absolute; bottom: -50px; color: rgba(244, 63, 94, 0.4);
            animation: floatUp 8s infinite linear; pointer-events: none;
          }
        `}</style>
        
        {/* Decorative Floating Hearts */}
        <div className="floating-heart text-2xl" style={{ left: '10%', animationDelay: '0s', animationDuration: '9s' }}>❤️</div>
        <div className="floating-heart text-xl" style={{ left: '30%', animationDelay: '2s', animationDuration: '7s' }}>✨</div>
        <div className="floating-heart text-3xl" style={{ left: '70%', animationDelay: '1s', animationDuration: '11s' }}>🌸</div>
        <div className="floating-heart text-lg" style={{ left: '85%', animationDelay: '4s', animationDuration: '6s' }}>❤️</div>

        {/* Main Title with Premium Gradient & Glow */}
        <div className="relative group">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-[0_5px_30px_rgba(244,63,94,0.4)] animate-pulse">
            🎉 Happy Birthday <br className="md:hidden"/> Nihuu 🎉
          </h1>
        </div>

        <p className="text-xl md:text-2xl mt-8 text-purple-200/80 font-medium tracking-widest max-w-md border-b border-purple-500/30 pb-4">
          WELCOME TO YOUR MAGICAL JOURNEY
        </p>

        {/* Animated Scroll Down Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center opacity-70 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-pink-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-pink-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>


      {/* --- SECTION 2: THE KEEPSAKE (VIDEO) --- */}
      <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative z-10">
        
        {/* Cinematic Video Container with Neon Glow */}
        <div className="w-full max-w-4xl bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-4 md:p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_0_50px_rgba(244,63,94,0.2)]">
          <div className="rounded-2xl overflow-hidden shadow-inner bg-black">
            <video
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-auto aspect-video object-cover"
            >
              <source src="/music/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Heartfelt Letter Card (Glassmorphic) */}
        <div className="mt-12 w-full max-w-3xl bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 shadow-xl text-center">
          
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300 text-3xl md:text-5xl font-extrabold tracking-wide mb-6">
            🌸 Forever Radiating Positivity ❤️
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light space-y-4">
            Every smile you share makes someone's day brighter. <br />
            Every dream you chase becomes an inspiration.
          </p>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent my-6 mx-auto"></div>

          <p className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
            May this birthday bring endless happiness,<br />
            beautiful memories, amazing adventures,<br />
            and the spectacular success you deserve.
          </p>
        </div>
      </section>


      {/* --- SECTION 3: THE PORTAL (POSITIONS SWAPPED) --- */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0b0314] to-[#160429] relative px-4">
        
        <div className="text-center mb-8 max-w-sm">
          <h3 className="text-2xl font-bold text-pink-400">Ready for Chapter Two?</h3>
          <p className="text-gray-400 text-sm mt-2">The gateways to your favorite chapters are completely unlocked.</p>
        </div>

        {/* Layout container with Books Button ordered first */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-2xl px-4 z-10">
          
          {/* FIRST: BOOKS LIBRARY BUTTON */}
          <Link
            to="/books"
            className="relative group inline-flex w-full sm:w-auto items-center justify-center px-10 py-5 text-xl font-bold text-white rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 blur-lg opacity-40 group-hover:opacity-100 transition duration-500"></span>

            <span className="relative flex items-center gap-3">
              <span>📚</span> Books Library
            </span>
          </Link>

          {/* SECOND: MUSIC BUTTON */}
          <Link
            to="/music"
            className="relative group inline-flex w-full sm:w-auto items-center justify-center px-10 py-5 text-xl font-bold text-white rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 blur-lg opacity-40 group-hover:opacity-100 transition duration-500"></span>

            <span className="relative flex items-center gap-3">
              <span>🎵</span> Listen to Her Music
            </span>
          </Link>

        </div>

        {/* Simple Photo Link kept safely on the Bottom-Left */}
        <div className="absolute bottom-6 left-6 z-20">
          <Link 
            to="/gallery" 
            className="text-gray-400 hover:text-pink-400 text-sm md:text-base font-medium tracking-wide transition-colors duration-300 flex items-center gap-1.5 opacity-70 hover:opacity-100"
          >
            <span>✨</span> View Her Favorite Pics
          </Link>
        </div>
      </section>

    </div>
  );
}