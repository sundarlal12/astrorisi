// import React from "react";
// import "./LifeJourneyTestimonials.css";

// const testimonials = [
//   {
//     name: "Priya Sharma",
//     location: "Mumbai, Maharashtra",
//     rating: 5,
//     text: "The Life Journey Report gave me incredible clarity about my career path. Within 6 months of following the guidance, I got my dream job. Highly accurate and detailed!",
//     date: "2 weeks ago"
//   },
//   {
//     name: "Rajesh Kumar",
//     location: "Delhi, NCR",
//     rating: 5,
//     text: "Amazing insights into my relationships and marriage timing. Everything mentioned in the report resonated with my life. The remedies suggested are practical and effective.",
//     date: "1 month ago"
//   },
//   {
//     name: "Anjali Mehta",
//     location: "Bangalore, Karnataka",
//     rating: 5,
//     text: "Worth every penny! The financial predictions helped me make better investment decisions. The report is detailed, well-structured, and easy to understand.",
//     date: "3 weeks ago"
//   },
//   {
//     name: "Vikram Singh",
//     location: "Jaipur, Rajasthan",
//     rating: 5,
//     text: "I was skeptical at first, but this report exceeded all expectations. The accuracy of past events and current situation analysis convinced me. Following the guidance for future decisions.",
//     date: "1 week ago"
//   }
// ];

// const LifeJourneyTestimonials = () => {
//   return (
//     <section className="lj-testimonials">
//       <div className="lj-testimonials-container">
//         <div className="lj-testimonials-header">
//           <h2>What Our Customers Say</h2>
//           <p>Join thousands of satisfied customers who transformed their lives</p>
//         </div>

//         <div className="lj-testimonials-grid">
//           {testimonials.map((testimonial, index) => (
//             <div className="lj-testimonial-card" key={index}>
//               <div className="lj-testimonial-rating">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <span key={i}>⭐</span>
//                 ))}
//               </div>
//               <p className="lj-testimonial-text">{testimonial.text}</p>
//               <div className="lj-testimonial-author">
//                 <div className="lj-author-avatar">
//                   {testimonial.name.charAt(0)}
//                 </div>
//                 <div className="lj-author-info">
//                   <h4>{testimonial.name}</h4>
//                   <p>{testimonial.location}</p>
//                   <span className="lj-testimonial-date">{testimonial.date}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifeJourneyTestimonials;


import React, { useState } from "react";
import "./LifeJourneyTestimonials.css";

const LifeJourneyTestimonials = ({ label, title, testimonials, initialCount = 3 }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, initialCount);

  return (
    <section className="lj-testimonials">
      <div className="lj-testimonials-container">
        <div className="lj-testimonials-header">
          <div className="lj-testimonials-icon">❤️</div>
          <span className="lj-testimonials-label">{label}</span>
          <h2>{title}</h2>
        </div>

        <div className="lj-testimonials-grid">
          {visibleTestimonials.map((item, index) => (
            <div className="lj-testimonial-card" key={index}>
              <div className="lj-stars">
                {"★★★★★"}
              </div>

              <p className="lj-testimonial-text">"{item.text}"</p>

              <div className="lj-user">
                <div className="lj-avatar">{item.initials}</div>
                <span className="lj-name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > initialCount && (
          <div className="lj-testimonials-cta">
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less ▲" : "Show More ▼"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LifeJourneyTestimonials;
