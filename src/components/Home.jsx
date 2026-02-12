// Home.jsx
import Hero from "./Hero";
import TopOffers from "./TopOffers";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";
import Newsletter from "./Newsletter";

import "./styles/Home.scss";
import "./styles/Newsletter.scss";

function Home() {
  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section id="hero" className="section hero-section">
        <Hero />
      </section>

      {/* TOP OFFERS */}
      <section id="top-offers" className="section offers-section">
        <TopOffers />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section testimonials-section">
        <Testimonials />
      </section>

      {/* ABOUT US */}
      <section id="about-us" className="section about-section">
        <AboutUs />
      </section>

      {/* NEWSLETTER */}
      <section id="contact" className="section newsletter-section">
        <Newsletter />
      </section>
    </main>
  );
}

export default Home;
