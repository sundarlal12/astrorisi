import React from "react";
import "./LifeJourneyWhySpecial.css";

const LifeJourneyWhySpecial = ({ data }) => {
  return (
    <section className="lj-why">
      <div className="lj-why-container">

        {/* LEFT IMAGE */}
        <div className="lj-why-image">
          <img src={data.image.src} alt={data.image.alt} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lj-why-content">
          <span className="lj-why-label">{data.label}</span>

          <h2>{data.title}</h2>

          <ul className="lj-why-points">
            {data.points.map((point, index) => (
              <li key={index}>
                <span className="check">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="lj-why-footer">
            {data.footerText}
          </p>
        </div>

      </div>
    </section>
  );
};

export default LifeJourneyWhySpecial;
