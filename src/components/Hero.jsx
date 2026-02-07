// import React from "react";
// import heroImg from "../assets/images/Container.png";
// import "../styles/hero.scss";

// function Hero() {
//   return (
//     <section className="hero-section py-5">
//       <div className="container">
//         <div className="row align-items-center">

//           {/* Search */}
//           <div className="col-md-6 mb-4 mb-md-0">
//             <h1 className="hero-title">
//               Modern living <br /> for everyone
//             </h1>
//             <p className="hero-text">
//               We provide a complete service for the sale, <br />
//               purchase or rental of real estate. We have been <br />
//               operating in Spain for more than 15 years.
//             </p>

//             {/* Search Box */}
//             <div className="hero-search d-flex flex-column flex-sm-row gap-2 mt-4">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search location"
//               />
//               <select className="form-select">
//                 <option>Property type</option>
//                 <option>Apartment</option>
//                 <option>House</option>
//                 <option>Villa</option>
//               </select>
//               <button className="btn btn-success">Search</button>
//             </div>
//           </div>

//           <div className="col-md-6 text-center text-md-end">
//             <img src={heroImg} alt="hero" className="img-fluid" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;




import React, { useState } from "react";
import heroImg from "../assets/images/Container.png";
import "../styles/hero.scss";

function Hero() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (location.trim() === "") {
      setError("Please enter a location");
      return;
    }

    if (propertyType === "") {
      setError("Please select a property type");
      return;
    }

    setError("");
    alert(`Searching ${propertyType} in ${location}`);
  };

  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="hero-title">
              Modern living <br /> for everyone
            </h1>

            <p className="hero-text">
              We provide a complete service for the sale, <br />
              purchase or rental of real estate.
            </p>

            {/* Search Box */}
            <div className="hero-search d-flex flex-column flex-sm-row gap-2 mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <select
                className="form-select"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Property type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
              </select>

              <button className="btn btn-success" onClick={handleSearch}>
                Search
              </button>
            </div>

            {/* Error message */}
            {error && <small className="text-danger mt-2 d-block">{error}</small>}
          </div>

          <div className="col-md-6 text-center text-md-end">
            <img src={heroImg} alt="hero" className="img-fluid" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
