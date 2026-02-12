// src/pages/Home.jsx

import Hero from "../components/Hero";
import TopOffers from "../components/TopOffers";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs"; 
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import "../styles/Home.scss";
import "../styles/Newsletter.scss";
import "../styles/hero.scss";
import "../styles/Main.scss";

function Home() {
  return (
    <>
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

        {/* FOOTER */}
        <Footer />

      </main>
    </>
  );
}

export default Home;
