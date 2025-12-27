import React, { useState } from 'react';
import './ConsultationPage.css';

const ConsultationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Birth Chart', 'Numerology', 'Vastu', 'Kundli', 'Marriage',
    'Love', 'Career', 'Ask', 'Legal/Court', 'Muhurat', 'Property',
    'Health', 'Education', 'Gemstone', 'Pregnancy', 'Finance'
  ];

  const consultants = [
    { id: 1, name: 'Acharya Sundar', experience: '15+ yrs', consultations: '30000+', languages: 'Hindi', rating: 5, price: '28,000', originalPrice: null, image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: false, category: 'Birth Chart' },
    // { id: 2, name: 'Deepak', experience: '10+ yrs', consultations: '1000+', languages: 'Hindi, English', rating: 5, price: '2,950', originalPrice: '3,950', image: 'https://images.pexels.com/photos/8939661/pexels-photo-8939661.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: true, category: 'Numerology' },
    // { id: 3, name: 'Anurag', experience: '6+ yrs', consultations: '1000+', languages: 'Hindi, English', rating: 5, price: '2,478', originalPrice: '3,480', image: 'https://images.pexels.com/photos/8939664/pexels-photo-8939664.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: true, category: 'Vastu' },
    // { id: 4, name: 'Gautam', experience: '6+ yrs', consultations: '1000+', languages: 'Hindi, English', rating: 4, price: '2,150', originalPrice: '2,770', image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: true, category: 'Kundli' },
     { id: 5, name: 'Priyanka', experience: '5+ yrs', consultations: '1000+', languages: 'Hindi, English', rating: 4, price: '1,770', originalPrice: '2,770', image: 'https://images.pexels.com/photos/7521302/pexels-photo-7521302.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: false, category: 'Marriage' },
    { id: 6, name: 'Tejash', experience: '8+ yrs', consultations: '2500+', languages: 'Hindi', rating: 5, price: '3,500', originalPrice: '4,200', image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: false, category: 'Career' },
 //   { id: 7, name: 'Gyandeep', experience: '12+ yrs', consultations: '5000+', languages: 'Hindi, English', rating: 5, price: '4,500', originalPrice: '5,500', image: 'https://images.pexels.com/photos/8939668/pexels-photo-8939668.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: true, category: 'Love' },
    { id: 8, name: 'Nitin', experience: '7+ yrs', consultations: '1500+', languages: 'Hindi, English', rating: 5, price: '2,200', originalPrice: '3,000', image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: true, category: 'Health' },
    { id: 9, name: 'Govind', experience: '9+ yrs', consultations: '2000+', languages: 'Hindi', rating: 4, price: '2,800', originalPrice: '3,500', image: 'https://images.pexels.com/photos/5792640/pexels-photo-5792640.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: true, category: 'Property' },
    { id: 10, name: 'Ishvarna', experience: '11+ yrs', consultations: '3500+', languages: 'Hindi, English', rating: 5, price: '3,200', originalPrice: '4,000', image: 'https://images.pexels.com/photos/7521304/pexels-photo-7521304.jpeg?auto=compress&cs=tinysrgb&w=300', isLive: false, category: 'Gemstone' },
  ];

  const filteredConsultants = consultants.filter(consultant => {
    const matchesSearch = consultant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         consultant.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || consultant.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="consultation-page">
      <div className="container">
        <div className="filter-section">
          <div className="filter-header">
            <h1>Find Your Perfect Consultant</h1>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by name or expertise.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>

          <div className="filter-divider"></div>

          <div className="category-filter">
            <div className="category-header">
              <span className="filter-label">Filter by Category</span>
              <button className="clear-btn" onClick={clearFilters}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                Clear
              </button>
            </div>
            <div className="category-pills">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="consultants-grid">
          {filteredConsultants.map((consultant) => (
            <div key={consultant.id} className="consultant-card">
              <div className="consultant-image-wrapper">
                {consultant.isLive && (
                  <div className="live-badge">
                    <span className="live-dot"></span>
                    Live
                  </div>
                )}
                <div className="consultant-image">
                  <img src={consultant.image} alt={consultant.name} />
                </div>
              </div>

              <div className="consultant-info">
                <h3 className="consultant-name">{consultant.name}</h3>

                <div className="consultant-meta">
                  <div className="rating-exp">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < consultant.rating ? 'star filled' : 'star'}>
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <span className="experience">{consultant.experience}</span>
                  </div>
                </div>

                <div className="consultant-details">
                  <div className="detail-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>{consultant.consultations} Consultations</span>
                  </div>
                  <div className="detail-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>{consultant.languages}</span>
                  </div>
                </div>

                <div className="consultant-footer">
                  <div className="price-section">
                    {consultant.originalPrice && (
                      <span className="original-price">&#8377;{consultant.originalPrice}</span>
                    )}
                    <span className="current-price">&#8377;{consultant.price}</span>
                  </div>
                  <button className="book-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredConsultants.length === 0 && (
          <div className="no-results">
            <p>No consultants found matching your criteria.</p>
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationPage;
