import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoImage from '../../assets/logo-b6gmqxob.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <p className="cta-text">Get Consultancy from India's best Astrologer.</p>
            <button className="cta-btn">Consult Now</button>
          </div>
        </div>
      </div> */}

      
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <div className="footer-logo-box">
                  <img src={logoImage} alt="AstroRisi" />
                </div>
                <div className="footer-logo-text">
                  <span className="footer-logo-brand">AstroRisi</span>
                  <span className="footer-logo-tagline">Astrologer Numerologist</span>
                </div>
              </div>
              <p className="footer-desc">
                Your trusted partner in Hindu astrology and spiritual guidance.
                Expert consultation for life's important decisions.
              </p>
              {/* <div className="footer-contact">
                <a href="https://astrorisi.in" target="_blank" rel="noopener noreferrer">
                  astrorisi.in
                </a>
                <a href="mailto:info@astrorisi.in">info@astrorisi.in</a>
              </div> */}
              
              <div className="footer-contact">
  <a
    href="https://astrorisi.in"
    target="_blank"
    rel="noopener noreferrer"
  >
    astrorisi.in
  </a>

  <a href="mailto:info@astrorisi.in">
    info@astrorisi.in
  </a>

  <div className="footer-social">
    <a
      href="https://www.facebook.com/profile.php?id=61584687812602"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Astrorisi on Facebook"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
      </svg>
    </a>

    <a
      href="https://www.instagram.com/astrorisi"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Astrorisi on Instagram"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07z"/>
        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
        <circle cx="18.406" cy="5.594" r="1.44"/>
      </svg>
    </a>
  </div>
</div>

              

            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/consultation">Consultation</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                {/* <li><Link to="/blog">Blog</Link></li> */}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/consultation">Vedic Astrology</Link></li>
                <li><Link to="/consultation">Kundli Reading</Link></li>
                <li><Link to="/consultation">Horoscope Matching</Link></li>
                {/* <li><Link to="/book-puja">Book Puja</Link></li> */}
                 <li><Link to="/life-journey-report">Life Journey Report</Link></li>
    <li><Link to="/life-changing-report">Life Changing Report</Link></li>
    <li><Link to="/premium-life-path">Premium Life Path Report</Link></li>
    <li><Link to="/kundali-matching-report">Kundali Matching Report</Link></li>
    <li><Link to="/love-report">Love Compatibility Report</Link></li>
    <li><Link to="/varshphal-report">Varshphal Report</Link></li>
              </ul>
            </div>



            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                {/* <li><Link to="/about">About Us</Link></li> */}
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AstroRisi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
