// import React from "react";
// import "./LifeJourneyHero.css";

// const LifeJourneyHero = () => {
//   return (
//     <section className="lj-hero">
//       <div className="lj-hero-content">
//         <div className="lj-hero-text">
//           <span className="lj-badge">Most Popular Report</span>
//           <h1>Life Journey Report</h1>
//           <p className="lj-subtitle">
//             Unlock the secrets of your destiny with comprehensive astrological insights
//           </p>
//           <p className="lj-description">
//             Discover your life path, career prospects, relationships, health predictions, and financial outlook through detailed Vedic astrology analysis. Get personalized guidance for every aspect of your life journey.
//           </p>

//           <div className="lj-stats">
//             <div className="lj-stat">
//               <span className="lj-stat-number">50,000+</span>
//               <span className="lj-stat-label">Reports Delivered</span>
//             </div>
//             <div className="lj-stat">
//               <span className="lj-stat-number">4.8/5</span>
//               <span className="lj-stat-label">Customer Rating</span>
//             </div>
//             <div className="lj-stat">
//               <span className="lj-stat-number">100+</span>
//               <span className="lj-stat-label">Pages of Insights</span>
//             </div>
//           </div>

//           <div className="lj-hero-actions">
//             <div className="lj-price-box">
//               <span className="lj-original-price">₹2,499</span>
//               <span className="lj-current-price">₹996</span>
//               <span className="lj-discount">60% OFF</span>
//             </div>
//             <button className="lj-btn-primary">Get Your Report Now</button>
//           </div>
//         </div>

//         <div className="lj-hero-image">
//           <div className="lj-image-wrapper">
//             <img
//               src="/src/assets/whatsapp_image_2025-12-23_at_3.37.33_pm.jpeg"
//               alt="Life Journey Report"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifeJourneyHero;



// import React from "react";
// import "./LifeJourneyHero.css";

// const LifeJourneyHero = () => {
//   return (
//     <section className="lj-hero">
//       <div className="lj-hero-content">

//         {/* LEFT CONTENT */}
//         <div className="lj-hero-text">

//           <div className="lj-top-pills">
//             <span className="lj-pill">
//               Trusted by 2,50,000+ seekers worldwide | 100% Personalised | Secure Delivery
//             </span>
//             <span className="lj-pill outline">
//               📅 Detailed 5 Years Prediction Included
//             </span>
//           </div>

//           <h1>
//             Unlock Your <br />
//             <span>Personalised Life Journey Report</span>
//           </h1>

//           <p className="lj-author">
//             By Acharya Luvbhushan (Celebrity Astrologer)
//           </p>

//           <button className="lj-btn-primary">
//             Get My Report Today <span className="strike">₹1996</span> ₹996
//           </button>

//           <div className="lj-stats">
//             <div>
//               <strong>4.5L+</strong>
//               <span>Report Generated</span>
//             </div>
//             <div>
//               <strong>4.8/5</strong>
//               <span>Customer Ratings</span>
//             </div>
//             <div>
//               <strong>400K</strong>
//               <span>Trusted Users</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE (YOUR IMAGE — NOT REMOVED) */}
//         <div className="lj-hero-image">
//           <div className="halo" />
//           <div className="lj-image-wrapper">
//             <img
//               src="/src/assets/whatsapp_image_2025-12-23_at_3.37.33_pm.jpeg"
//               alt="Life Journey Report"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default LifeJourneyHero;




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
