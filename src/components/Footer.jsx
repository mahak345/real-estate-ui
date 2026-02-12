import "../styles/Footer.scss";
import Logo from "../assets/images/logo.png";



function Footer() {
  
  return (
    <footer className="footer-green">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={Logo}
              alt="Real Estate Logo"
              className="footer-logo-img"
            />
          </div>

          {/* LINKS */}
          <div className="col-md-8">
            <ul className="footer-links d-flex justify-content-md-end justify-content-center">
              <li>Top offers</li>
              <li>Search in offers</li>
              <li>References</li>
              <li>About us</li>
              <li>Our team</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

// footer updated by Mahak
