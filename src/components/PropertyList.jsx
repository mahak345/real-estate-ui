import React, { useState } from "react";
import img1 from "../assets/images/Container.png";
import img2 from "../assets/images/container1.png";
import img3 from "../assets/images/Container2.png";

const properties = [
  {
    id: 1,
    title: "Bright and airy 2-bedroom flat near the city center",
    price: 320000,
    location: "Barcelona IV.",
    bedrooms: 2,
    type: "Flat",
    image: img1,
  },
  {
    id: 2,
    title: "Exclusive 5-room residence with a rooftop terrace",
    price: 495000,
    location: "Barcelona I.",
    bedrooms: 5,
    type: "Residence",
    image: img2,
  },
  {
    id: 3,
    title: "Newly built 4-room apartment with premium finishes",
    price: 390000,
    location: "Madrid III.",
    bedrooms: 4,
    type: "Apartment",
    image: img3,
  },
];

const PropertyList = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState(properties);

  const handleSearch = () => {
    // Validation: location is required
    if (!location.trim()) {
      setError("Please enter a location!");
      return;
    }
    setError("");

    const filtered = properties.filter((item) => {
      return (
        item.location.toLowerCase().includes(location.toLowerCase()) &&
        (propertyType ? item.type === propertyType : true) &&
        (bedrooms ? item.bedrooms === parseInt(bedrooms) : true) &&
        (price ? item.price <= parseInt(price) : true)
      );
    });

    setResults(filtered);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">Search for an offer</h2>

      <div className="row g-2 mb-4">
        <div className="col-md">
          <input
            className="form-control"
            placeholder="Search location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-md">
          <select
            className="form-select"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Property type</option>
            <option value="Flat">Flat</option>
            <option value="Apartment">Apartment</option>
            <option value="Residence">Residence</option>
          </select>
        </div>
        <div className="col-md">
          <select
            className="form-select"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">Bedrooms</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="col-md">
          <select
            className="form-select"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Select price (max €)</option>
            <option value="350000">€350,000</option>
            <option value="400000">€400,000</option>
            <option value="500000">€500,000</option>
          </select>
        </div>
        <div className="col-md-auto">
          <button className="btn btn-primary px-4" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {error && <p className="text-danger">{error}</p>}

      <p className="text-muted mb-3">{results.length} results found</p>

      <div className="row g-4">
        {results.map((item) => (
          <div className="col-lg-4 col-md-6" key={item.id}>
            <div className="card property-card h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <p className="price">{item.price.toLocaleString()}€</p>
                <p className="location">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-outline-primary px-4">Show more</button>
      </div>
    </div>
  );
};

export default PropertyList;
