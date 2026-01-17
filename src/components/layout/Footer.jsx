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
              <div className="footer-contact">
                <a href="https://astrorisi.in" target="_blank" rel="noopener noreferrer">
                  astrorisi.in
                </a>
                <a href="mailto:info@astrorisi.in">info@astrorisi.in</a>
              </div>
              <div className="footer-social">
  <a href="https://www.facebook.com/profile.php?id=61584687812602" target="_blank" rel="noopener noreferrer">Facebook</a>
  <a href="https://www.instagram.com/astrorisi" target="_blank" rel="noopener noreferrer">Instagram</a>
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
              </ul>
            </div>

            <div className="footer-col">
  <h4>Astrology Reports</h4>
  <ul>
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
