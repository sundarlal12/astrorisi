// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./ReportsHero.css";

// import lifeJourneyImg from "../../assets/whatsapp_image_2025-12-23_at_3.37.33_pm.jpeg";
// import lifeChangingImg from "../../assets/whatsapp_image_2025-12-23_at_3.28.12_pm.jpeg";
// import kundaliMatchingImg from "../../assets/whatsapp_image_2025-12-23_at_3.04.32_pm.jpeg";

// const heroSlides = [
//   {
//     title: "Life Journey Report",
//     desc: "Comprehensive analysis of your life path and destiny",
//     rating: 4.8,
//     reviews: 1250,
//     price: 996,
//     image: lifeJourneyImg,
//     category: "Personal Growth",
//   },
//   {
//     title: "Life Changing Report",
//     desc: "Deep insights into transformative life events",
//     rating: 4.9,
//     reviews: 890,
//     price: 1499,
//     image: lifeChangingImg,
//     category: "Transformation",
//   },
//   {
//     title: "Kundali Matching Report",
//     desc: "Detailed compatibility analysis for marriage",
//     rating: 4.7,
//     reviews: 2100,
//     price: 899,
//     image: kundaliMatchingImg,
//     category: "Relationships",
//   },
// ];

// export default function ReportsHero() {
//   return (
//     <section className="reports-hero">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         loop
//       >
//         {heroSlides.map((slide, i) => (
//           <SwiperSlide key={i}>
//             <div className="hero-slide">
//               <div className="hero-image">
//                 <img src={slide.image} alt={slide.title} />
//               </div>

//               <div className="hero-content">
//                 <div className="hero-badges">
//                   <span className="badge bestseller">⭐ Bestseller</span>
//                   <span className="badge category">{slide.category}</span>
//                 </div>

//                 <h1>{slide.title}</h1>
//                 <p>{slide.desc}</p>

//                 <div className="hero-rating">
//                   ⭐ {slide.rating} ({slide.reviews} reviews)
//                 </div>

//                 <div className="hero-price">₹{slide.price}</div>

//                 <button className="hero-btn">Get Your Report</button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./ReportsHero.css";

// import lifeJourneyImg from "../../assets/whatsapp_image_2025-12-23_at_3.37.33_pm.jpeg";
// import lifeChangingImg from "../../assets/whatsapp_image_2025-12-23_at_3.28.12_pm.jpeg";
// import kundaliMatchingImg from "../../assets/whatsapp_image_2025-12-23_at_3.04.32_pm.jpeg";

// const heroSlides = [
//   {
//     title: "Life Journey Report",
//     desc: "Comprehensive analysis of your life path and destiny",
//     rating: 4.8,
//     reviews: 1250,
//     price: 996,
//     image: lifeJourneyImg,
//     category: "Personal Growth",
//   },
//   {
//     title: "Life Changing Report",
//     desc: "Deep insights into transformative life events",
//     rating: 4.9,
//     reviews: 890,
//     price: 1499,
//     image: lifeChangingImg,
//     category: "Transformation",
//   },
//   {
//     title: "Kundali Matching Report",
//     desc: "Detailed compatibility analysis for marriage",
//     rating: 4.7,
//     reviews: 2100,
//     price: 899,
//     image: kundaliMatchingImg,
//     category: "Relationships",
//   },
// ];

// export default function ReportsHero() {
//   return (
//     <section className="reports-hero">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         loop
//       >
//         {heroSlides.map((slide, i) => (
//           <SwiperSlide key={i}>
//             <div className="hero-slide">
//               <img src={slide.image} alt={slide.title} />

//               <div className="hero-content">
//                 <span className="badge">⭐ Bestseller</span>
//                 <h1>{slide.title}</h1>
//                 <p>{slide.desc}</p>
//                 <div className="rating">
//                   ⭐ {slide.rating} ({slide.reviews} reviews)
//                 </div>
//                 <div className="price">₹{slide.price}</div>
//                 <button>Get Your Report</button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }





import React from "react";
import "./ReportsHero.css";
import lifeChangingImg from "../../assets/whatsapp_image_2025-12-23_at_3.28.12_pm.jpeg";

export default function ReportsHero() {
  return (
    <section className="reports-hero">
      <div className="reports-hero-inner">
        <div className="hero-slide">
          <div className="hero-image">
            <img src={lifeChangingImg} style={{
    width: "400px",
    display: "block",
    opacity: 1,
    visibility: "visible",
    filter: "none",
    position: "relative",
    zIndex: 9999,
    border: "5px solid red",
  }} alt="Life Changing Report" />
          </div>

          <div className="hero-content">
            <span className="badge bestseller">Bestseller</span>
            <span className="badge category">Transformation</span>
            <h1>Life Changing Report</h1>
            <p>Deep insights into transformative life events</p>

            <div className="rating">
              ⭐ 4.9
              <span className="reviews">(890 reviews)</span>
            </div>

            <div className="price-wrapper">
              <span className="price-original">₹2094</span>
              <span className="price-current">₹699</span>
            </div>

            <button className="hero-btn">Get Your Report</button>
          </div>
        </div>
      </div>
    </section>
  );
}

