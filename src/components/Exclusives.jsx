
import React from "react";
import "../styles/ExclusiveRoom.scss"; 

import { Button, Form } from "react-bootstrap";
// import { FaBed, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

export default function ExclusivePropertyPage() {
  return (
    <div className="exclusive-page">
      {/* HEADER */}
      <div className="page-header">
        <span className="back">← Back</span>
        <h2>Exclusive 5-room residence with a rooftop terrace</h2>
      </div>

      {/* IMAGE GALLERY */}
      <div className="gallery">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="property"
          className="main-img"
        />
        <div className="thumbs">
          <img src="https://images.unsplash.com/photo-1560185008-cde436f6a4d0" />
          <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e" />
          <img src="https://images.unsplash.com/photo-1560448071-39c7b7d4d7ef" />
        </div>
      </div>

      {/* QUICK INFO */}
      <div className="quick-info">
        <div><FaBed /> a Flat</div>
        <div><FaRulerCombined /> 224 m²</div>
        <div><FaMapMarkerAlt /> Barcelona I.</div>
      </div>

      {/* MORTGAGE */}
      <div className="mortgage">
        <p>Mortgage since</p>
        <h4>807.57 € / month</h4>
        <Button className="mortgage-btn">Get a mortgage</Button>
      </div>

      {/* DESCRIPTION */}
      <section className="section">
        <h5>Description</h5>
        <p>
          Real estate offers an exclusive FOR SALE elegant large 5-room
          apartment on Vincent Hozstric Street in the Condominium Renaissance
          residential complex.
        </p>
        <p>
          The apartment offers extraordinary comfort, high-class interior and
          modern furniture.
        </p>
      </section>

      {/* CHARACTERISTICS */}
      <section className="section">
        <h5>Brief characteristics</h5>
        <ul>
          <li>City: Barcelona I.</li>
          <li>Type: 5 rooms</li>
          <li>Usable area: 224 m²</li>
          <li>Terrace: Yes</li>
          <li>Balcony: Yes</li>
        </ul>
      </section>

      {/* MAP */}
      <section className="section">
        <h5>Location</h5>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Barcelona&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h5>Contact us</h5>
        <div className="agent">
          <img src="https://i.pravatar.cc/80" />
          <div>
            <strong>Haylo Dorin</strong>
            <p>📞 +34 555 781 793</p>
          </div>
        </div>

        <Form>
          <Form.Control placeholder="Your full name" />
          <Form.Control placeholder="Your email" className="mt-2" />
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
            className="mt-2"
          />
          <Button className="send-btn">Send Message</Button>
        </Form>
      </section>
    </div>
  );
}
