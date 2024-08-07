// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import Documents from "./components/document.jsx";
import Slide from "./components/contoh_slide.jsx";
import Note from "./components/contoh_note.jsx";
import About from "./components/about-us.jsx";
import Intro from "./components/documents_folder/intro.jsx";
import Bab_1 from "./components/documents_folder/bab_1.jsx";
import Bab_2 from "./components/documents_folder/bab_2.jsx";
import Bab_3 from "./components/documents_folder/bab_3.jsx";
import Bab_4 from "./components/documents_folder/bab_4.jsx";
import Bab_5 from "./components/documents_folder/bab_5.jsx";
import Bab_6 from "./components/documents_folder/bab_6.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contoh_slide" element={<Slide />} />
        <Route path="/contoh_nota" element={<Note />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/documents_folder/intro" element={<Intro />} />
        <Route path="/documents_folder/bab_1" element={<Bab_1 />} />
        <Route path="/documents_folder/bab_2" element={<Bab_2 />} />
        <Route path="/documents_folder/bab_3" element={<Bab_3 />} />
        <Route path="/documents_folder/bab_4" element={<Bab_4 />} />
        <Route path="/documents_folder/bab_5" element={<Bab_5 />} />
        <Route path="/documents_folder/bab_6" element={<Bab_6 />} />
      </Routes>
    </Router>
  );
}

export default App;
