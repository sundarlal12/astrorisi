import React from "react";
import "./LifeJourneyReportPage.css";
import LifeJourneyHero from "../components/varshphal-report/LifeJourneyHero";
import LifeJourneyFeatures from "../components/varshphal-report/LifeJourneyFeatures";
import LifeJourneyProcess from "../components/varshphal-report/LifeJourneyProcess";
import LifeJourneyTestimonials from "../components/varshphal-report/LifeJourneyTestimonials";
import LifeJourneyFAQ from "../components/varshphal-report/LifeJourneyFAQ";
import LifeJourneyCTA from "../components/varshphal-report/LifeJourneyCTA";
import LifeJourneyReportIncludes from "../components/varshphal-report/LifeJourneyReportIncludes";
import ChooseYourPlan, { plans } from "../components/varshphal-report/ChooseYourPlan";

import Marquee from '../components/layout/MarqueeVarshPhal';

import LifeJourneyBenefits from "../components/varshphal-report/LifeJourneyBenefits";
import LifeJourneyWhySpecial from "../components/varshphal-report/LifeJourneyWhySpecial";
const lifeJourneyWhySpecialData = {
  label: "WHY THIS VARSHPHAL REPORT IS VALUABLE FOR YOU",
  title: "What Makes This Varshphal Report Truly Insightful",

  points: [
    "Prepared using authentic Vedic Varshphal principles with precise planetary calculations.",
    "Provides a complete annual horoscope analysis based on your solar return chart.",
    "Includes clear explanations of planetary positions, houses, ascendant, and key influences.",
    "Offers year-wise predictions for the next five years, covering career, finance, relationships, and personal growth.",
    "Identifies important Yogas and Doshas such as Sade Sati, Kalsarpa Yoga, and Manglik status in a simple manner.",
    "Gives timeline-based guidance to help you recognize favorable periods and cautious phases.",
    "Supports major life decisions like marriage, career change, investments, business, and relocation with clarity."
  ],

  footerText:
    "This Varshphal Report goes beyond predictions—it serves as a practical annual roadmap for your life. With structured insights, timing guidance, and spiritual clarity, it helps you make confident decisions and align your actions for long-term success.",

  image: {
    src: "/src/assets/varshphal-report.jpeg",
    alt: "Personalized Varshphal Astrology Report"
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
  title: "Key Insights You Gain From This Varshphal Report",

  benefits: [
    {
      icon: "📘",
      title: "Personalized Varshphal & Birth Chart Overview",
      description:
        "यह रिपोर्ट आपकी जन्म कुंडली और वर्षफल (Solar Return Chart) के आधार पर तैयार की जाती है, जिससे आने वाले वर्षों के प्रमुख जीवन संकेतों को स्पष्ट रूप से समझा जा सके।"
    },
    {
      icon: "🪐",
      title: "In-Depth Planetary Position Analysis",
      description:
        "इस भाग में ग्रहों की स्थिति, गोचर और उनके प्रभावों का विस्तृत विश्लेषण दिया जाता है, जो करियर, धन और व्यक्तिगत जीवन को प्रभावित करते हैं।"
    },
    {
      icon: "📊",
      title: "5-Year Annual Prediction Framework",
      description:
        "2026 से 2030 तक का वर्ष-वार भविष्यफल, जिसमें प्रत्येक वर्ष के अवसर, चुनौतियाँ और विकास के प्रमुख संकेत शामिल होते हैं।"
    },
    {
      icon: "⚠️",
      title: "Important Yogas & Dosha Identification",
      description:
        "साढ़े साती, कालसर्प योग, मांगलिक दोष और अन्य महत्वपूर्ण योगों की पहचान, साथ ही उनके प्रभावों की सरल व्याख्या।"
    },
    {
      icon: "⏳",
      title: "Timeline-Based Guidance & Caution Periods",
      description:
        "यह रिपोर्ट स्पष्ट रूप से बताती है कि कब समय आपके पक्ष में रहेगा, कब सतर्क रहना आवश्यक है और कब बड़े निर्णय लेना लाभकारी होगा।"
    },
    {
      icon: "🧠",
      title: "Mental, Emotional & Spiritual Clarity",
      description:
        "भविष्यवाणी के साथ-साथ मानसिक संतुलन, भावनात्मक स्थिरता और आध्यात्मिक दिशा प्रदान करने वाला मार्गदर्शन, जिससे आप सही निर्णय ले सकें।"
    }
  ]
};



const testimonialsData = {
  label: "TESTIMONIALS",
  title: "Loved by thousands!",
  testimonials: [
    {
      text: "Varshphal Report ने मेरी career direction clear कर दी। Remedies आसान और effective हैं।",
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
      text: "✨ Vedic Astrology Powerful Predictions | Understand Next 5 Years of Your Life",
      outline: false
    },
    {
      text: "📘 Digital Report Delivered Within 2 Working Days",
      outline: true
    }
  ],

  title: "Your 2026",
  highlightTitle: "Detailed Vedic Life Roadmap",

  author: "A Deep, Insightful & Personalised Prediction Based on Your Birth Chart",

  cta: {
    text: "Get Your Report Now",
    oldPrice: "₹996",
    newPrice: "₹249"
  },

  stats: [
    {
      value: "4.9⭐",
      label: "Rating"
    },
    {
      value: "50K+",
      label: "Reports"
    },
    {
      value: "98%",
      label: "Accuracy"
    }
  ],

  image: {
    src: "/src/assets/varshphal-report.jpeg",
    alt: "2026 Vedic Life Roadmap Report"
  }
};

const lifeJourneyFeaturesData = {
  label: "WHAT YOU’LL RECEIVE",

  title: "Key Insights Included in Your Personalized Numerology Report",

  features: [
    {
      icon: "user",
      title: "Compatibility Score Analysis",
      description:
        "Evaluation of relationship harmony through a multi-point compatibility framework to understand emotional, mental, and physical alignment.",
      hindi:
        "भावनात्मक, मानसिक और शारीरिक सामंजस्य को समझने के लिए बहु-स्तरीय संगति मूल्यांकन"
    },
    {
      icon: "user",
      title: "Stability & Well-being Outlook",
      description:
        "Insights into long-term emotional balance, financial steadiness, and overall relationship sustainability.",
      hindi:
        "दीर्घकालिक भावनात्मक संतुलन, वित्तीय स्थिरता और संबंधों की मजबूती की जानकारी"
    },
    {
      icon: "user",
      title: "Dosha Identification & Solutions",
      description:
        "Recognition of possible energetic or astrological imbalances along with corrective steps for harmony.",
      hindi:
        "संभावित दोषों की पहचान और उन्हें संतुलित करने के प्रभावी उपाय"
    },
    {
      icon: "user",
      title: "Foundation for Married Life",
      description:
        "Guidance focused on building mutual understanding, trust, and long-lasting marital harmony.",
      hindi:
        "आपसी समझ, विश्वास और सुखद वैवाहिक जीवन की मजबूत नींव हेतु मार्गदर्शन"
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
  title="Complete Report Features"
  items={[
    "📊 Varshphal Report - Annual Horoscope Analysis",
    "🔮 Generic Report - Broad Astrological Overview",
    "⭐ Personalised Birth Chart Analysis",
    "📅 5 Years Detailed Future Predictions",
    "💼 Career & Financial Guidance",
    "🏥 Health Predictions & Wellness Tips",
    "💞 Relationship & Marriage Insights",
    "🧭 Long-Term Life Direction",
    "✨ Personalised Remedies & Solutions",
    "📄 Detailed PDF Report Format"
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
      <Marquee />
    </div>
  );
};

export default LifeChangingReportPage;
