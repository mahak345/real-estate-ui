
// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.scss";
// import logo from "../assets/images/Logo.png";

// function Navbar() {
//   const handleImageError = (e) => {
//     e.target.src = "https://via.placeholder.com/40x40?text=Logo";
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//       <div className="container">

//         {/* LOGO */}
//         <Link className="navbar-brand" to="/">
//           <img
//             src={logo}
//             alt="Logo"
//             className="navbar-logo"
//             onError={handleImageError}
//           />
//         </Link>
//         {/* TOGGLE BUTTON */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//           aria-controls="mainNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
// <div className="collapse navbar-collapse" id="mainNavbar">
//   <ul className="navbar-nav ms-auto">
//     <li className="nav-item">
//       <a className="nav-link" href="#top-offers">Top Offers</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#testimonials">Testimonials</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#about-us">About Us</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#contact">Contact</a>
//     </li>
//     <li className="nav-item">
//       <Link className="nav-link" to="/search">Search</Link>
//     </li>
//   </ul>
// </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;









import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#top-offers">Top Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;





















