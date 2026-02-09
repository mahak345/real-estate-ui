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
      <section id="hero" className="section hero-section">
        <Hero />      </section>

      <section id="top-offers" className="section offers-section">
        <TopOffers />
      </section>

      <section id="testimonials" className="section testimonials-section">
        <Testimonials />
      </section>

      <section id="about-us" className="section about-section">
        <AboutUs />
      </section>
      <section id="contact" className="section newsletter-section">
        <Newsletter />
      </section>
    </main>
  );
}


export default Home;
