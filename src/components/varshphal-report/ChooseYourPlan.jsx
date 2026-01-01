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

// export const plans = [
//   {
//     badge: "FLAT 50% OFF",
//     title: "Life Changing Report",
//     description: "Your Personalized Roadmap to Life's Big Questions",
//     originalPrice: "₹1996",
//     price: "₹996",
//     features: [
//       "Detailed analysis of your life using Astrology",
//       "Insights on career, love, health & wealth",
//       "Easy remedies like gemstones, mantras & yantras",
//       "Written in simple, easy-to-understand language by expert astrologists"
//     ],
//     footer:
//       "Perfect for anyone who wants clear answers & direction for the next chapter of life."
//   },
//   {
//     badge: "BEST SELLER",
//     highlight: true,
//     title: "Life Changing Report + 1-On-1 Consultation",
//     description: "Discuss Your Challenges Face-to-Face with an Expert",
//     originalPrice: "₹6000",
//     price: "₹1900",
//     features: [
//       "Includes everything in the Life Changing Report",
//       "15–20 minute private session with an expert",
//       "Real-time clarity & guidance for important decisions",
//       "Remedies & advice tailored to your astrology profile"
//     ],
//     footer:
//       "Ideal for people who want live, personal interaction for deeper clarity."
//   },
//   {
//     badge: "BUDGET FRIENDLY",
//     title: "Life Changing Report + Ask The Astrologer (2 Questions)",
//     description: "You ask – Expert answers",
//     originalPrice: "₹4599",
//     price: "₹1599",
//     features: [
//       "Includes everything in the Life Changing Report",
//       "Ask 2 personal questions",
//       "Detailed written answers within 48 hours"
//     ],
//     footer:
//       "Perfect if you want life insights + clear answers to specific concerns."
//   }
// ];

export const plans = [
  {
    badge: "FLAT 75% OFF",
    title: "Varshphal Report",
    description: "Complete 5 Years Detailed Analysis & Predictions",
    originalPrice: "₹999",
    price: "₹249",
    features: [
      "Complete 5 Years Detailed Future Analysis (2026-2030)",
      "In-depth Monthly Predictions & Guidance",
      "Career Growth & Financial Opportunities Insights",
      "Relationship & Personal Life Guidance",
      "Comprehensive PDF Report (60+ Pages)"
    ],
    footer:
      "Perfect for individuals seeking detailed future insights and life direction."
  },
  {
    badge: "MOST POPULAR",
    highlight: true,
    title: "Varshphal Report + 1-on-1 Consultation",
    description: "Complete Analysis with Personal Expert Guidance",
    originalPrice: "₹2999",
    price: "₹1799",
    features: [
      "Everything included in Varshphal Report",
      "20 Minutes Live Personal Consultation",
      "Customized Remedies & Solutions",
      "Q&A Session with Senior Astrologer",
      "Priority Support & Follow-up"
    ],
    footer:
      "Ideal for those who want both detailed analysis and personal expert guidance."
  },
  // {
  //   badge: "PREMIUM",
  //   title: "Advanced Life Roadmap Package",
  //   description: "Comprehensive Analysis with Extended Support",
  //   originalPrice: "₹3999",
  //   price: "₹2899",
  //   features: [
  //     "Extended 7 Years Detailed Predictions",
  //     "30 Minutes Live Consultation Session",
  //     "Personalized Gemstone & Mantra Guidance",
  //     "Monthly Follow-up Support for 3 Months",
  //     "Emergency Quick Query Support"
  //   ],
  //   footer:
  //     "Best for serious seekers wanting ongoing support and comprehensive guidance."
  // }
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
                BUY NOW
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
