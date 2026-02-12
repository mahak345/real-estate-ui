import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import ExclusiveRoom from "./pages/ExclusiveRoom";

function App() {
  return (
    <Router>
      {/* Navbar displayed on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/property/:id" element={<ExclusiveRoom />} />
      </Routes>

      {/* Footer displayed on all pages */}
      <Footer />
    </Router>
  );
}

export default App;

