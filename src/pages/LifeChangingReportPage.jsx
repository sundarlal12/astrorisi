import React from "react";
import "./LifeJourneyReportPage.css";
import LifeJourneyHero from "../components/life-changing/LifeJourneyHero";
import LifeJourneyFeatures from "../components/life-changing/LifeJourneyFeatures";
import LifeJourneyProcess from "../components/life-changing/LifeJourneyProcess";
import LifeJourneyTestimonials from "../components/life-changing/LifeJourneyTestimonials";
import LifeJourneyFAQ from "../components/life-changing/LifeJourneyFAQ";
import LifeJourneyCTA from "../components/life-changing/LifeJourneyCTA";
import LifeJourneyReportIncludes from "../components/life-changing/LifeJourneyReportIncludes";
import ChooseYourPlan, { plans } from "../components/life-changing/ChooseYourPlan";

import LifeJourneyBenefits from "../components/life-changing/LifeJourneyBenefits";
import LifeJourneyWhySpecial from "../components/life-changing/LifeJourneyWhySpecial";

const lifeJourneyWhySpecialData = {
  label: "THIS REPORT CAN BE LIFE-CHANGING FOR YOU",
  title: "Here is Why It’s So Special",

  points: [
    "Rooted in authentic Vedic numerology and traditional astrological principles.",
    "Helps you anticipate opportunities and challenges so you can plan with confidence.",
    "Supports emotional balance by offering practical remedies to reduce stress and anxiety.",
    "Delivers guidance tailored specifically to your unique numbers and birth details.",
    "Encourages deeper self-understanding by highlighting strengths and improvement areas.",
    "Brings clarity in important life areas such as health, career, finances, and relationships.",
    "Trusted by thousands of seekers across India and internationally."
  ],

  footerText:
    "Think of this report as more than a purchase—it’s an investment in clarity and personal growth. The insights you receive can help you take better decisions, stay aligned with your goals, and move forward with confidence.",

  image: {
    src: "/src/assets/life-changing-report.jpg",
    alt: "Life Changing Numerology Report"
  }
};




const lifeJourneyFAQData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question:
        "What details are required to generate my personalised report?",
      answer:
        "We only need your full name, date of birth, time of birth, and place of birth. These core details help our experts calculate accurate numbers and craft guidance aligned specifically to you."
    },
    {
      question: "How soon will I receive my report?",
      answer:
        "After submitting your information, our team analyses your data and prepares a professionally designed PDF. Most reports are delivered within 24–48 hours, often sooner."
    },
    {
      question: "Is my personal information kept confidential?",
      answer:
        "Yes, absolutely. Your information is securely processed and used solely for preparing your report. It is never shared with third parties and is automatically removed from our systems after delivery."
    },
    {
      question: "What can I expect inside the report?",
      answer:
        "Your report includes a deep analysis of strengths and challenges, future trends, career and relationship insights, health guidance, personalised remedies, name and number alignment tips, and additional supportive recommendations."
    },
    {
      question: "Who prepares and reviews the report?",
      answer:
        "Each report is prepared by our experienced in-house team and reviewed under the guidance of senior experts to ensure accuracy, clarity, and meaningful insights."
    }
  ]
};


export const lifeJourneyBenefitsData = {
  title: "This Report Will Help You Achieve",
  benefits: [
    {
      icon: "📈",
      title: "Life Clarity",
      description:
        "When confusion or indecision holds you back, this report brings clarity, direction, and renewed purpose."
    },
    {
      icon: "⏳",
      title: "Career Growth",
      description:
        "Identify suitable career paths, ideal timing, and remedies to accelerate professional success."
    },
    {
      icon: "💞",
      title: "Relationship Support",
      description:
        "Gain deeper understanding and practical insights to nurture, heal, and strengthen relationships."
    },
    {
      icon: "👶",
      title: "Parenting Guidance",
      description:
        "Understand your child’s natural tendencies, strengths, and future potential for better guidance."
    },
    {
      icon: "🩺",
      title: "Health Awareness",
      description:
        "Discover patterns influencing physical and mental well-being, along with supportive remedies."
    },
    {
      icon: "🧘",
      title: "Self Discovery",
      description:
        "Explore your personality, strengths, challenges, and subconscious patterns for inner growth."
    }
  ]
};



const testimonialsData = {
  label: "TESTIMONIALS",
  title: "Loved by thousands!",
  testimonials: [
    {
      text: "Life Changing Report ने मेरी career direction clear कर दी। Remedies आसान और effective हैं।",
      name: "Ritu Sharma",
      initials: "RS"
    },
    {
      text: "Marriage decisions में clarity मिली। Report detailed और accurate थी।",
      name: "Anil Verma",
      initials: "AV"
    },
    {
      text: "Financial stability के लिए जो solutions दिए, उन्होंने सच में काम किया।",
      name: "Meena Kapoor",
      initials: "MK"
    },
    {
      text: "Career और health दोनों पर सही guidance मिली।",
      name: "Sanjay Mehta",
      initials: "SM"
    },
    {
      text: "Remedies follow करना आसान था और असर जल्दी दिखा।",
      name: "Priya Malhotra",
      initials: "PM"
    },
    {
      text: "Report ने life में positivity और balance लाया।",
      name: "Aarti Kumar",
      initials: "AK"
    }
  ]
};



