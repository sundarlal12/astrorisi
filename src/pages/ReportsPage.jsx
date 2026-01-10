import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ReportsPage.css";
import ReportsHero from "../components/home/ReportsHero";


import ReportsTopSlider from "../components/reports/ReportsTopSlider";
//import ReportsHeroCarousel from "../components/reports/ReportsHeroCarousel";



import lifeJourneyImg from "../assets/life-journey-report.jpg";
import lifeChangingImg from "../assets/life-changing-report.jpg";
import kundaliMatchingImg from "../assets/kundli-match-report1.jpg";
import LoverReportImg from "../assets/love-report.jpg";

 


const reports = [
  {
    title: "Life Journey Report",
    desc: "Comprehensive analysis of your life path and destiny",
    rating: 4.8,
    reviews: 1250,
    price: 996,
    image: lifeJourneyImg,
    category: "Personal Growth",
    path: "/life-journey-report",
  },
  {
    title: "Life Changing Report",
    desc: "Deep insights into transformative life events",
    rating: 4.9,
    reviews: 750,
    price: 699,
    image: lifeChangingImg,
    category: "Transformation",
    path: "/life-changing-report",
  },
  {
    title: "Kundali Matching Report",
    desc: "Detailed compatibility analysis for marriage",
    rating: 4.7,
    reviews: 1990,
    price: 618,
    image: kundaliMatchingImg,
    category: "Relationships",
    path: "/kundali-matching-report",
  },
  {
    title: "Love Report",
    desc: "Insights into love, relationships & compatibility",
    rating: 4.6,
    reviews: 1592,
    price: 399,
    image: LoverReportImg,
    category: "Relationships",
    path: "/love-report",
   },
   {
    title: "Varshphal Report",
    desc: "Numerological analysis of your Year",
    rating: 4.9,
    reviews: 1500,
    price: 249,
    image: LoverReportImg,
    category: "Transformation",
    path: "/varshphal-report",
   },
  // {
  //   title: "Navratri Report",
  //   desc: "Special Navratri guidance & spiritual remedies",
  //   rating: 4.5,
  //   reviews: 540,
  //   price: 699,
  //   image: lifeJourneyImg,
  //   category: "Special Offer",
  //   path: "/navratri-report",
  // },
  // {
  //   title: "Name Number Report",
  //   desc: "Name numerology & success alignment analysis",
  //   rating: 4.7,
  //   reviews: 980,
  //   price: 599,
  //   image: lifeChangingImg,
  //   category: "Personal Growth",
  //   path: "/name-number-report",
  // },
  // {
  //   title: "Varshphal Report",
  //   desc: "Complete yearly prediction & guidance",
  //   rating: 4.8,
  //   reviews: 1120,
  //   price: 899,
  //   image: lifeJourneyImg,
  //   category: "Personal Growth",
  //   path: "/varshphal-report",
  // },
];


const categories = ["All", "Newly Launched", "Personal Growth", "Relationships", "Special Offer", "Transformation"];

const ReportsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");


  const navigate = useNavigate();

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || report.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
     
    <div className="reports-page">
      {/* <ReportsHero /> */}
  <ReportsTopSlider reports={reports.slice(0, 4)} />
 {/* <ReportsHeroCarousel reports={reports} /> */}

      <div className="reports-layout">
        <aside className="reports-filters">
          <h3>Filters</h3>

          <div className="filter-group">
            <h4>Categories</h4>
            <ul>
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h4>Sort By</h4>
            <select>
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </aside>

        <main className="reports-content">
          <div className="search-bar">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <h2>All Reports ({filteredReports.length} reports)</h2>

          <div className="reports-grid">
            {filteredReports.map((r, i) => (
              <div className="report-card" key={i}>
                <div className="report-image">
                  <span className="badge bestseller">⭐ Bestseller</span>
                  <img src={r.image} alt={r.title} />
                </div>

                <div className="report-body">
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>

                  <div className="rating">
                    ⭐ {r.rating} ({r.reviews})
                  </div>

                  <div className="report-footer">
                    <span className="price">₹{r.price}</span>
                    {/* <button>View Details</button> */}
                    <button onClick={() => navigate(r.path)}>
  View Details
</button>

                  </div>
                </div>



                
              </div>
      
            ))}
          </div>
        </main>
      </div>
    </div>
      
  );
};

export default ReportsPage;
