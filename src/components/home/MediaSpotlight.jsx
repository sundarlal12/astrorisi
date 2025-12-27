import React from 'react';
import './MediaSpotlight.css';

const MediaSpotlight = () => {
  const mediaLogos = [
    { name: 'Rajasthan TV', logo: 'https://via.placeholder.com/150x80?text=Rajasthan+TV' },
    { name: 'Dainik Bhaskar', logo: 'https://via.placeholder.com/150x80?text=Dainik+Bhaskar' },
    { name: 'Rajasthan Patrika', logo: 'https://via.placeholder.com/150x80?text=Rajasthan+Patrika' },
    { name: 'News 18', logo: 'https://via.placeholder.com/150x80?text=News+18' },
    { name: 'Big FM', logo: 'https://via.placeholder.com/150x80?text=Big+FM' },
    { name: 'Zee Punjabi', logo: 'https://via.placeholder.com/150x80?text=Zee+Punjabi' },
  ];

  return (
    <section className="media-spotlight">
      <div className="container">
        <h2 className="section-title">Media Spotlight</h2>
        <p className="section-subtitle">Featured On</p>

        <div className="media-grid">
          {mediaLogos.map((media, index) => (
            <div key={index} className="media-card">
              <img src={media.logo} alt={media.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSpotlight;
