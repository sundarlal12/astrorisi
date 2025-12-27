import React from 'react';
import './ConsultationCTA.css';

const ConsultationCTA = () => {
  return (
    <section className="consultation-cta">
      <div className="consultation-background">
        <div className="consultation-image-section">
          <img
            src="https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Astrologer"
            className="consultation-image"
          />
        </div>

        <div className="consultation-content-section">
          <div className="consultation-content">
            <h2 className="consultation-title">
              Get one to one
              <br />
              <span className="highlight">Consultation</span>
            </h2>
            <p className="consultation-subtitle">From Astrorisi</p>

            <div className="consultation-stats">
              <div className="stat-item">
                <span className="stat-value">20 Lakh+</span>
                <span className="stat-label">Lives Transformed</span>
              </div>
              <div className="stat-divider">|</div>
              <div className="stat-item">
                <span className="stat-value">10+ Years</span>
                <span className="stat-label">Experience</span>
              </div>
              <div className="stat-divider">|</div>
              <div className="stat-item">
                <span className="stat-value">India's Most Trusted</span>
                <span className="stat-label">Astrologer & Vastu Expert</span>
              </div>
            </div>

            <button className="consultation-btn">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
