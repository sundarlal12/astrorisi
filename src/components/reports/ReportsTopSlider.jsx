

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { useNavigate } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./ReportsTopSlider.css";

// const ReportsTopSlider = ({ reports }) => {
//     const navigate = useNavigate();
//   return (
//     <section className="reports-top-slider">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//       >
//         {reports.map((r, i) => (
//           <SwiperSlide key={i}>
//             <div className="slider-wrapper">
//               {/* LEFT IMAGE */}
//               <div className="slider-image">
//                 <img src={r.image} alt={r.title} />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="slider-content">
//                 <div className="slider-tags">
//                   <span className="tag bestseller">⭐ Bestseller</span>
//                   <span className="tag category">{r.category}</span>
//                 </div>

//                 <h1>{r.title}</h1>
//                 <p className="subtitle">{r.desc}</p>

//                 {/* <div className="rating-row">
//                   ⭐ {r.rating} ({r.reviews} reviews)
//                   <span className="old-price">₹1996</span>
//                   <span className="price">₹{r.price}</span>
//                 </div> */}

//                 <div className="rating-row">
//   <span className="rating-text">
//     ⭐ {r.rating} ({r.reviews} reviews)
//   </span>

//   <span className="price-group">
//     <span className="old-price">₹1996</span>
//     <span className="price">₹{r.price}</span>
//   </span>
// </div>


//                 <button className="cta-btn" onClick={() => navigate(r.path)}>Get Your Report</button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default ReportsTopSlider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { useNavigate } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./ReportsTopSlider.css";

// const ReportsTopSlider = ({ reports }) => {
//     const navigate = useNavigate();
//   return (
//     <section className="reports-top-slider">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//         // Disable manual scrolling/swiping
//         allowTouchMove={false}
//         simulateTouch={false}
//         preventInteractionOnTransition={true}
//       >
//         {reports.map((r, i) => (
//           <SwiperSlide key={i}>
//             <div className="slider-wrapper">
//               {/* LEFT IMAGE */}
//               <div className="slider-image">
//                 <img src={r.image} alt={r.title} />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="slider-content">
//                 <div className="slider-tags">
//                   <span className="tag bestseller">⭐ Bestseller</span>
//                   <span className="tag category">{r.category}</span>
//                 </div>

//                 <h1>{r.title}</h1>
//                 <p className="subtitle">{r.desc}</p>

//                 <div className="rating-row">
//                   <span className="rating-text">
//                     ⭐ {r.rating} ({r.reviews} reviews)
//                   </span>

//                   <span className="price-group">
//                     <span className="old-price">₹1996</span>
//                     <span className="price">₹{r.price}</span>
//                   </span>
//                 </div>

//                 <button className="cta-btn" onClick={() => navigate(r.path)}>Get Your Report</button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default ReportsTopSlider;


import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReportsTopSlider.css";

const ReportsTopSlider = ({ reports }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Completely disable horizontal scroll on body
    document.body.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100vw';
    
    // Disable horizontal scroll on all parent elements
    const disableHorizontalScroll = () => {
      const elements = document.querySelectorAll('body, html, #root, .reports-top-slider, .swiper, .swiper-wrapper');
      elements.forEach(el => {
        if (el) {
          el.style.overflowX = 'hidden';
          el.style.maxWidth = '100vw';
        }
      });
    };
    
    disableHorizontalScroll();
    
    // Cleanup
    return () => {
      document.body.style.overflowX = '';
      document.body.style.maxWidth = '';
    };
  }, []);

  return (
    <section className="reports-top-slider">
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          // Prevent any overflow
          style={{ overflow: 'hidden' }}
        >
          {reports.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="slider-wrapper">
                {/* LEFT IMAGE */}
                <div className="slider-image">
                  <img src={r.image} alt={r.title} />
                </div>

                {/* RIGHT CONTENT */}
                <div className="slider-content">
                  <div className="slider-tags">
                    <span className="tag bestseller">⭐ Bestseller</span>
                    <span className="tag category">{r.category}</span>
                  </div>

                  <h1>{r.title}</h1>
                  <p className="subtitle">{r.desc}</p>

                  <div className="rating-row">
                    <span className="rating-text">
                      ⭐ {r.rating} ({r.reviews} reviews)
                    </span>

                    <span className="price-group">
                      <span className="old-price">₹1996</span>
                      <span className="price">₹{r.price}</span>
                    </span>
                  </div>

                  <button className="cta-btn" onClick={() => navigate(r.path)}>Get Your Report</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReportsTopSlider;