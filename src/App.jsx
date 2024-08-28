// src/App.js
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import Documents from "./components/document.jsx";
import Slide from "./components/contoh_slide.jsx";
import Note from "./components/contoh_note.jsx";
import About from "./components/about-us.jsx";
import Logout from "./components/missing_page/s.jsx";
import Null_One from "./components/missing_page/c.jsx";
import Null_Two from "./components/missing_page/a.jsx";
import Null_Three from "./components/missing_page/r.jsx";
import Null_Four from "./components/missing_page/e.jsx";
import Null_Five from "./components/missing_page/questionmark.jsx";
import Intro from "./components/documents_folder/intro.jsx";
import Bab_1 from "./components/documents_folder/bab_1.jsx";
import Bab_2 from "./components/documents_folder/bab_2.jsx";
import Bab_3 from "./components/documents_folder/bab_3.jsx";
import Bab_4 from "./components/documents_folder/bab_4.jsx";
import Bab_5 from "./components/documents_folder/bab_5.jsx";
import Bab_6 from "./components/documents_folder/bab_6.jsx";
import Outro from "./components/documents_folder/outro.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contoh_slide" element={<Slide />} />
        <Route path="/contoh_nota" element={<Note />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/null_one" element={<Null_One />} />
        <Route path="/null_two" element={<Null_Two />} />
        <Route path="/null_three" element={<Null_Three />} />
        <Route path="/null_four" element={<Null_Four />} />
        <Route path="/null_five" element={<Null_Five />} />
        <Route path="/documents_folder/intro" element={<Intro />} />
        <Route path="/documents_folder/bab_1" element={<Bab_1 />} />
        <Route path="/documents_folder/bab_2" element={<Bab_2 />} />
        <Route path="/documents_folder/bab_3" element={<Bab_3 />} />
        <Route path="/documents_folder/bab_4" element={<Bab_4 />} />
        <Route path="/documents_folder/bab_5" element={<Bab_5 />} />
        <Route path="/documents_folder/bab_6" element={<Bab_6 />} />
        <Route path="/documents_folder/outro" element={<Outro />} />
      </Routes>
    </Router>
  );
}

export default App;
