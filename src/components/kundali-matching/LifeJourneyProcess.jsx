// import React from "react";
// import "./LifeJourneyProcess.css";

// const steps = [
//   {
//     number: "01",
//     title: "Enter Your Details",
//     description: "Provide your birth date, time, and place for accurate calculations"
//   },
//   {
//     number: "02",
//     title: "Expert Analysis",
//     description: "Our experienced astrologers analyze your chart using Vedic methods"
//   },
//   {
//     number: "03",
//     title: "Report Generation",
//     description: "Comprehensive report created with detailed insights and predictions"
//   },
//   {
//     number: "04",
//     title: "Receive Your Report",
//     description: "Get your personalized PDF report within 24-48 hours via email"
//   }
// ];

// const LifeJourneyProcess = () => {
//   return (
//     <section className="lj-process">
//       <div className="lj-process-container">
//         <div className="lj-process-header">
//           <h2>How It Works</h2>
//           <p>Get your personalized life journey report in 4 simple steps</p>
//         </div>

//         <div className="lj-process-steps">
//           {steps.map((step, index) => (
//             <div className="lj-process-step" key={index}>
//               <div className="lj-step-number">{step.number}</div>
//               <div className="lj-step-content">
//                 <h3>{step.title}</h3>
//                 <p>{step.description}</p>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className="lj-step-connector"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifeJourneyProcess;



import React from "react";
import "./LifeJourneyProcess.css";

const LifeJourneyProcess = ({ data }) => {
  const { title, steps } = data;

  return (
    <section className="lj-process">
      <h2 className="lj-process-title">{title}</h2>

      <div className="lj-process-grid">
        {steps.map((step, index) => (
          <div className="lj-process-card" key={index}>
            <span className="lj-step-badge">{step.number}</span>

            <div className="lj-step-icon">{step.icon}</div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeJourneyProcess;
