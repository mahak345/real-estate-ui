// // // // // import React from "react";
// // // // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // // // import "./styles/main.scss";
// // // // // import "./styles/ExclusiveRoom.scss";

// // // // // import Navbar from "./components/Navbar";
// // // // // import Footer from "./components/Footer";

// // // // // import Home from "./components/Home";
// // // // // import PropertyList from "./components/PropertyList";
// // // // // import ExclusiveRoom from "./pages/ExclusiveRoom";
// // // // // import Testimonials from "./components/Testimonials";
// // // // // import AboutUs from "./components/AboutUs";
// // // // // import Newsletter from "./components/Newsletter";
// // // // // import Hero from "./components/Hero";
// // // // // import TopOffers from "./components/TopOffers";
// // // // // import Contact from "./components/ContactForm";
// // // // // import PropertyCard from "./components/PropertyCard";
// // // // // import OffersGrid from "./components/OffersGrid"; 

// // // // // function App() {
// // // // //   return (
// // // // //     <BrowserRouter>
// // // // //       <Navbar />

// // // // //       <Routes>
// // // // //         <Route path="/" element={<Home />} />

       

// // // // //         {/* OPTIONAL: PROPERTY LIST WITH SIDEBAR LATER */}
// // // // //         <Route path="/properties" element={<PropertyList />} />

// // // // //         <Route path="/exclusive" element={<ExclusiveRoom />} />
// // // // //       </Routes>

// // // // //       <Footer />
// // // // //     </BrowserRouter>
// // // // //   );
// // // // // }

// // // // // export default App;



// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // import Home from "./pages/Home";
// // // // import SearchResult from "./pages/SearchResult";

// // // // function App() {
// // // //   return (
// // // //     <Router>
// // // //       <Routes>
// // // //         <Route path="/Home" element={<Home />} />
// // // //         <Route path="/SearchResult" element={<SearchResults />} />
// // // //       </Routes>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;

// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // import Home from "./pages/Home";
// // // import SearchResult from "./pages/SearchResult"; // ✅ MUST BE HERE

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/search" element={<SearchResult />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Exclusives from "./components/Exclusives";
import "./styles/main.scss";

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





// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import SearchResult from './pages/SearchResult';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/search" element={<SearchResult />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
