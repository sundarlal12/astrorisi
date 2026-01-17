// import React, { useState, useEffect } from 'react';
// import './Hero.css';
// import sacredImage1 from '../../assets/whatsapp_image_2025-12-16_at_3.02.33_pm.jpeg';
// import sacredImage2 from '../../assets/whatsapp_image_2025-12-21_at_5.28.35_pm.jpeg';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: sacredImage1,
//       title: "Get one to one",
//       accent: "Consultation",
//       from: "From AstroRisi",
//       stats: "20 Lakh+ Lives Transformed | 10+ Years Experience | India's Most Trusted Astrologer, Numerologist & Vastu Expert.",
//       services: ["Kundali Reports", "Vastu Consultation", "Numerology Analysis"]
//     },
//     {
//       image: sacredImage2,
//       title: "Transform Your Life",
//       accent: "With Ancient Wisdom",
//       from: "From AstroRisi",
//       stats: "Expert Guidance in Vedic Astrology, Numerology & Vastu | Trusted by Thousands | Personalized Solutions for Your Life.",
//       services: ["Birth Chart Analysis", "Marriage Compatibility", "Career Guidance"]
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="hero">
//       <div className="hero-left">
//         <div className="hero-slider">
//           {slides.map((slide, index) => (
//             <img
//               key={index}
//               src={slide.image}
//               alt="AstroRisi Services"
//               className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
//             />
//           ))}
//         </div>
//         <div className="hero-slider-dots">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => setCurrentSlide(index)}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="hero-right">
//         <div className="hero-decorations">
//           <div className="deco-circle-large"></div>
//           <div className="deco-circle-small"></div>
//           <div className="deco-triangle"></div>
//         </div>

//         <div className="hero-text-content">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`hero-content-slide ${index === currentSlide ? 'active' : ''}`}
//             >
//               <h1 className="hero-main-title">{slide.title}</h1>
//               <h2 className="hero-accent-title">{slide.accent}</h2>
//               <p className="hero-from">{slide.from}</p>

//               <p className="hero-stats-text">{slide.stats}</p>

//               <div className="hero-services">
//                 {slide.services.map((service, idx) => (
//                   <div key={idx} className="hero-service-item">
//                     <span className="service-icon">&#9733;</span>
//                     <span>{service}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="hero-book-btn">Book Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

import sacredImage1 from '../../assets/whatsapp_image_2025-12-16_at_3.02.33_pm.jpeg';
import sacredImage2 from '../../assets/whatsapp_image_2025-12-21_at_5.28.35_pm.jpeg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    
    {
      image: sacredImage2,
      title: "Transform Your Life",
      accent: "With Ancient Wisdom",
      from: "From AstroRisi",
      stats:
        "Expert Guidance in Vedic Astrology, Numerology & Vastu | Trusted by Thousands | Personalized Solutions for Your Life.",
      services: [
        "Birth Chart Analysis",
        "Marriage Compatibility",
        "Career Guidance"
      ],
      buttonText: "Get Your Report",
      path: "/reports", // ✅ reports
    },{
      image: sacredImage1,
      title: "Get one to one",
      accent: "Consultation",
      from: "From AstroRisi",
      stats:
        "20 Lakh+ Lives Transformed | 10+ Years Experience | India's Most Trusted Astrologer, Numerologist & Vastu Expert.",
      services: [
        "Kundali Reports",
        "Vastu Consultation",
        "Numerology Analysis"
      ],
      buttonText: "Book Consultation",
      path: "/contact", // ✅ one-to-one consultation
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      {/* LEFT IMAGE SLIDER */}
      <div className="hero-left">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
             alt="Astrorisi – Astrology & Numerology Services"
              className={`hero-slide ${
                index === currentSlide ? 'active' : ''
              }`}
            />
          ))}
        </div>

        <div className="hero-slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${
                index === currentSlide ? 'active' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="hero-right">
        <div className="hero-decorations">
          <div className="deco-circle-large"></div>
          <div className="deco-circle-small"></div>
          <div className="deco-triangle"></div>
        </div>

        <div className="hero-text-content">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-content-slide ${
                index === currentSlide ? 'active' : ''
              }`}
            >
              <h1 className="hero-main-title">{slide.title}</h1>
              <h2 className="hero-accent-title">{slide.accent}</h2>
              <p className="hero-from">{slide.from}</p>

              <p className="hero-stats-text">{slide.stats}</p>

              <div className="hero-services">
                {slide.services.map((service, idx) => (
                  <div key={idx} className="hero-service-item">
                    <span className="service-icon">★</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <button
                className="hero-book-btn"
                onClick={() => navigate(slide.path)}
              >
                {slide.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
