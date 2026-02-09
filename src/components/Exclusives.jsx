import "../styles/ExclusiveRoom.scss";
import "../styles/Navbar.scss";
import "../styles/Footer.scss";

import propertyImg from "../assets/images/Image.png";
import newsletterImg from "../assets/images/paper plane.png";
import FlatImg from "../assets/images/Flat.png";
import Dimensions from "../assets/images/Dimensions.png";
import Location from "../assets/images/location pin.png";
import related1 from "../assets//images/container2.png";
import related2 from "../assets/images/Container8.png";
import related3 from "../assets/images/Container9.png";


export default function ExclusiveRoom() {
  return (
    <div className="property-page">
      <header className="property-header">
        <span className="back-btn">← Back</span>
        <h1>Exclusive 5-room residence with a rooftop terrace</h1>
      </header>

      <div className="property-image">
        <img src={propertyImg} alt="Exclusive property" />
      </div>

      <div className="property-info">
        <div className="info-item">
          <img src={FlatImg} alt="Flat" />
          <span>a Flat</span>
        </div>

        <div className="info-item">
          <img src={Dimensions} alt="Area" />
          <span>224 m²</span>
        </div>

        <div className="info-item">
          <img src={Location} alt="Location" />
          <span>Barcelona I.</span>
        </div>
      </div>

      <div className="mortgage-box">
        <p>Mortgage since</p>
        <h3>807.57 € / month</h3>
        <button>Get a mortgage</button>
      </div>

      {/* DESCRIPTION */}
      <div className="property-content">
        <p>
          Real estate offers an exclusive FOR SALE elegant large 5-room apartment
          on Vincent Hoičk Street in the Condominium Renaissance residential complex.
          <br /><br />
          Thanks to its unique location, the property has access to a large Japanese
          garden with an area of 35 m², which can be accessed directly from the
          bedroom. The front of the apartment is at the height of the third floor,
          so the terrace is located just above the treetops, which gives direct
          views of the Danube River and the surrounding forests.
          <br /><br />
          The apartment offers extraordinary comfort, has a first-class interior
          from leading architectural office Kakov Makon and equipment from renowned
          world furniture manufacturers. The overall atmosphere of the apartment
          is completed.
        </p>
      </div>

      {/* BASIC CHARACTERISTICS */}
      <h3>Basic characteristics:</h3>
      <ul>
        <li>number of rooms: 5</li>
        <li>2nd floor of 5</li>
        <li>apartment area: 223.92 m²</li>
        <li>terrace area: 27.08 m²</li>
        <li>balcony area: 6.83 m²</li>
        <li>area of the Japanese garden: 35 m²</li>
      </ul>

      {/* LAYOUT */}
      <h3>Layout solution:</h3>
      <p>
        Kitchen, living room, study, 4 bedrooms, 2 bathrooms, wardrobe, fireplace.
        Two garage parking spaces in the underground garage.
        <br /><br />
        The apartment is divided into day and night zones. The living area consists
        of a large living room, which is connected to the kitchen and dining room.
        In this part of the apartment there is also a study, which is very subtly
        separated from the living room by an elegant glass wall and wooden beams.
        <br /><br />
        From the living area there is a smooth transition to the night wing, where
        there are two rooms, a wardrobe, a shared bathroom and a master bedroom
        with a separate bathroom.
      </p>

      {/* FURNISHING */}
      <h3>Execution and furnishing of the apartment:</h3>
      <p>
        The apartment has intelligent control via a mobile application. Premium
        natural materials – wood, stone tiles, cast concrete – are found in many
        places in the living space.
        <br /><br />
        The kitchen of the LEICHT brand with SIEMENS appliances has been made to
        measure, bathroom and toilets are equipped with sanitary ware from the
        manufacturers VILLEROY & BOCH and HANSGROHE.
        <br /><br />
        The master bathroom has a bathtub with hydromassage and a shower enclosure.
        In the living room is equipped with ROLF BENZ brand products.
      </p>

      {/* LOCATION */}
      <h3>Location:</h3>
      <p>
        The apartment has intelligent control via a mobile application. Premium
        natural materials – wood, stone tiles, cast concrete – are found in many
        places in the living space.
        <br /><br />
        The property is located above Paseo de Gràcia, there is an excellent
        transport connection. The nearby housing estate provides complete civic
        amenities, including shops, cafés, restaurants, schools, kindergartens
        and many other benefits.
      </p>

      {/* MAP */}
      <div className="map">
        <iframe
          title="Barcelona Map"
          src="https://www.google.com/maps?q=Barcelona,+Spain&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      {/* CONTACT */}
      <div className="contact-box">
        <h3>Contact us</h3>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email address" />
        <textarea placeholder="Your message" rows="4" />
        <button>Send Message</button>
      </div>
      {/* YOU MIGHT BE INTERESTED IN */}
      <div className="related-section">
        <h3>You might be interested in</h3>
        <div className="related-grid">
          <div className="related-card">
            <img src={related1} alt="Property 1" />
            <h4>Spacious 3-bedroom apartment</h4>
            <p>Barcelona I.</p>
            <span>€ 980 000</span>
          </div>
          

          <div className="related-card">
            <img src={related2} alt="Property 2" />
            <h4>Elegant 4-bedroom residence</h4>
            <p>Barcelona II.</p>
            <span>€ 1 120 000</span>
          </div>

          <div className="related-card">
            <img src={related3} alt="Property 3" />
            <h4>Luxury apartment with terrace</h4>
            <p>Barcelona III.</p>
            <span>€ 1 350 000</span>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <img src={newsletterImg} alt="Newsletter" />
        <h3>Subscribe to newsletter</h3>
        <p>Get the latest news and interesting offers and real estate</p>

        <div className="newsletter-form">
          <input placeholder="Your e-mail address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

