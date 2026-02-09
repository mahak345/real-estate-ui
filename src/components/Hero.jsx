import React, { useState } from "react";
import heroImg from "../assets/images/Container.jpg";
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
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Modern living <br /> for everyone
          </h1>

          <p className="hero-text">
            We provide a complete service for the sale, purchase or rental of real estate.
          </p>

          {/* Search Box */}
          <div className="hero-search">
            <input
              type="text"
              className="search-input"
              placeholder="Search location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <select
              className="search-select"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Property type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
            </select>

            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Error message */}
          {error && <small className="error-msg">{error}</small>}
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="hero" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
