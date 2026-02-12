import Hero from "../components/Hero";
import TopOffers from "../components/TopOffers";
import Testimonials from "../components/Testimonials";
import AboutUs from "../componenents/AboutUs"; // typo here
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
        <section id="hero" className="section hero-section">
          <Hero />
        </section>

        <section id="top-offers" className="section offers-section">
          <TopOffers />
        </section>

        <section id="testimonials" className="section testimonials-section">
          <Testimonials />
        </section>

        <section id="about-us" className="section about-section">
          <AboutUS />
        </section>

        <section id="contact" className="section newsletter-section">
          <Newsletter />
        </section>
      </main>

    </>
  );
}

export default Home;
