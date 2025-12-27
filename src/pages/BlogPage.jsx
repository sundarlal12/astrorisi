import React from 'react';
import './Page.css';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Understanding Your Birth Chart',
      excerpt: 'Learn how to read and interpret the various elements of your Vedic birth chart.',
      date: 'Dec 20, 2025',
    },
    {
      title: 'Planetary Transits in 2025',
      excerpt: 'Important planetary movements and their impact on different zodiac signs.',
      date: 'Dec 18, 2025',
    },
    {
      title: 'The Power of Mantras',
      excerpt: 'Discover how ancient mantras can bring positive changes in your life.',
      date: 'Dec 15, 2025',
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Astrology Blog</h1>
          <p>Insights, guidance, and wisdom from the world of Vedic astrology</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-card">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more">Read More →</button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
