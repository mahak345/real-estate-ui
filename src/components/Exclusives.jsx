// import React from "react";
// import "../styles/ExclusiveRoom.scss";

// export default function PropertyDetails() {
//   return (
//     <div className="property-page">
//       {/* HEADER */}
//       <header className="property-header">
//         <span className="back-btn">← Back</span>
//         <h1>Exclusive 5-room residence with a rooftop terrace</h1>
//       </header>

//       {/* MAIN IMAGE */}
//       <div className="property-image">
//         <img
//           src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//           alt="Property"
//         />
//       </div>

//       {/* INFO ROW */}
//       <div className="property-info">
//         <div>🏢 a flat</div>
//         <div>📐 224 m²</div>
//         <div>📍 Barcelona</div>
//       </div>

//       {/* MORTGAGE */}
//       <div className="mortgage-box">
//         <p>Mortgage since</p>
//         <h3>807.57 € / month</h3>
//         <button>Get a mortgage</button>
//       </div>

//       {/* DESCRIPTION */}
//       <div className="property-content">
//         <h3>Description</h3>
//         <p>
//           Real estate offers an exclusive FOR SALE elegant large 5-room
//           apartment in Vinch Street in the Condominium Renaissance residential
//           complex.
//         </p>

//         <h3>Basic characteristics</h3>
//         <ul>
//           <li>Number of rooms: 5</li>
//           <li>Usable area: 224 m²</li>
//           <li>Balcony: Yes</li>
//           <li>Terrace: Yes</li>
//         </ul>
//       </div>

//       {/* MAP */}
//       <div className="map">
//         <img
//           src="https://maps.googleapis.com/maps/api/staticmap?center=Barcelona&zoom=13&size=600x300"
//           alt="Map"
//         />
//       </div>

//       {/* CONTACT */}
//       <div className="contact-box">
//         <h3>Contact us</h3>
//         <input type="text" placeholder="Your full name" />
//         <input type="email" placeholder="Your email" />
//         <textarea placeholder="Your message"></textarea>
//         <button>Send Message</button>
//       </div>

//       {/* NEWSLETTER */}
//       <div className="newsletter">
//         <h3>Subscribe to newsletter</h3>
//         <p>Get the latest news and interesting offers</p>
//         <div className="newsletter-form">
//           <input placeholder="Your e-mail address" />
//           <button>Subscribe</button>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer className="footer">
//         <p>🏠 Real Estate</p>
//       </footer>
//     </div>
//   );
// }

import "../styles/ExclusiveRoom.scss";
import "../styles/Navbar.scss";
import "../styles/Footer.scss"

export default function ExclusiveRoom() {
  return (
    <div className="property-page">
      <header className="property-header">
        <span className="back-btn">← Back</span>
        <h1>Exclusive 5-room residence with a rooftop terrace</h1>
      </header>

      <div className="property-image">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Exclusive property"
        />
      </div>

      <div className="property-info">
        <div>🏢 Flat</div>
        <div>📐 224 m²</div>
        <div>📍 Barcelona</div>
      </div>

      <div className="mortgage-box">
        <p>Mortgage since</p>
        <h3>807.57 € / month</h3>
        <button>Get a mortgage</button>
      </div>

      <div className="property-content">
        <h3>Description</h3>
        <p>
          This exclusive five-room apartment is located in a premium residential
          complex in Barcelona. The property offers spacious interiors, modern
          architecture, and a private rooftop terrace with panoramic city views.
        </p>

        <h3>Basic characteristics</h3>
        <ul>
          <li>Rooms: 5</li>
          <li>Usable area: 224 m²</li>
          <li>Balcony: Yes</li>
          <li>Terrace: Yes</li>
        </ul>
      </div>

      <div className="map">
        <img
          src="https://via.placeholder.com/800x300?text=Location+Map"
          alt="Map"
        />
      </div>

      <div className="contact-box">
        <h3>Contact us</h3>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email address" />
        <textarea placeholder="Your message" rows="4" />
        <button>Send Message</button>
      </div>

      <div className="newsletter">
        <h3>Subscribe to newsletter</h3>
        <p>Get the latest news and exclusive real estate offers</p>
        <div className="newsletter-form">
          <input placeholder="Your e-mail address" />
          <button>Subscribe</button>
        </div>
      </div>

      <footer className="footer">
        <p>🏠 Real Estate</p>
      </footer>
    </div>
  );
}
