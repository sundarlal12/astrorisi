import React from "react";
import "./LifeJourneyReportPage.css";
import LifeJourneyHero from "../components/kundali-matching/LifeJourneyHero";
import LifeJourneyFeatures from "../components/kundali-matching/LifeJourneyFeatures";
import LifeJourneyProcess from "../components/kundali-matching/LifeJourneyProcess";
import LifeJourneyTestimonials from "../components/kundali-matching/LifeJourneyTestimonials";
import LifeJourneyFAQ from "../components/kundali-matching/LifeJourneyFAQ";
import LifeJourneyCTA from "../components/kundali-matching/LifeJourneyCTA";
import LifeJourneyReportIncludes from "../components/kundali-matching/LifeJourneyReportIncludes";
import ChooseYourPlan, { plans } from "../components/kundali-matching/ChooseYourPlan";

import Marquee from '../components/layout/MarqueeKundli';

import LifeJourneyBenefits from "../components/kundali-matching/LifeJourneyBenefits";
import LifeJourneyWhySpecial from "../components/kundali-matching/LifeJourneyWhySpecial";
const lifeJourneyWhySpecialData = {
  label: "WHY THIS ONLINE KUNDALI MATCHING WORKS FOR YOU",
  title: "What Makes This Kundali Matching Service Reliable",

  points: [
    "Guided by experienced astrologers following time-tested Vedic and compatibility principles.",
    "Uses structured compatibility frameworks to help you understand alignment before marriage.",
    "Designed to deliver clear results quickly without the need for in-person visits.",
    "Accessible online at any time, allowing you to check compatibility from anywhere.",
    "Ensures confidentiality by securely handling personal and birth-related information.",
    "Offers optional expert consultation for deeper clarity when needed.",
    "Provides practical insights that support informed and confident relationship decisions."
  ],

  footerText:
    "This service is more than just a matching tool—it is a thoughtful approach to understanding partnership compatibility. With accurate analysis and expert-backed guidance, it helps you move forward with confidence, clarity, and peace of mind.",

  image: {
    src: "/src/assets/kundli-match-report.jpg",
    alt: "Online Kundali Matching Report"
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


// export const lifeJourneyBenefitsData = {
//   title: "This Report Will Help You Achieve",
//   benefits: [
//     {
//       icon: "📈",
//       title: "Life Clarity",
//       description:
//         "When confusion or indecision holds you back, this report brings clarity, direction, and renewed purpose."
//     },
//     {
//       icon: "⏳",
//       title: "Career Growth",
//       description:
//         "Identify suitable career paths, ideal timing, and remedies to accelerate professional success."
//     },
//     {
//       icon: "💞",
//       title: "Relationship Support",
//       description:
//         "Gain deeper understanding and practical insights to nurture, heal, and strengthen relationships."
//     },
//     {
//       icon: "👶",
//       title: "Parenting Guidance",
//       description:
//         "Understand your child’s natural tendencies, strengths, and future potential for better guidance."
//     },
//     {
//       icon: "🩺",
//       title: "Health Awareness",
//       description:
//         "Discover patterns influencing physical and mental well-being, along with supportive remedies."
//     },
//     {
//       icon: "🧘",
//       title: "Self Discovery",
//       description:
//         "Explore your personality, strengths, challenges, and subconscious patterns for inner growth."
//     }
//   ]
// };


// export const lifeJourneyBenefitsData = {
//   title: "What This Report Enables You To Understand",

//   benefits: [
//     {
//       icon: "📄",
//       title: "Complete Birth Chart Insight",
//       description:
//         "A detailed digital report that explains key astrological factors derived from your birth details, helping you understand life patterns and tendencies."
//     },
//     {
//       icon: "🤝",
//       title: "Partner Compatibility Overview",
//       description:
//         "An in-depth assessment explaining how you and your partner connect emotionally, mentally, and practically."
//     },
//     {
//       icon: "🔢",
//       title: "Compatibility Scoring System",
//       description:
//         "A structured score-based analysis reflecting personality alignment, behavior patterns, and social harmony."
//     },
//     {
//       icon: "🌙",
//       title: "Advanced Chart Interpretations",
//       description:
//         "Insights drawn from multiple charts, including lunar and divisional charts, highlighting important astrological influences."
//     },
//     {
//       icon: "⚠️",
//       title: "Dosha Awareness & Impact",
//       description:
//         "Identification of possible astrological imbalances that may influence marriage, stability, or life decisions."
//     },
//     {
//       icon: "🪐",
//       title: "Planetary Position Analysis",
//       description:
//         "Visual chart-based understanding of planetary placements and how they interact between both individuals."
//     }
//   ]
// };

export const lifeJourneyBenefitsData = {
  title: "Key Understanding You Gain From This Report",

  benefits: [
    {
      icon: "📘",
      title: "Individual Birth Chart Overview",
      description:
        "यह रिपोर्ट आपकी जन्म जानकारी के आधार पर तैयार की जाती है और जीवन से जुड़े महत्वपूर्ण ज्योतिषीय संकेतों को सरल और स्पष्ट रूप में प्रस्तुत करती है।"
    },
    {
      icon: "💞",
      title: "Partner Compatibility Review",
      description:
        "इस भाग में यह समझाया जाता है कि आप और आपका जीवनसाथी भावनात्मक, मानसिक और व्यवहारिक स्तर पर किस प्रकार एक-दूसरे से जुड़ते हैं।"
    },
    {
      icon: "📊",
      title: "Compatibility Score Analysis",
      description:
        "विभिन्न ज्योतिषीय मापदंडों के आधार पर तैयार किया गया स्कोर, जो आपसी तालमेल और संबंधों की मजबूती को दर्शाता है।"
    },
    {
      icon: "🌙",
      title: "Expanded Chart Interpretation",
      description:
        "चंद्र कुंडली सहित अन्य सहायक चार्टों के माध्यम से जीवन को प्रभावित करने वाले प्रमुख तत्वों की विस्तृत जानकारी दी जाती है।"
    },
    {
      icon: "⚠️",
      title: "Dosha Presence Review",
      description:
        "यह खंड उन संभावित दोषों की पहचान करता है जो विवाह, स्थिरता या जीवन के अन्य क्षेत्रों में प्रभाव डाल सकते हैं।"
    },
    {
      icon: "🪐",
      title: "Planetary & Lagna Mapping",
      description:
        "कुंडली में ग्रहों और लग्न की स्थिति को दर्शाने वाले चार्ट, जो दोनों व्यक्तियों के बीच के प्रभाव और संतुलन को समझने में सहायता करते हैं।"
    }
  ]
};


const testimonialsData = {
  label: "TESTIMONIALS",
  title: "Loved by thousands!",
  testimonials: [
    {
      text: "Kundali Matching Report ने मेरी career direction clear कर दी। Remedies आसान और effective हैं।",
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
        "Used by over 1,20,000 couples | Fully Customized Report | Safe & Private",
      outline: false
    },
    {
      text: "📘 Digital Report Delivered Within 2 Working Days",
      outline: true
    }
  ],

  title: "Discover Your",
  highlightTitle: "Compatibility & Marriage Insight Report",

  author: "Prepared by an Experienced Vedic Astrology Expert",

  cta: {
    text: "Check Compatibility Now",
    oldPrice: "₹1996",
    newPrice: "₹618"
  },

  stats: [
    {
      value: "1.2L+",
      label: "Happy Couples"
    },
    {
      value: "4.9/5",
      label: "Average Feedback"
    },
    {
      value: "100%",
      label: "Personalised Reports"
    }
  ],

  image: {
    src: "/src/assets/kundli-match-report1.jpg",
    alt: "Marriage Compatibility Report"
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
      <Marquee />
    </div>
  );
};

export default LifeChangingReportPage;
