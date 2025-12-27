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
    badge: "FLAT 70% OFF",
    title: "Premium Kundli Matching Report",
    description: "Understand Compatibility Before Taking the Next Step",
    originalPrice: "₹1996",
    price: "₹618",
    features: [
      "In-depth compatibility review using established matching systems",
      "Clear understanding of alignment in career, relationships, health, and finances",
      "Practical suggestions including gemstones, mantras, and energy-balancing methods",
      "Prepared in simple and easy language by experienced astrology professionals"
    ],
    footer:
      "Best suited for couples who want a clear and reliable compatibility assessment before commitment."
  },
  {
    badge: "BEST SELLER",
    highlight: true,
    title: "Premium Report + Personal Online Consultation",
    description: "Speak Directly With an Astrology Expert",
    originalPrice: "₹2500",
    price: "₹2199",
    features: [
      "Includes the complete Premium Kundli Matching Report",
      "One-on-one online consultation lasting 15–20 minutes",
      "Personal guidance for important life and relationship decisions",
      "Suggestions and remedies aligned with your horoscope"
    ],
    footer:
      "Ideal for those who prefer direct interaction and deeper personalized guidance."
  },
  {
    badge: "BUDGET FRIENDLY",
    title: "Premium Report + Ask the Astrologer (2 Questions)",
    description: "Get Clear Answers to Your Specific Concerns",
    originalPrice: "₹2500",
    price: "₹1599",
    features: [
      "Includes the full Premium Kundli Matching Report",
      "Opportunity to ask two personal questions",
      "Written responses focused on marriage, relationships, family, or career direction"
    ],
    footer:
      "Perfect for users seeking expert insights along with answers to specific questions."
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
