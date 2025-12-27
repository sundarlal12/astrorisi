// import React from 'react';
// import './Marquee.css';

// const Marquee = () => {
//   return (
//     <div className="marquee-container">
//       <div className="marquee-track">
//         <div className="marquee-content">
//           <span>Get Consultancy from India's best Astrologer.</span>
//           <span>Get Consultancy from India's best Astrologer.</span>
//           <span>Get Consultancy from India's best Astrologer.</span>
//           <span>Get Consultancy from India's best Astrologer.</span>
//           <span>Get Consultancy from India's best Astrologer.</span>
//           <span>Get Consultancy from India's best Astrologer.</span>
//         </div>
//       </div>
//       <button className="marquee-btn">Consult Now</button>
//     </div>
//   );
// };

// export default Marquee;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Marquee.css";

const Marquee = () => {
  const navigate = useNavigate();

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

  return (
    <div className="marquee-container">
      <div className="marquee-inner">
        {/* PRICE */}
        <div className="marquee-price">
          <span className="old-price">₹1996</span>
          <span className="new-price">₹996</span>
        </div>

        {/* CTA */}
        <button
          className="marquee-btn"
          onClick={() => navigate("/life-journey-report")}
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
