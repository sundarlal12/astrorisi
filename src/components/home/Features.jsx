import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="feature-title">Handpicked Astrologers</h3>
            <p className="feature-desc">All astrologers are carefully selected by our experts,</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="feature-title">No Per-Minute Charges</h3>
            <p className="feature-desc">We believe in giving the right remedies, not charging</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="14" height="12" rx="2" />
                <path d="M16 8l4-2v10l-4-2" />
              </svg>
            </div>
            <h3 className="feature-title">Video Call Consultation</h3>
            <p className="feature-desc">Consult face-to-face so you know whom you are</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7-6-4.6h7.6z" />
              </svg>
            </div>
            <h3 className="feature-title">Unique Approach</h3>
            <p className="feature-desc">Get best results with our proven and personalized</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
