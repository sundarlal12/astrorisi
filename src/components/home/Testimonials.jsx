import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'Rahul Sharma', location: 'Delhi', rating: 5, review: 'AstroRisi has been a life-changing experience for me. The predictions were incredibly accurate and the remedies suggested have brought positive changes in my career. Highly recommended!', date: '2 weeks ago' },
    { name: 'Priya Patel', location: 'Mumbai', rating: 5, review: 'I was skeptical at first, but the consultation exceeded all my expectations. The astrologer understood my concerns deeply and provided practical solutions that actually worked.', date: '1 month ago' },
    { name: 'Amit Kumar', location: 'Bangalore', rating: 5, review: 'The Vastu consultation helped us transform our home energy. We have noticed significant improvements in family harmony and financial stability since implementing the suggestions.', date: '3 weeks ago' },
    { name: 'Sunita Verma', location: 'Jaipur', rating: 5, review: 'The numerology analysis was spot on! It helped me understand my strengths and weaknesses better. The career guidance based on my numbers has been invaluable.', date: '1 month ago' },
    { name: 'Vikram Singh', location: 'Chennai', rating: 5, review: 'Excellent service and very professional approach. The remedies suggested were simple yet effective. My business has seen remarkable growth after following the guidance.', date: '2 months ago' },
    { name: 'Neha Gupta', location: 'Kolkata', rating: 5, review: 'I consulted for marriage compatibility and was impressed by the detailed analysis. The predictions about timing proved to be accurate. Very grateful for the guidance.', date: '3 weeks ago' },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">
          Our <span className="testimonials-accent">Testimonials</span>
        </h2>

        <div className="testimonials-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{
              clickable: true,
              el: '.testimonials-pagination-custom',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{item.review}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {item.name.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{item.name}</h4>
                      <p className="author-location">{item.location}</p>
                    </div>
                    <div className="testimonial-rating">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i}>&#9733;</span>
                      ))}
                    </div>
                  </div>
                  <span className="testimonial-date">{item.date}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials-pagination-custom"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
