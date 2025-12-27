import React, { useState } from "react";
import "./ReportBookingForm.css";

const ReportBookingForm = ({ selectedPlan, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    dob: "",
    language: "english",
    addConsultation: false,
    expressDelivery: false,
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const calculateTotal = () => {
    let total = parseInt(selectedPlan.price.replace(/[^0-9]/g, ""));

    if (formData.addConsultation) {
      total += 2100;
    }

    if (formData.expressDelivery) {
      total += 149;
    }

    return total;
  };

  const getOriginalTotal = () => {
    let total = parseInt(selectedPlan.originalPrice.replace(/[^0-9]/g, ""));

    if (formData.addConsultation) {
      total += 5100;
    }

    if (formData.expressDelivery) {
      total += 299;
    }

    return total;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\d{10}$/.test(formData.whatsapp.replace(/\s/g, ""))) {
      newErrors.whatsapp = "WhatsApp number must be 10 digits";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    const amount = calculateTotal();

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: amount * 100,
      currency: "INR",
      name: "AstroRisi",
      description: selectedPlan.title,
      image: "/src/assets/logo-b6gmqxob.png",
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log("Form Data:", formData);
        console.log("Payment Response:", response);
        onClose();
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.whatsapp
      },
      notes: {
        plan: selectedPlan.title,
        language: formData.language,
        dob: formData.dob,
        addConsultation: formData.addConsultation,
        expressDelivery: formData.expressDelivery
      },
      theme: {
        color: "#7D1F1F"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="booking-fullscreen-overlay">
      <button className="booking-close-btn" onClick={onClose}>
        ×
      </button>

      <div className="booking-fullscreen-container">
        <h1 className="booking-main-title">Book Your Life Changing Report</h1>

        <div className="booking-content-wrapper">
          <div className="booking-plan-display">
            <div className="plan-display-card">
              <div className="plan-display-image">
                <img
                  src="/src/assets/life-changing-report.jpg"
                  alt={selectedPlan.title}
                />
              </div>

              <div className="plan-display-details">
                <h2>{selectedPlan.title}</h2>
                <div className="plan-display-pricing">
                  <span className="plan-display-strikethrough">{selectedPlan.originalPrice}</span>
                  <span className="plan-display-price">{selectedPlan.price}</span>
                </div>

                <div className="plan-display-features">
                  <h3>What's Included:</h3>
                  <ul>
                    {selectedPlan.features.map((feature, i) => (
                      <li key={i}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.6667 5L7.5 14.1667L3.33334 10" stroke="#FFD56A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="plan-display-footer">{selectedPlan.footer}</p>
              </div>
            </div>
          </div>

          <div className="booking-form-display">
            <form className="booking-form" onSubmit={handlePayment}>
              <div className="form-fields-grid">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={errors.whatsapp ? "error" : ""}
                  />
                  {errors.whatsapp && <span className="error-message">{errors.whatsapp}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="dob">Date of Birth *</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder="dd/mm/yyyy"
                    value={formData.dob}
                    onChange={handleChange}
                    className={errors.dob ? "error" : ""}
                  />
                  {errors.dob && <span className="error-message">{errors.dob}</span>}
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="language">Report Language *</label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                  </select>
                </div>
              </div>

              <div className="addon-section">
                <div className="addon-card">
                  <label className="addon-checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="addConsultation"
                      checked={formData.addConsultation}
                      onChange={handleChange}
                    />
                    <div className="addon-text">
                      <h4>Astro Consultation ₹5100 (+₹2100)</h4>
                      <p>Need more clarity? Talk to an astrologer one-on-one.</p>
                    </div>
                  </label>
                  <div className="limited-time-badge">
                    <span>LIMITED TIME</span>
                  </div>
                </div>

                <div className="addon-card">
                  <label className="addon-checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="expressDelivery"
                      checked={formData.expressDelivery}
                      onChange={handleChange}
                    />
                    <div className="addon-text">
                      <h4>Express Delivery (+₹149)</h4>
                      <p>Get priority delivery of report within 24 hours.</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="terms-section">
                <label className="terms-checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <span>
                    I agree to the <a href="/terms" target="_blank">Terms and Conditions</a>
                  </span>
                </label>
                {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
              </div>

              <div className="form-footer-section">
                <div className="final-amount">
                  <span className="final-label">Final Amount:</span>
                  <span className="final-price">₹{calculateTotal()}</span>
                  <span className="final-strikethrough">₹{getOriginalTotal()}</span>
                </div>
                <button type="submit" className="pay-with-razorpay-btn">
                  Pay with Razorpay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportBookingForm;
