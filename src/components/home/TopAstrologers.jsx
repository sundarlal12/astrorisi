import React from "react";
import "./TopAstrologers.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const astrologers = [
  {
    name: "Acharya Lavbhushan",
    exp: "15+ yrs",
    consults: "30000+ Consultations",
    lang: "Hindi",
    rating: 5,
    price: "28,000",
    oldPrice: null,
    live: false,
    image: "/img/acharya.png",
  },
  {
    name: "Deepak",
    exp: "10+ yrs",
    consults: "1000+ Consultations",
    lang: "Hindi, English",
    rating: 5,
    price: "2,950",
    oldPrice: "3,950",
    live: true,
    image: "/img/deepak.png",
  },
  {
    name: "Anurag",
    exp: "6+ yrs",
    consults: "1000+ Consultations",
    lang: "Hindi, English",
    rating: 5,
    price: "2,478",
    oldPrice: "3,488",
    live: true,
    image: "/img/anurag.png",
  },
   {
    name: "Anurag",
    exp: "6+ yrs",
    consults: "1000+ Consultations",
    lang: "Hindi, English",
    rating: 5,
    price: "2,478",
    oldPrice: "3,488",
    live: true,
    image: "/img/anurag.png",
  },
  {
    name: "Gautam",
    exp: "6+ yrs",
    consults: "1000+ Consultations",
    lang: "Hindi, English",
    rating: 5,
    price: "2,150",
    oldPrice: "2,770",
    live: true,
    image: "/img/gautam.png",
  },
  {
    name: "Priyanka",
    exp: "5+ yrs",
    consults: "1000+ Consultations",
    lang: "Hindi, English",
    rating: 5,
    price: "1,770",
    oldPrice: "2,770",
    live: false,
    image: "/img/priyanka.png",
  },
];

const TopAstrologers = () => {
  return (
    <section className="top-astro-section">
      <h2 className="section-title">
        Celebrity <span>Astrologers</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={5}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        loop={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        className="astro-swiper"
      >
        {astrologers.map((astro, index) => (
          <SwiperSlide key={index}>
            <div className="astro-card">
              <div className="astro-header">
                {astro.live && <span className="live-badge">● Live</span>}

                <div className="astro-img-wrapper">
                  <img src={astro.image} alt={astro.name} />
                </div>
              </div>

              <div className="astro-body">
                <h3>{astro.name}</h3>

                <div className="rating-row">
                  <span className="stars">{"★".repeat(astro.rating)}</span>
                  <span className="exp">{astro.exp}</span>
                </div>

                <p>✔ {astro.consults}</p>
                <p>🌐 {astro.lang}</p>

                <hr />

                <div className="footer-row">
                  <div>
                    {astro.oldPrice && (
                      <span className="old-price">₹{astro.oldPrice}</span>
                    )}
                    <span className="price">₹{astro.price}</span>
                  </div>

                  <button className="book-btn">Book Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopAstrologers;
