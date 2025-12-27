// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
// import './OtherServices.css';

// const OtherServices = () => {
//   const services = [
//     {
//       image: 'https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=600',
//       title: 'Learn Occult Science,',
//       titleAccent: 'Build Your Career',
//       titleEnd: 'with AstroRisi',
//       description: 'AstroRisi is your trusted platform for authentic Numerology, Astrology and Vastu guidance in India. Led by expert astrologers, we offer professional horoscope analysis, Vastu consultations, and spiritual mentorship. Whether you\'re starting a new venture or seeking direction, our services empower you to Learn, Earn, and Grow.',
//       cta: 'Explore Our Courses And Join Today For Best Learning.',
//       buttonText: 'Explore Now',
//     },
//     {
//       image: 'https://images.pexels.com/photos/1335732/pexels-photo-1335732.jpeg?auto=compress&cs=tinysrgb&w=600',
//       title: 'Our Commitment to',
//       titleAccent: 'Purity',
//       titleEnd: '',
//       description: 'Unlock the secrets of your future, gain deep insights into your health, and receive powerful, personalized remedies. We are committed to offering products that are 100% pure, natural, and ethically sourced. Every item is carefully selected, energetically cleansed, and tested for authenticity before it reaches you.',
//       cta: '',
//       buttonText: 'Shop Now',
//     },
//     {
//       image: 'https://images.pexels.com/photos/4394104/pexels-photo-4394104.jpeg?auto=compress&cs=tinysrgb&w=600',
//       title: 'Transform Your Life with',
//       titleAccent: 'Personalized Reports',
//       titleEnd: '',
//       description: 'Unlock the secrets of your future, gain deep insights into your health, and receive powerful, personalized remedies - all in one comprehensive report. This unique life-changing guide is designed to help you make better decisions, improve your well-being, and bring clarity to your personal and professional life.',
//       cta: 'Don\'t miss this opportunity to transform your journey.',
//       buttonText: 'Get Your Report',
//     },
//   ];

//   return (
//     <section className="other-services">
//       <div className="container">
//         <h2 className="services-title">
//           Other <span className="services-accent">Services</span>
//         </h2>

//         <div className="services-swiper-container">
//           <Swiper
//             modules={[Pagination, Autoplay, EffectFade]}
//             spaceBetween={30}
//             slidesPerView={1}
//             effect="fade"
//             fadeEffect={{
//               crossFade: true
//             }}
//             pagination={{
//               clickable: true,
//               el: '.services-pagination-custom',
//             }}
//             autoplay={{
//               delay: 6000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             className="services-swiper"
//           >
//             {services.map((service, index) => (
//               <SwiperSlide key={index}>
//                 <div className="service-slide">
//                   <div className="service-image-container">
//                     <img src={service.image} alt={service.title} />
//                   </div>
//                   <div className="service-content">
//                     <h3 className="service-heading">
//                       {service.title} <span className="heading-accent">{service.titleAccent}</span> {service.titleEnd}
//                     </h3>
//                     <p className="service-description">{service.description}</p>
//                     {service.cta && (
//                       <p className="service-cta">{service.cta}</p>
//                     )}
//                     <button className="service-btn">{service.buttonText}</button>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div className="services-pagination-custom"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OtherServices;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './OtherServices.css';

const OtherServices = () => {
  const navigate = useNavigate();

  const services = [
    // {
    //   image:
    //     'https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   title: 'Learn Occult Science,',
    //   titleAccent: 'Build Your Career',
    //   titleEnd: 'with AstroRisi',
    //   description:
    //     "AstroRisi is your trusted platform for authentic Numerology, Astrology and Vastu guidance in India. Led by expert astrologers, we offer professional horoscope analysis, Vastu consultations, and spiritual mentorship. Whether you're starting a new venture or seeking direction, our services empower you to Learn, Earn, and Grow.",
    //   cta: 'Explore Our Courses And Join Today For Best Learning.',
    //   buttonText: 'Explore Now',
    //   path: '/explorer',
    // },
 
    {
      image:
        '/src/assets/kundli-match-report2.jpg',
      title: 'Transform Your Life with',
      titleAccent: 'Personalized Reports',
      titleEnd: '',
      description:
        'Unlock the secrets of your future, gain deep insights into your health, and receive powerful, personalized remedies — all in one comprehensive report. This unique life-changing guide is designed to help you make better decisions, improve your well-being, and bring clarity to your personal and professional life.',
      cta: "Don't miss this opportunity to transform your journey.",
      buttonText: 'Get Your Report',
      path: '/reports',
    },
       {
      image:
    '/src/assets/gems.png',
      title: 'Our Commitment to',
      titleAccent: 'Purity',
      titleEnd: '',
      description:
        'Unlock the secrets of your future, gain deep insights into your health, and receive powerful, personalized remedies. We are committed to offering products that are 100% pure, natural, and ethically sourced. Every item is carefully selected, energetically cleansed, and tested for authenticity before it reaches you.',
      cta: '',
      buttonText: 'Shop Now',
      path: '/shop',
    }
  ];

  return (
    <section className="other-services">
      <div className="container">
        <h2 className="services-title">
          Other <span className="services-accent">Services</span>
        </h2>

        <div className="services-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{
              clickable: true,
              el: '.services-pagination-custom',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-slide">
                  <div className="service-image-container">
                    <img src={service.image} alt={service.title} />
                  </div>

                  <div className="service-content">
                    <h3 className="service-heading">
                      {service.title}{' '}
                      <span className="heading-accent">
                        {service.titleAccent}
                      </span>{' '}
                      {service.titleEnd}
                    </h3>

                    <p className="service-description">
                      {service.description}
                    </p>

                    {service.cta && (
                      <p className="service-cta">{service.cta}</p>
                    )}

                    <button
                      className="service-btn"
                      onClick={() => navigate(service.path)}
                    >
                      {service.buttonText}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="services-pagination-custom"></div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
