import React from 'react';
import './Podcast.css';

const Podcast = () => {
  const podcasts = [
    {
      title: 'Podcast With Expert',
      category: 'BUSINESS INSIGHTS',
      thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600',
      label: 'How to Become a Millionaire',
    },
    {
      title: 'Podcast on Traditions',
      category: 'INSPIRING STORIES',
      thumbnail: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=600',
      label: 'Diwali Celebration Stories',
    },
    {
      title: 'Real Talk Podcast',
      category: 'CANDID CONVERSATIONS',
      thumbnail: 'https://images.pexels.com/photos/7192815/pexels-photo-7192815.jpeg?auto=compress&cs=tinysrgb&w=600',
      label: 'Vashikaran & Black Magic',
    },
  ];

  return (
    <section className="podcast">
      <div className="container">
        <h2 className="section-title">
          Explore <span className="highlight">Podcast</span>
        </h2>

        <div className="podcast-grid">
          {podcasts.map((podcast, index) => (
            <div key={index} className="podcast-card">
              <div className="podcast-thumbnail">
                <img src={podcast.thumbnail} alt={podcast.title} />
                <div className="podcast-overlay">
                  <button className="watch-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                    WATCH NOW
                  </button>
                </div>
                <div className="podcast-label">{podcast.label}</div>
              </div>

              <div className="podcast-info">
                <h3 className="podcast-title">{podcast.title}</h3>
                <p className="podcast-category">{podcast.category}</p>
                <button className="episode-btn">Watch Episode</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcast;
