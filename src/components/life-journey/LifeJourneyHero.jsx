

import React from "react";
import "./LifeJourneyHero.css";

const LifeJourneyHero = ({ data }) => {
  const {
    pills,
    title,
    highlightTitle,
    author,
    cta,
    stats,
    image
  } = data;





  const handleCTAClick = () => {
  const section = document.getElementById("choose-plan");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};


  
  return (
    <section className="lj-hero">
      <div className="lj-hero-content">

        {/* LEFT CONTENT */}
        <div className="lj-hero-text">

          <div className="lj-top-pills">
            {pills.map((pill, index) => (
              <span
                key={index}
                className={`lj-pill ${pill.outline ? "outline" : ""}`}
              >
                {pill.text}
              </span>
            ))}
          </div>

          <h1>
            {title} <br />
            <span>{highlightTitle}</span>
          </h1>

          <p className="lj-author">{author}</p>

          <button className="lj-btn-primary" onClick={handleCTAClick} >
            {cta.text}{" "}
            <span className="strike">{cta.oldPrice}</span>{" "}
            {cta.newPrice}
          </button>

          <div className="lj-stats">
            {stats.map((stat, index) => (
              <div key={index}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lj-hero-image">
          <div className="halo" />
          <div className="lj-image-wrapper">
            <img src={image.src} alt={image.alt} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LifeJourneyHero;
