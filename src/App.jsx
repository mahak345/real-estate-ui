import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Exclusives from "./components/Exclusives";
import "./styles/Main.scss";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exclusive" element={<Exclusives />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;