const heroData = {
  pills: [
    {
      text:
        "Trusted by 2,50,000+ seekers worldwide | 100% Personalised | Secure Delivery",
      outline: false
    },
    {
      text: "📅 Detailed 5 Years Prediction Included",
      outline: true
    }
  ],

  title: "Unlock Your",
  highlightTitle: "Personalised Life Changing Report",

  author: "By Acharya Sundarr (Vedic Astrologer)",

  cta: {
    text: "Get My Report Today",
    oldPrice: "₹1996",
    newPrice: "₹999"
  },

  stats: [
    {
      value: "10L+",
      label: "Report Generated"
    },
    {
      value: "4.8/5",
      label: "Customer Ratings"
    },
    {
      value: "700K",
      label: "Trusted Users"
    }
  ],

  image: {
    src: "/src/assets/life-changing-report.jpg",
    alt: "Life Changing Report"
  }
};

const lifeJourneyFeaturesData = {
  label: "WHAT YOU’LL RECEIVE",

  title: "Key Insights Included in Your Personalized Numerology Report",

  features: [
    {
      icon: "user",
      title: "Core Numbers Interpretation",
      description:
        "Calculation and explanation of your Life Path, Destiny, Soul Desire, and Personality numbers based on your birth date and name.",
      hindi:
        "जन्म-तिथि और नाम के आधार पर मूलांक, भाग्यांक, आत्मा अंक और व्यक्तित्व अंक की विस्तृत गणना"
    },
    {
      icon: "gem",
      title: "Strengths & Growth Areas",
      description:
        "A deep look into your natural talents, behavioral patterns, inner strengths, and areas that need improvement.",
      hindi:
        "अंकों के अनुसार आपकी खूबियाँ, स्वभाव, चुनौतियाँ और विकास के अवसर"
    },
    {
      icon: "eyw",
      title: "Career & Relationship Direction",
      description:
        "Guidance on suitable career paths, partnerships, and family relationships aligned with your core numbers.",
      hindi:
        "मूलांक व भाग्यांक के आधार पर करियर, साझेदारी और पारिवारिक संबंधों का मार्गदर्शन"
    },
    {
      icon: "seacrh",
      title: "Favourable Numbers, Days & Colours",
      description:
        "Personal recommendations for lucky numbers, supportive days, and beneficial colours.",
      hindi:
        "आपके लिए अनुकूल अंक, शुभ दिन और लाभकारी रंगों की जानकारी"
    },
    {
      icon: "edit",
      title: "Name Alignment Suggestions",
      description:
        "Numerology-based evaluation of your name with optional spelling or letter adjustment recommendations.",
      hindi:
        "नाम अंकज्योतिष विश्लेषण और आवश्यक होने पर सुधार संबंधी सुझाव"
    },
    {
      icon: "user",
      title: "Simple & Practical Remedies",
      description:
        "Easy-to-follow remedies such as mantras, meditation practices, gemstones, or crystals to restore balance.",
      hindi:
        "संतुलन के लिए सरल और प्रभावी उपाय – मंत्र, रत्न, रुद्राक्ष या क्रिस्टल"
    }
  ]
};




// lifeJourneyProcessData.js

export const lifeJourneyProcessData = {
  title: "Here Is Exactly How It Works",
  steps: [
    {
      number: "1",
      icon: "✍️",
      title: "Input Your Birth Details",
      description: "तिथि, समय और जन्मस्थान"
    },
    {
      number: "2",
      icon: "📊",
      title: "Accurate Planetary Mapping",
      description: "आपकी कुंडली के अनुसार ग्रहों की स्थिति"
    },
    {
      number: "3",
      icon: "💡",
      title: "Astrological Interpretation",
      description: "दशा, गोचर, भाव और योग का विश्लेषण"
    },
    {
      number: "4",
      icon: "❤️",
      title: "Actionable Remedies",
      description: "व्यक्तिगत ग्रह दोषों के लिए उपाय"
    },
    {
      number: "5",
      icon: "📩",
      title: "Personalised Report Delivery",
      description: "आपके ईमेल पर सम्पूर्ण रिपोर्ट"
    }
  ]
};


const LifeChangingReportPage = () => {
  return (
    <div className="life-changing-report-page">
      {/* <LifeJourneyHero /> */}

      <LifeJourneyHero data={heroData} />

      {/* <LifeJourneyFeatures /> */}

      <LifeJourneyFeatures data={lifeJourneyFeaturesData} />

      {/* <LifeJourneyProcess /> */}

      <LifeJourneyProcess data={lifeJourneyProcessData} />

      <LifeJourneyReportIncludes
  title="This is what you get in the Report"
 items={[
  "Birth Chart Overview",
  "Core Number Dynamics",
  "Date of Birth Number Impact",
  "Balance Correction Solutions",
  "Personal Energy Enhancers",
  "Mobile Number Energy Check",
  "Traits, Yogas & Vitality",
  "Career and Life Path Outlook",
  "Identity, Growth & Connections"
]}

/>
 <ChooseYourPlan
        title="Choose Your Plan"
        subtitle="Select the report that best fits your needs."
        plans={plans}
      />
      
      {/* <LifeJourneyTestimonials /> */}
      <LifeJourneyTestimonials {...testimonialsData} />

      <LifeJourneyBenefits {...lifeJourneyBenefitsData} />
      
      {/* <LifeJourneyFAQ /> */}


      <LifeJourneyWhySpecial data={lifeJourneyWhySpecialData} />
      
      <LifeJourneyFAQ {...lifeJourneyFAQData} />
 
      {/* <LifeJourneyCTA /> */}
    </div>
  );
};

export default LifeChangingReportPage;
