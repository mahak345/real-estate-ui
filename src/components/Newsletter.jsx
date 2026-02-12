import { useState } from "react";
import newsletterImg from "../assets/images/Paper-plane.png";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter email");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter valid email");
      return;
    }

    alert("Subscribed successfully");
    setEmail("");
  };

  
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">

        {/* LEFT IMAGE */}
        <div className="newsletter-image-wrapper">
          <img
            src={newsletterImg}
            alt="Newsletter"
            className="newsletter-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="newsletter-content">
          <h2>Subscribe to newsletter</h2>
          <p>
            Get the latest news and interesting offers and real estate
          </p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your e-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;
