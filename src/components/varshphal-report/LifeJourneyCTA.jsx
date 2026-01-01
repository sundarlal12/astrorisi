import React from "react";
import "./LifeJourneyCTA.css";

const LifeJourneyCTA = () => {
  return (
    <section className="lj-cta">
      <div className="lj-cta-container">
        <div className="lj-cta-content">
          <h2>Ready to Discover Your Life Journey?</h2>
          <p>
            Join 50,000+ satisfied customers who have gained clarity and direction in their lives. Get your comprehensive astrological report today and unlock the secrets of your destiny.
          </p>

          <div className="lj-cta-features">
            <div className="lj-cta-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>100+ Pages of Insights</span>
            </div>
            <div className="lj-cta-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Expert Vedic Analysis</span>
            </div>
            <div className="lj-cta-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>24-48 Hour Delivery</span>
            </div>
            <div className="lj-cta-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>7-Day Money Back Guarantee</span>
            </div>
          </div>

          <div className="lj-cta-action">
            <div className="lj-cta-pricing">
              <span className="lj-cta-original">₹2,499</span>
              <span className="lj-cta-current">₹996</span>
              <span className="lj-cta-save">Save ₹1,503</span>
            </div>
            <button className="lj-cta-button">Get Your Report Now</button>
          </div>

          <p className="lj-cta-note">
            Limited time offer - Price increases soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifeJourneyCTA;
