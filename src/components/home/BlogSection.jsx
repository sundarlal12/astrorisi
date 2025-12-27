import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Best Gemstones for Career Growth: Choose by Zodiac Sign',
      excerpt:
        'Are you looking to boost your career prospects and achieve professional success? According to Vedic astrology, wearing the right gemstone aligned with your zodiac sign can help enhance your career growth...',
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'नरक चतुर्दशी (छोटी दिवाली) – भीतर का प्रकाश जगाने का दिन',
      excerpt:
        'नरक चतुर्दशी, जिसे छोटी दिवाली भी कहा जाता है, दीपावली से एक दिन पहले मनाई जाती है। यह दिन उस क्षण की याद दिलाता है जब भगवान श्रीकृष्ण ने नरकासुर नामक राक्षस का वध किया...',
      image: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Rahu & Ketu Remedies: Gemstones, Mantras & Rituals That Work',
      excerpt:
        'In Vedic astrology, Rahu and Ketu are known as shadow planets. They don\'t have physical form like other planets, but they have a powerful influence on our lives. When Rahu or Ketu are placed unfavorably...',
      image: 'https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Our Blogs</h2>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <article key={index} className="blog-card-home">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <button className="read-more">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
