import React from 'react';
import './FreeTools.css';

const FreeTools = () => {
  const tools = [
    {
      title: 'Horoscope',
      icon: '🌟',
      description: 'Daily horoscope predictions',
    },
    {
      title: 'Free Kundli',
      icon: '📜',
      description: 'Generate your birth chart',
    },
    {
      title: 'Kundli Matching',
      icon: '💑',
      description: 'Check compatibility',
    },
  ];

  const zodiacSigns = [
    { name: 'ARIES', symbol: '♈', dates: 'Mar 21 - Apr 19' },
    { name: 'TAURUS', symbol: '♉', dates: 'Apr 20 - May 20' },
    { name: 'GEMINI', symbol: '♊', dates: 'May 21 - Jun 20' },
    { name: 'CANCER', symbol: '♋', dates: 'Jun 21 - Jul 22' },
    { name: 'LEO', symbol: '♌', dates: 'Jul 23 - Aug 22' },
    { name: 'VIRGO', symbol: '♍', dates: 'Aug 23 - Sep 22' },
    { name: 'LIBRA', symbol: '♎', dates: 'Sep 23 - Oct 22' },
    { name: 'SCORPIO', symbol: '♏', dates: 'Oct 23 - Nov 21' },
    { name: 'SAGITTARIUS', symbol: '♐', dates: 'Nov 22 - Dec 21' },
    { name: 'CAPRICORN', symbol: '♑', dates: 'Dec 22 - Jan 19' },
    { name: 'AQUARIUS', symbol: '♒', dates: 'Jan 20 - Feb 18' },
    { name: 'PISCES', symbol: '♓', dates: 'Feb 19 - Mar 20' },
  ];

  return (
    <section className="free-tools">
      <div className="container">
        <h2 className="section-title">Free Tools</h2>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="zodiac-section">
          <h3 className="zodiac-title">
            Click on Your Zodiac Sign to Connect with our Astrologers
          </h3>
          <div className="zodiac-grid">
            {zodiacSigns.map((sign, index) => (
              <div key={index} className="zodiac-card">
                <div className="zodiac-symbol">{sign.symbol}</div>
                <h4>{sign.name}</h4>
                <p>{sign.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTools;
