import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import TopAstrologers from '../components/home/TopAstrologers';
import Testimonials from '../components/home/Testimonials';
import CustomerReviews from '../components/home/CustomerReviews';
import FreeTools from '../components/home/FreeTools';
import OtherServices from '../components/home/OtherServices';
import MediaSpotlight from '../components/home/MediaSpotlight';
import BlogSection from '../components/home/BlogSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      {/* <TopAstrologers /> */}
      <Testimonials />
      <CustomerReviews />
      {/* <FreeTools /> */}
      <OtherServices />
      {/* <MediaSpotlight /> 
      <BlogSection /> */}
    </div>
  );
};

export default HomePage;
