import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Music from "./pages/Music";

import Gallery from "./pages/Gallery"; // 1. Imported your new memory wall here!

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/music" element={<Music />} />
      
      {/* 2. Added the gallery web path right here */}
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;