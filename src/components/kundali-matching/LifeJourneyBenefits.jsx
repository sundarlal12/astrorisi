import React from "react";
import "./LifeJourneyBenefits.css";

const LifeJourneyBenefits = ({ title, benefits }) => {
  return (
    <section className="lj-benefits">
      <div className="lj-benefits-container">
        <h2 className="lj-benefits-title">{title}</h2>

        <div className="lj-benefits-grid">
          {benefits.map((item, index) => (
            <div className="lj-benefit-card" key={index}>
              <div className="lj-benefit-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeJourneyBenefits;
