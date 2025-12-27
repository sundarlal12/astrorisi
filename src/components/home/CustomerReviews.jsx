import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    { name: 'Rajiv Sharma', title: 'Business Owner', rating: 5, text: 'Amazing live chat with genuine astrologers. The insights provided were spot-on and helped me make important business decisions. The convenience of getting expert advice from home is unmatched.', image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Priya Patel', title: 'IT Professional', rating: 5, text: 'The astrology consultations have been incredibly insightful. I was amazed by the accuracy of the predictions and how well the astrologer understood my situation without me sharing too many details.', image: 'https://images.pexels.com/photos/8129911/pexels-photo-8129911.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Arjun Singh', title: 'Doctor', rating: 5, text: 'Professional service with genuine care for the clients. The astrologers are knowledgeable and they provide practical solutions. I have been using their services for months and always leave satisfied.', image: 'https://images.pexels.com/photos/5792640/pexels-photo-5792640.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Meena Kumari', title: 'Teacher', rating: 5, text: 'The Kundali analysis was extremely detailed and accurate. I got clarity on many aspects of my life that were troubling me. The remedies suggested are easy to follow and effective.', image: 'https://images.pexels.com/photos/7521302/pexels-photo-7521302.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Karan Malhotra', title: 'Entrepreneur', rating: 5, text: 'AstroRisi has been my go-to platform for astrological guidance. The predictions about my startup launch timing were perfect. My business is thriving now thanks to their guidance.', image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Anita Deshmukh', title: 'Homemaker', rating: 5, text: 'The Vastu consultation transformed our home. We were facing constant issues but after implementing the suggested changes, everything improved. Family harmony is much better now.', image: 'https://images.pexels.com/photos/7521304/pexels-photo-7521304.jpeg?auto=compress&cs=tinysrgb&w=300' },
  ];

  return (
    <section className="customer-reviews">
      <div className="container">
        <h2 className="reviews-title">
          Customer <span className="reviews-accent">Reviews</span>
        </h2>

        <div className="reviews-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{
              clickable: true,
              el: '.reviews-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
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
            className="reviews-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="review-header">
                    <img src={review.image} alt={review.name} className="reviewer-image" />
                    <div className="reviewer-info">
                      <h3>{review.name}</h3>
                      <p className="reviewer-title">{review.title}</p>
                    </div>
                  </div>

                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>

                  <p className="review-text">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="reviews-pagination-custom"></div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
