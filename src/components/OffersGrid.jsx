import React from "react";
import { Link } from "react-router-dom";

import containerImg from "../assets/images/container3.png";
import bedroomImg from "../assets/images/container4.png";
import containerImg2 from "../assets/images/Tooltip.png";
import containerImg3 from "../assets/images/Container5.png";
import containerImg4 from "../assets/images/Container6.png";
import containerImg5 from "../assets/images/container2.png";
import containerImg6 from "../assets/images/container2.png";
import containerImg7 from "../assets/images/Container7.png";
import containerImg8 from "../assets/images/Number input.png";
import containerImg9 from "../assets/images/Tooltip.png";
import containerImg10 from "../assets/images/container1.png";
import containerImg11 from "../assets/images/Container8.png";
import containerImg12 from "../assets/images/Container9.png";

function OffersGrid() {
  const offers = [
    {
      title: "Bright and airy 2-bedroom flat near city center",
      price: "320 000€",
      location: "Barcelona IV.",
      img: bedroomImg,
    },
    {
      title: "Exclusive 5-room residence with rooftop terrace",
      price: "495 000€",
      location: "Barcelona I.",
      img: containerImg2,
    },
    {
      title: "Newly built 4-room apartment with premium finishes",
      price: "390 000€",
      location: "Madrid III.",
      img: containerImg3,
    },
    {
      title: "Modern loft with city view",
      price: "280 000€",
      location: "Seville II.",
      img: containerImg4,
    },
    {
      title: "Luxury villa with swimming pool",
      price: "1 200 000€",
      location: "Ibiza I.",
      img: containerImg5,
    },
    {
      title: "Cozy apartment near park",
      price: "310 000€",
      location: "Valencia III.",
      img: containerImg6,
    },
    {
      title: "Penthouse with rooftop terrace",
      price: "600 000€",
      location: "Madrid II.",
      img: containerImg7,
    },
    {
      title: "Classic 3-bedroom townhouse",
      price: "450 000€",
      location: "Barcelona III.",
      img: containerImg8,
    },
    {
      title: "Minimalist studio apartment",
      price: "220 000€",
      location: "Seville I.",
      img: containerImg9,
    },
    {
      title: "Family home near park",
      price: "350 000€",
      location: "Valencia I.",
      img: containerImg10,
    },
    {
      title: "Charming countryside villa",
      price: "750 000€",
      location: "Mallorca II.",
      img: containerImg11,
    },
    {
      title: "Modern apartment with balcony",
      price: "400 000€",
      location: "Barcelona II.",
      img: containerImg12,
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
                  <div className="price fw-bold text-primary fs-5 mb-1">
                    {item.price}
                  </div>
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
