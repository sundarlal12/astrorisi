// import React from "react";
// import "./ChooseYourPlan.css";

// const ChooseYourPlan = ({ title, subtitle, plans }) => {
//   return (
//     <section className="choose-plan">
//       <h2>{title}</h2>
//       <p className="choose-subtitle">{subtitle}</p>

//       <div className="plan-grid">
//         {plans.map((plan, i) => (
//           <div
//             key={i}
//             className={`plan-card ${plan.highlight ? "highlight" : ""}`}
//           >
//             {plan.badge && <span className="plan-badge">{plan.badge}</span>}

//             <h3>{plan.title}</h3>
//             <p className="plan-desc">{plan.description}</p>

//             <div className="plan-price">
//               <span className="old">{plan.originalPrice}</span>
//               <span className="new">{plan.price}</span>
//             </div>

//             <ul>
//               {plan.features.map((f, idx) => (
//                 <li key={idx}>✔ {f}</li>
//               ))}
//             </ul>

//             <p className="plan-footer">{plan.footer}</p>

//             <button className="plan-btn">
//               BUY NOW
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ChooseYourPlan;




import React, { useState } from "react";
import "./ChooseYourPlan.css";
import ReportBookingForm from "./ReportBookingForm";

/* =========================
   DATA (DEFINED OUTSIDE)
========================= */
export const plans = [
  {
    badge: "FLAT 60% OFF",
    title: "Love Report",
    description: "Understand Your Emotions, Attraction & Love Patterns",
    originalPrice: "₹999",
    price: "₹393",
    features: [
      "In-depth analysis of your emotional nature and romantic energy",
      "Insights into Venus and Mars placements and their role in love",
      "Understanding past heartbreaks, repeated patterns, and emotional blocks",
      "Prepared in simple, easy-to-read language by experienced astrologers"
    ],
    footer:
      "Best for anyone seeking clarity about love, emotions, and relationship patterns."
  },
  {
    badge: "BEST SELLER",
    highlight: true,
    title: "Love Report + 1-On-1 Consultation",
    description: "Discuss Your Love & Relationship Questions with an Expert",
    originalPrice: "₹2999",
    price: "₹1599",
    features: [
      "Includes the complete Love Report with detailed emotional insights",
      "15–20 minute private consultation with an expert astrologer",
      "Real-time clarity on relationship, marriage, and love concerns",
      "Personalized remedies and guidance tailored to your love chart"
    ],
    footer:
      "Ideal for those who want personal interaction and deeper relationship guidance."
  },
  {
    badge: "BUDGET FRIENDLY",
    title: "Love Report + Ask The Astrologer",
    description: "Get a Clear Answer to Your Love or Marriage Question",
    originalPrice: "₹1999",
    price: "₹1199",
    features: [
      "Includes the complete Love Report with compatibility insights",
      "Ask one personal question related to love or marriage",
      "Receive a detailed written response from an expert within 3 days"
    ],
    footer:
      "Perfect if you want love insights along with a clear, focused answer."
  }
];
 
/* =========================
   COMPONENT
========================= */

const ChooseYourPlan = ({ title, subtitle, plans }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBuyNow = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <section className="choose-plan" id="choose-plan">
        <h2>{title}</h2>
        <p className="choose-subtitle">{subtitle}</p>

        <div className="plan-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${plan.highlight ? "highlight" : ""}`}
            >
              {plan.badge && <span className="plan-badge">{plan.badge}</span>}

              <h3>{plan.title}</h3>
              <p className="plan-desc">{plan.description}</p>

              <div className="plan-price">
                <span className="old">{plan.originalPrice}</span>
                <span className="new">{plan.price}</span>
              </div>

              <ul>
                {plan.features.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>

              <p className="plan-footer">{plan.footer}</p>

              <button className="plan-btn" onClick={() => handleBuyNow(plan)}>
                ORDER NOW
              </button>
            </div>
          ))}
        </div>
      </section>

      {showForm && selectedPlan && (
        <ReportBookingForm
          selectedPlan={selectedPlan}
          onClose={handleCloseForm}
        />
      )}
    </>
  );
};

export default ChooseYourPlan;
