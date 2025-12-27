import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReportsHeroCarousel.css";

const ReportsHeroCarousel = ({ reports }) => {
  return (
    <section className="hero-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >
        {reports.map((r, i) => (
          <SwiperSlide key={i}>
            <div className="hero-slide">
              <div className="hero-left">
                <img src={r.image} alt={r.title} />
              </div>

              <div className="hero-right">
                <div className="hero-tags">
                  <span className="tag bestseller">⭐ Bestseller</span>
                  <span className="tag category">{r.category}</span>
                </div>

                <h1>{r.title}</h1>
                <p className="subtitle">{r.desc}</p>

                <div className="rating-row">
                  ⭐ {r.rating} ({r.reviews} reviews)
                  <span className="old-price">₹1996</span>
                  <span className="price">₹{r.price}</span>
                </div>

                <button className="cta-btn">Get Your Report</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReportsHeroCarousel;
