// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Marquee.css";

// const Marquee = () => {
//   const navigate = useNavigate();

//   // Offer countdown (example: 4 hours)
//   const [timeLeft, setTimeLeft] = useState(4 * 60 * 60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   return (
//     <div className="marquee-container">
//       <div className="marquee-inner">
//         {/* PRICE */}
//         <div className="marquee-price">
//           <span className="old-price">₹1996</span>
//           <span className="new-price">₹996</span>
//         </div>

//         {/* CTA */}
//         <button
//           className="marquee-btn"
//           onClick={() => navigate("/life-journey-report#choose-plan")}
//         >
//           GET YOUR REPORT NOW
//         </button>

//         {/* TIMER */}
//         <div className="marquee-timer">
//           <span className="timer-label">Offer ends soon in:</span>
//           <span className="timer-value">
//             {formatTime(timeLeft)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Marquee;




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Marquee.css";

// const Marquee = () => {
//   const navigate = useNavigate();

//   // Offer countdown (example: 4 hours)
//   const [timeLeft, setTimeLeft] = useState(4 * 60 * 60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   return (
//     <div className="marquee-container">
//       <div className="marquee-inner">
//         {/* PRICE */}
//         <div className="marquee-price">
//           <span className="old-price">₹1996</span>
//           <span className="new-price">₹996</span>
//         </div>

//         {/* CTA */}
//         <button
//           className="marquee-btn"
//           onClick={() => navigate("/life-journey-report#choose-plan")}
//         >
//           GET YOUR REPORT NOW
//         </button>

//         {/* TIMER */}
//         <div className="marquee-timer">
//           <span className="timer-label">Offer ends soon in:</span>
//           <span className="timer-value">
//             {formatTime(timeLeft)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Marquee;


import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Marquee.css";

const Marquee = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Offer countdown (example: 4 hours)
  const [timeLeft, setTimeLeft] = useState(4 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const scrollToChoosePlan = () => {
    // First, check if we're already on the right page
    if (location.pathname === "/kundali-matching-report") {
      // Find the "choose-plan" section
      const choosePlanSection = document.getElementById("choose-plan");
      if (choosePlanSection) {
        choosePlanSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      } else {
        // If element not found, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Navigate to the page with hash
      navigate("/kundali-matching-report#choose-plan");
    }
  };

  // Handle scroll to anchor after navigation
  useEffect(() => {
    if (location.hash === "#choose-plan") {
      setTimeout(() => {
        const element = document.getElementById("choose-plan");
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      }, 100); // Small delay to ensure page is loaded
    }
  }, [location.hash]);

  return (
    <div className="marquee-container">
      <div className="marquee-inner">
        {/* PRICE */}
        <div className="marquee-price">
          <span className="old-price">₹1996</span>
          <span className="new-price">₹618</span>
        </div>

        {/* CTA */}
        <button
          className="marquee-btn"
          onClick={scrollToChoosePlan}
        >
          GET YOUR REPORT NOW
        </button>

        {/* TIMER */}
        <div className="marquee-timer">
          <span className="timer-label">Offer ends soon in:</span>
          <span className="timer-value">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;