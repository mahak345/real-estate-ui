import React from 'react';
import { Link } from 'react-router-dom';
// Create placeholder imports - replace with actual images
import containerImg from '../assets/images/container.png'; // Add this file
import bedroomImg from '../assets/images/Number input.png'; // Add this file

function OffersGrid() {
  const offers = [
    {
      title: "Bright and airy 2-bedroom flat near city center",
      price: "320 000€",
      location: "Barcelona IV.",
      img: containerImg,
    },
    {
      title: "Exclusive 5-room residence with rooftop terrace",
      price: "495 000€",
      location: "Barcelona I.",
      img: bedroomImg, 
    },
    {
      title: "Newly built 4-room apartment with premium finishes",
      price: "390 000€",
      location: "Madrid III.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Modern loft with city view",
      price: "280 000€",
      location: "Seville II.",
      img: "https://images.unsplash.com/photo-1598928506313-2125dbb7b2f6?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Luxury villa with swimming pool",
      price: "1 200 000€",
      location: "Ibiza I.",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Cozy apartment near park",
      price: "310 000€",
      location: "Valencia III.",
      img: "https://images.unsplash.com/photo-1580584128379-5e3b20c3c380?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Penthouse with rooftop terrace",
      price: "600 000€",
      location: "Madrid II.",
      img: "https://images.unsplash.com/photo-1598928506313-2125dbb7b2f6?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Classic 3-bedroom townhouse",
      price: "450 000€",
      location: "Barcelona III.",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Minimalist studio apartment",
      price: "220 000€",
      location: "Seville I.",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Family home near park",
      price: "350 000€",
      location: "Valencia I.",
      img: containerImg,
    },
    {
      title: "Charming countryside villa",
      price: "750 000€",
      location: "Mallorca II.",
      img: containerImg,
    },
    {
      title: "Modern apartment with balcony",
      price: "400 000€",
      location: "Barcelona II.",
      img: containerImg,
    },
  ];

  return (
    <section className="offers-section py-4">
      <div className="container">
        <p className="results-count mb-4">1452 results found</p>
        <div className="row g-4">
          {offers.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="offer-card h-100 shadow-sm border rounded overflow-hidden">
                <Link to="/exclusive">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                </Link>
                <div className="offer-body p-3">
                  <h6 className="mb-2">{item.title}</h6>
                  <div className="price fw-bold text-primary fs-5 mb-1">{item.price}</div>
                  <div className="city text-muted">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffersGrid;
