// import React, { useState } from "react";
// import "./LifeJourneyFAQ.css";

// const faqs = [
//   {
//     question: "What information do I need to provide?",
//     answer: "You need to provide your date of birth, exact time of birth, and place of birth. Accurate birth time is crucial for precise predictions."
//   },
//   {
//     question: "How long does it take to receive my report?",
//     answer: "Your personalized Life Journey Report will be delivered to your email within 24-48 hours after providing your birth details and completing the payment."
//   },
//   {
//     question: "Can I consult with an astrologer about my report?",
//     answer: "Yes! After receiving your report, you can book a consultation session with our expert astrologers to discuss the findings and get personalized guidance."
//   },
//   {
//     question: "Is my personal information kept confidential?",
//     answer: "Absolutely! We maintain strict confidentiality. Your personal information and birth details are securely stored and never shared with third parties."
//   },
//   {
//     question: "What if I don't know my exact birth time?",
//     answer: "If you don't have exact birth time, we can still prepare a report, but it will be less accurate. We recommend checking with your parents or birth certificate for the most precise reading."
//   },
//   // {
//   //   question: "Can I get a refund if I'm not satisfied?",
//   //   answer: "We offer a 7-day satisfaction guarantee. If you're not satisfied with the report quality, contact us within 7 days for a full refund."
//   // } 
// ];

// const LifeJourneyFAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="lj-faq">
//       <div className="lj-faq-container">
//         <div className="lj-faq-header">
//           <h2>Frequently Asked Questions</h2>
//           <p>Everything you need to know about the Life Journey Report</p>
//         </div>

//         <div className="lj-faq-list">
//           {faqs.map((faq, index) => (
//             <div
//               className={`lj-faq-item ${openIndex === index ? 'active' : ''}`}
//               key={index}
//             >
//               <div
//                 className="lj-faq-question"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <h3>{faq.question}</h3>
//                 <span className="lj-faq-icon">
//                   {openIndex === index ? '−' : '+'}
//                 </span>
//               </div>
//               <div className="lj-faq-answer">
//                 <p>{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifeJourneyFAQ;


import React, { useState } from "react";
import "./LifeJourneyFAQ.css";

const LifeJourneyFAQ = ({ title, faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lj-faq">
      <div className="lj-faq-container">
        <h2 className="lj-faq-title">{title}</h2>

        <div className="lj-faq-list">
          {faqs.map((item, index) => (
            <div
              className={`lj-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="lj-faq-question"
                onClick={() => toggle(index)}
              >
                {item.question}
                <span className="lj-faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="lj-faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeJourneyFAQ;
