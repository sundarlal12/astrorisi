import React from 'react';
import './Page.css';

const BookPujaPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Book Puja Services</h1>
          <p>Traditional Hindu rituals performed by experienced priests</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="service-section">
            <h2>Available Puja Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Ganesh Puja</h3>
                <p>Remove obstacles and invite prosperity with Lord Ganesh's blessings.</p>
              </div>
              <div className="service-card">
                <h3>Lakshmi Puja</h3>
                <p>Attract wealth, abundance, and prosperity into your life.</p>
              </div>
              <div className="service-card">
                <h3>Navagraha Puja</h3>
                <p>Balance planetary influences and reduce negative effects.</p>
              </div>
              <div className="service-card">
                <h3>Griha Pravesh Puja</h3>
                <p>Bless your new home with positive energy and divine protection.</p>
              </div>
              <div className="service-card">
                <h3>Satyanarayan Puja</h3>
                <p>Seek blessings for peace, prosperity, and family harmony.</p>
              </div>
              <div className="service-card">
                <h3>Rudra Abhishek</h3>
                <p>Invoke Lord Shiva's blessings for health and well-being.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>How It Works</h2>
            <ol className="feature-list">
              <li>Select the puja you wish to perform</li>
              <li>Choose your preferred date and time</li>
              <li>Our priests will perform the puja on your behalf</li>
              <li>Receive video recording and prasad at your doorstep</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookPujaPage;
