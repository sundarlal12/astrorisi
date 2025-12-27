import React from 'react';
import './Page.css';

const AboutPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>About Astrorisi</h1>
          <p>Your trusted partner in Hindu astrology and spiritual guidance</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Astrorisi, we are dedicated to providing authentic Hindu astrology consultations
              to help people navigate life's challenges and make informed decisions. Our team of
              expert astrologers combines ancient Vedic wisdom with practical guidance.
            </p>
          </section>

          <section className="about-section">
            <h2>Why Choose Us</h2>
            <ul className="feature-list">
              <li>Handpicked expert astrologers with years of experience</li>
              <li>Authentic Vedic astrology practices</li>
              <li>Personalized consultations tailored to your needs</li>
              <li>Video call option for face-to-face guidance</li>
              <li>Transparent pricing with no hidden charges</li>
              <li>Complete confidentiality and privacy</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <p>
              We believe in honesty, authenticity, and genuine care for our clients. Our
              astrologers provide practical remedies and solutions that can be easily
              implemented in daily life.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
