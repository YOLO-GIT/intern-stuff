// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import Documents from "./components/document.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </Router>
  );
}

export default App;
