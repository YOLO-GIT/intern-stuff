// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import Documents from "./components/document.jsx";
import Slide from "./components/contoh_slide.jsx";
import Note from "./components/contoh_note.jsx";
import About from "./components/about-us.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contoh_slide" element={<Slide />} />
        <Route path="/contoh_nota" element={<Note />} />
        <Route path="/about_us" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
