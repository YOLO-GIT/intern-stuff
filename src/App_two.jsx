// src/App_two.jsx
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Import components for the second app
import Logout from "./components/missing_page/s.jsx";
import Null_One from "./components/missing_page/c.jsx";
import Null_Two from "./components/missing_page/a.jsx";
import Null_Three from "./components/missing_page/r.jsx";
import Null_Four from "./components/missing_page/e.jsx";
import Null_Five from "./components/missing_page/questionmark.jsx";
import Secret_link from "./components/missing_page/secret_link.jsx";

function App_Two() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logout />} />
        <Route path="/null_one" element={<Null_One />} />
        <Route path="/null_two" element={<Null_Two />} />
        <Route path="/null_three" element={<Null_Three />} />
        <Route path="/null_four" element={<Null_Four />} />
        <Route path="/null_five" element={<Null_Five />} />
        <Route path="/secret_link" element={<Secret_link />} />
      </Routes>
    </Router>
  );
}

export default App_Two;
