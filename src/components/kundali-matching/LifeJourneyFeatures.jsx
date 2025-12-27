// import React from "react";
// import "./LifeJourneyFeatures.css";

// const features = [
//   {
//     icon: "🌟",
//     title: "Birth Chart Analysis",
//     description: "Detailed planetary positions and their influence on your life path"
//   },
//   {
//     icon: "💼",
//     title: "Career Guidance",
//     description: "Best career opportunities, timing, and professional growth predictions"
//   },
//   {
//     icon: "❤️",
//     title: "Relationship Insights",
//     description: "Love, marriage compatibility, and relationship timeline analysis"
//   },
//   {
//     icon: "💰",
//     title: "Financial Forecast",
//     description: "Wealth accumulation periods, investment timing, and prosperity indicators"
//   },
//   {
//     icon: "🏥",
//     title: "Health Predictions",
//     description: "Physical and mental health tendencies with preventive measures"
//   },
//   {
//     icon: "🎯",
//     title: "Life Purpose",
//     description: "Discover your true calling and spiritual path in this lifetime"
//   },
//   {
//     icon: "📅",
//     title: "Timing Analysis",
//     description: "Best periods for major life decisions and important events"
//   },
//   {
//     icon: "🔮",
//     title: "Remedies & Solutions",
//     description: "Personalized Vedic remedies to overcome challenges"
//   }
// ];

// const LifeJourneyFeatures = () => {
//   return (
//     <section className="lj-features">
//       <div className="lj-features-container">
//         <div className="lj-features-header">
//           <h2>What's Included in Your Report</h2>
//           <p>Comprehensive analysis covering all aspects of your life journey</p>
//         </div>

//         <div className="lj-features-grid">
//           {features.map((feature, index) => (
//             <div className="lj-feature-card" key={index}>
//               <div className="lj-feature-icon">{feature.icon}</div>
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifeJourneyFeatures;



import React from "react";
import "./LifeJourneyFeatures.css";

const LifeJourneyFeatures = ({ data }) => {
  const { label, title, features } = data;

  return (
    <section className="lj-features">
      <div className="lj-features-container">

        {/* HEADER */}
        <div className="lj-features-header">
          <span className="lj-features-label">{label}</span>
          <h2>{title}</h2>
        </div>

        {/* GRID */}
        <div className="lj-features-grid">
          {features.map((item, index) => (
            <div className="lj-feature-card" key={index}>
              {/* <div className="lj-feature-icon">
                {item.icon}
              </div> */}

              <div className={`lj-feature-icon icon-${item.icon}`} />

              
              <h3>{item.title}</h3>
              <p className="lj-feature-desc">{item.description}</p>

              {item.hindi && (
                <p className="lj-feature-hindi">{item.hindi}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LifeJourneyFeatures;
