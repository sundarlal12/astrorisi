import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Marquee from './components/layout/Marquee';
import HomePage from './pages/HomePage';
import ConsultationPage from './pages/ConsultationPage';
import ReportsPage from './pages/ReportsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookPujaPage from './pages/BookPujaPage';
import LifeJourneyReportPage from './pages/LifeJourneyReportPage';
import './App.css';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";


import LifeChangingReportPage from "./pages/LifeChangingReportPage";
 import KundaliMatchingReportPage from "./pages/KundaliMatchingReportPage";
 import LoveReportPage from "./pages/LoveReportPage";
// import NavratriReportPage from "./pages/NavratriReportPage";
// import NameNumberReportPage from "./pages/NameNumberReportPage";
// import VarshphalReportPage from "./pages/VarshphalReportPage";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>

            
            <Route path="/" element={<HomePage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-puja" element={<BookPujaPage />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />


            <Route path="/terms-conditions" element={<TermsConditions />} />
            
            <Route path="/life-journey-report" element={<LifeJourneyReportPage />} />

            <Route path="/life-changing-report" element={<LifeChangingReportPage />} />
         <Route path="/kundali-matching-report" element={<KundaliMatchingReportPage />} />
                <Route path="/love-report" element={<LoveReportPage />} />
            {/*  <Route path="/navratri-report" element={<NavratriReportPage />} />
            <Route path="/name-number-report" element={<NameNumberReportPage />} />
            <Route path="/varshphal-report" element={<VarshphalReportPage />} />
 */}
            

            
          </Routes>
        </main>
        <Footer />
        {/* <Marquee /> */}
      </div>
    </Router>
  );
}

export default App;
