import React, { useState } from "react";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSearch = () => {
    if (!location.trim()) {
      setMessage("Please enter a location");
      setSuccess(false);
      return;
    }
    if (!type) {
      setMessage("Please select property type");
      setSuccess(false);
      return;
    }
    if (!bedrooms) {
      setMessage("Please select bedrooms");
      setSuccess(false);
      return;
    }
    if (!price) {
      setMessage("Please select price range");
      setSuccess(false);
      return;
    }

  
    setMessage("Search completed successfully!");
    setSuccess(true);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="bg-light py-4">
      <div className="container">
        <h4 className="mb-3">Search for an offer</h4>

        {message && (
          <div
            className={`alert ${
              success ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <div className="row g-2 align-items-end">
          <div className="col-md">
            <input
              type="text"
              className="form-control"
              placeholder="Search by location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="col-md">
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Property type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
            </select>
          </div>

          <div className="col-md">
            <select
              className="form-select"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>

          <div className="col-md">
            <select
              className="form-select"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              
              <option value="">Select price</option>
              <option value="below-300">Below 300k</option>
              <option value="300-500">300k – 500k</option>
              <option value="500+">500k+</option>
            </select>
          </div>

          <div className="col-md-auto">
            <button
              className="btn btn-success px-4"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
