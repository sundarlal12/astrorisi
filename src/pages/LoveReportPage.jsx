import React from "react";
import "./LifeJourneyReportPage.css";
import LifeJourneyHero from "../components/love-report/LifeJourneyHero";
import LifeJourneyFeatures from "../components/love-report/LifeJourneyFeatures";
import LifeJourneyProcess from "../components/love-report/LifeJourneyProcess";
import LifeJourneyTestimonials from "../components/love-report/LifeJourneyTestimonials";
import LifeJourneyFAQ from "../components/love-report/LifeJourneyFAQ";
import LifeJourneyCTA from "../components/love-report/LifeJourneyCTA";
import LifeJourneyReportIncludes from "../components/love-report/LifeJourneyReportIncludes";
import ChooseYourPlan, { plans } from "../components/love-report/ChooseYourPlan";

import LifeJourneyBenefits from "../components/love-report/LifeJourneyBenefits";
import LifeJourneyWhySpecial from "../components/love-report/LifeJourneyWhySpecial";

const lifeJourneyWhySpecialData = {
  label: "THIS REPORT CAN BE LOVE-REPORT FOR YOU",
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
    src: "/src/assets/love-report.jpg",
    alt: "Love Report"
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
      text: "Love Report ने मेरी career direction clear कर दी। Remedies आसान और effective हैं।",
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



// const heroData = {
//   pills: [
//     {
//       text:
//         "Trusted by 2,50,000+ seekers worldwide | 100% Personalised | Secure Delivery",
//       outline: false
//     },
//     {
//       text: "📅 Detailed 5 Years Prediction Included",
//       outline: true
//     }
//   ],

//   title: "Unlock Your",
//   highlightTitle: "Personalised Life Journey Report",

//   author: "By Acharya Sundarr (Vedic Astrologer)",

//   cta: {
//     text: "Get My Report Today",
//     oldPrice: "₹1996",
//     newPrice: "₹999"
//   },

//   stats: [
//     {
//       value: "4.5L+",
//       label: "Report Generated"
//     },
//     {
//       value: "4.8/5",
//       label: "Customer Ratings"
//     },
//     {
//       value: "400K",
//       label: "Trusted Users"
//     }
//   ],

//   image: {
//     src: "/assets/whatsapp_image_2025-12-23_at_3.37.33_pm-DIFJqiYZ.jpeg",
//     alt: "Life Journey Report"
//   }
// };



const heroData = {
  pills: [
    {
      text:
        "A Soulful Love Report by Experienced Vedic Astrology Expert | 100% Personalised | Secure Delivery",
      outline: false
    },
    {
      text: "Available in Hindi/English ",
      outline: true
    }
  ],

  title: "Love –",
  highlightTitle: "A Mystery",

  author: "By Experienced Vedic Astrology Expert",

  cta: {
    text: "Get Your Report Now",
    oldPrice: "",
    newPrice: ""
  },

  stats: [
    {
      value: "The Heart Loves",
      label: "To Chase"
    },
    {
      value: "Decode",
      label: "Secrets of Your Heart"
    },
    {
      value: "Soulful",
      label: "Love Insights"
    }
  ],

  image: {
    src: "/src/assets/love-report.jpg",
    alt: "Love – A Mystery Report"
  }
};


const lifeJourneyFeaturesData = {
  label: "FEATURES",

  title: "What You’ll Discover Inside Your Personalized Love Report",

  features: [
    {
      icon: "user",
      title: "Deeply Personalized Love Analysis",
      description:
        "Your Love Report is created using your precise birth details, examining zodiac signs, planetary positions, and charts to uncover your emotional nature, love tendencies, and relationship behavior.",
      hindi:
        "आपकी जन्म जानकारी के आधार पर प्रेम, स्वभाव और रिश्तों का गहन विश्लेषण"
    },
    {
      icon: "user",
      title: "Simple & Clear Astrology Guidance",
      description:
        "Complex astrological concepts are explained in plain, easy-to-understand language, helping you clearly understand love patterns and relationship dynamics.",
      hindi:
        "सरल भाषा में प्रेम और रिश्तों से जुड़ी ज्योतिषीय जानकारी"
    },
    {
      icon: "search",
      title: "Expert Insights by Acharya LavBhushan",
      description:
        "With years of experience, Acharya LavBhushan provides thoughtful, accurate guidance to help you navigate love, emotions, and relationship decisions wisely.",
      hindi:
        "अनुभवी आचार्य द्वारा प्रेम जीवन पर सटीक मार्गदर्शन"
    },
    {
      icon: "user",
      title: "Practical Remedies & Relationship Advice",
      description:
        "Receive clear remedies and actionable suggestions designed to resolve emotional blocks, strengthen bonds, and create harmony in your love life.",
      hindi:
        "रिश्तों की समस्याओं के समाधान हेतु व्यावहारिक उपाय"
    },
    {
      icon: "user",
      title: "Complete Love Life Insights",
      description:
        "From personality traits and compatibility to future love possibilities, this report offers a complete view of your romantic journey and relationship potential.",
      hindi:
        "प्रेम जीवन, संगतता और भविष्य की संभावनाओं का पूर्ण विवरण"
    },
    {
      icon: "search",
      title: "Clarity, Direction & Emotional Confidence",
      description:
        "Whether you are single, committed, or facing challenges, the Love Report brings clarity, highlights obstacles, and guides you toward a balanced and fulfilling relationship.",
      hindi:
        "प्रेम जीवन में स्पष्टता, आत्मविश्वास और सही दिशा"
    }
  ]
};


// lifeJourneyProcessData.js
export const lifeJourneyProcessData = {
  title: "How Our Love Report Works",

  steps: [
    {
      number: "1",
      icon: "✍️",
      title: "Share Your Birth Information",
      description:
        "जन्म तिथि, समय और स्थान के आधार पर आपकी व्यक्तिगत प्रेम कुंडली तैयार की जाती है"
    },
    {
      number: "2",
      icon: "📊",
      title: "Detailed Astrological Evaluation",
      description:
        "राशि, ग्रहों और कुंडली संरचना का गहन विश्लेषण किया जाता है"
    },
    {
      number: "3",
      icon: "❤️",
      title: "Love & Compatibility Insights",
      description:
        "प्रेम स्वभाव, भावनाएं और पार्टनर संगतता की स्पष्ट जानकारी"
    },
    {
      number: "4",
      icon: "🔮",
      title: "Future Love Predictions",
      description:
        "आने वाले प्रेम अवसरों और रिश्तों से जुड़े महत्वपूर्ण संकेत"
    },
    {
      number: "5",
      icon: "💡",
      title: "Practical Remedies & Guidance",
      description:
        "रिश्तों को मजबूत करने हेतु सरल उपाय, सुझाव और समाधान"
    },
    {
      number: "6",
      icon: "📩",
      title: "Your Personalized Love Report",
      description:
        "स्पष्ट, आसान भाषा में तैयार प्रेम रिपोर्ट ईमेल द्वारा प्राप्त करें"
    }
  ]
};


const LifeJourneyReportPage = () => {
  return (
    <div className="life-journey-report-page">
      {/* <LifeJourneyHero /> */}

      <LifeJourneyHero data={heroData} />

      {/* <LifeJourneyFeatures /> */}

      <LifeJourneyFeatures data={lifeJourneyFeaturesData} />

      {/* <LifeJourneyProcess /> */}

      <LifeJourneyProcess data={lifeJourneyProcessData} />

      <LifeJourneyReportIncludes
 title="This is what you get in the Report"
items={[
  "Personal Love Personality Analysis",
  "Emotional & Relationship Compatibility",
  "Strengths and Weaknesses in Love",
  "Future Love Predictions & Timings",
  "Planetary Influence on Relationships",
  "Romantic Growth & Relationship Yogas",
  "Manglik & Dosha Impact on Love",
  "Relationship Challenges & Remedies",
  "Love Life Phase & Cycle Analysis",
  "Gemstone & Rudraksha Guidance for Love",
  "Auspicious Timings for Relationships & Marriage"
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

export default LifeJourneyReportPage;
