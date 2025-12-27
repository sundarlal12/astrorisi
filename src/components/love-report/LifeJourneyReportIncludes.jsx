import React, { useState } from "react";
import "./LifeJourneyReportIncludes.css";

const LifeJourneyReportIncludes = ({ title, items = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, 3);

  return (
    <section className="lj-report">
      <h2 className="lj-report-title">{title}</h2>

      <div className="lj-report-grid">
        {visibleItems.map((text, index) => (
          <div className="lj-report-card" key={index}>
            <span className="lj-report-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="lj-report-text">{text}</span>
          </div>
        ))}
      </div>

      {items.length > 3 && (
        <div className="lj-report-action">
          <button
            className="lj-show-more"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>
      )}
    </section>
  );
};

export default LifeJourneyReportIncludes;
