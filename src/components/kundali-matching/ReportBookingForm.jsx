

// import React, { useState } from "react";
// import "./ReportBookingForm.css";

// const ReportBookingForm = ({ selectedPlan, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     whatsapp: "",
//     language: "english",

//     // Your birth details
//     dob: "",
//     birthTime: "",
//     birthPlace: "",

//     // Partner birth details
//     partnerName: "",
//     partnerDob: "",
//     partnerBirthTime: "",
//     partnerBirthPlace: "",

//     addConsultation: false,
//     expressDelivery: false,
//     agreeTerms: false
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value
//     }));
//   };

//   const calculateTotal = () => {
//     let total = parseInt(selectedPlan.price.replace(/[^0-9]/g, ""));
//     if (formData.addConsultation) total += 2100;
//     if (formData.expressDelivery) total += 149;
//     return total;
//   };

//   const getOriginalTotal = () => {
//     let total = parseInt(selectedPlan.originalPrice.replace(/[^0-9]/g, ""));
//     if (formData.addConsultation) total += 5100;
//     if (formData.expressDelivery) total += 299;
//     return total;
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp is required";
//     if (!formData.dob) newErrors.dob = "Date of birth is required";
//     if (!formData.partnerName.trim())
//       newErrors.partnerName = "Partner name is required";
//     if (!formData.partnerDob)
//       newErrors.partnerDob = "Partner DOB is required";
//     if (!formData.agreeTerms)
//       newErrors.agreeTerms = "Please accept terms";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     onClose(); // Razorpay integration remains same in your project
//   };

//   return (
//     <div className="booking-fullscreen-overlay">
//       <button className="booking-close-btn" onClick={onClose}>×</button>

//       <div className="booking-fullscreen-container">
//         <h1 className="booking-main-title">
//           Book Your Kundli Matching Report
//         </h1>

//         <div className="booking-content-wrapper">
//           {/* LEFT CARD */}
//           <div className="booking-plan-display">
//             <div className="plan-display-card">
//               <div className="plan-display-image">
//                 <img src="/src/assets/kundli-match-report2.jpg" alt={selectedPlan.title} />
//               </div>

//               <div className="plan-display-details">
//                 <h2>{selectedPlan.title}</h2>

//                 <div className="plan-display-pricing">
//                   <span className="plan-display-strikethrough">
//                     {selectedPlan.originalPrice}
//                   </span>
//                   <span className="plan-display-price">
//                     {selectedPlan.price}
//                   </span>
//                 </div>

//                 <div className="plan-display-features">
//                   <h3>What's Included:</h3>
//                   <ul>
//                     {selectedPlan.features.map((f, i) => (
//                       <li key={i}>{f}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div className="booking-form-display">
//             <form className="booking-form" onSubmit={handlePayment}>
//               {/* BASIC INFO */}
//               <div className="form-fields-grid">
//                 <div className="form-group">
//                   <label>Name *</label>
//                   <input
//                     name="name"
//                     placeholder="Enter your name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Email *</label>
//                   <input
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>WhatsApp Number *</label>
//                   <input
//                     name="whatsapp"
//                     placeholder="Enter your WhatsApp number"
//                     value={formData.whatsapp}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Report Language *</label>
//                   <select
//                     name="language"
//                     value={formData.language}
//                     onChange={handleChange}
//                   >
//                     <option value="english">English</option>
//                     <option value="hindi">Hindi</option>
//                   </select>
//                 </div>
//               </div>

//               {/* YOUR BIRTH DETAILS */}
//               <h3 className="form-section-title">Your Birth Details</h3>
//               <div className="form-fields-grid">
//                 <div className="form-group">
//                   <label>Date of Birth *</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     value={formData.dob}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Time of Birth</label>
//                   <input
//                     type="time"
//                     name="birthTime"
//                     value={formData.birthTime}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group form-group-full">
//                   <label>Place of Birth</label>
//                   <input
//                     name="birthPlace"
//                     placeholder="City, State, Country"
//                     value={formData.birthPlace}
//                     onChange={handleChange}
//                   /> 
//                 </div>
//               </div>

//               {/* PARTNER DETAILS */}
//               <h3 className="form-section-title" style={{ color: "#ffffff" }}>
//                 Partner's Birth Details
//               </h3>

//               <div className="form-fields-grid">
//                 <div className="form-group">
//                   <label>Name *</label>
//                   <input
//                     name="partnerName"
//                     placeholder="Enter partner's name"
//                     value={formData.partnerName}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Date of Birth *</label>
//                   <input
//                     type="date"
//                     name="partnerDob"
//                     value={formData.partnerDob}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Time of Birth</label>
//                   <input
//                     type="time"
//                     name="partnerBirthTime"
//                     value={formData.partnerBirthTime}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group form-group-full">
//                   <label>Place of Birth</label>
//                   <input
//                     name="partnerBirthPlace"
//                     placeholder="City, State, Country"
//                     value={formData.partnerBirthPlace}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* ADDONS */}
//               <div className="addon-section">
//                 <div className="addon-card">
//                   <label className="addon-checkbox-wrapper">
//                     <input
//                       type="checkbox"
//                       name="addConsultation"
//                       checked={formData.addConsultation}
//                       onChange={handleChange}
//                     />
//                     <div className="addon-text">
//                       <h4>Astro Consultation ₹5100 (+₹2100)</h4>
//                       <p>Talk to astrologer one-on-one</p>
//                     </div>
//                   </label>
//                 </div>

//                 <div className="addon-card">
//                   <label className="addon-checkbox-wrapper">
//                     <input
//                       type="checkbox"
//                       name="expressDelivery"
//                       checked={formData.expressDelivery}
//                       onChange={handleChange}
//                     />
//                     <div className="addon-text">
//                       <h4>Express Delivery (+₹149)</h4>
//                       <p>Priority delivery within 24 hours</p>
//                     </div>
//                   </label>
//                 </div>
//               </div>

//               {/* FOOTER */}
//               <div className="terms-section">
//                 <label className="terms-checkbox-wrapper">
//                   <input
//                     type="checkbox"
//                     name="agreeTerms"
//                     checked={formData.agreeTerms}
//                     onChange={handleChange}
//                   />
//                   <span>I agree to the Terms and Conditions</span>
//                 </label>
//               </div>

//               <div className="form-footer-section">
//                 <div className="final-amount">
//                   <span className="final-label">Final Amount:</span>
//                   <span className="final-price">₹{calculateTotal()}</span>
//                   <span className="final-strikethrough">
//                     ₹{getOriginalTotal()}
//                   </span>
//                 </div>

//                 <button className="pay-with-razorpay-btn">
//                   Pay with Razorpay
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportBookingForm;







import React, { useState } from "react";
import "./ReportBookingForm.css";
import { supabase } from "../../lib/supabase";

const ReportBookingForm = ({ selectedPlan, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    language: "english",

    // Your birth details
    dob: "",
    birthTime: "",
    birthPlace: "",

    // Partner birth details
    partnerName: "",
    partnerDob: "",
    partnerBirthTime: "",
    partnerBirthPlace: "",

    addConsultation: false,
    expressDelivery: false,
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [bookingId, setBookingId] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const calculateTotal = () => {
    let total = parseInt(selectedPlan.price.replace(/[^0-9]/g, ""));
    if (formData.addConsultation) total += 2100;
    if (formData.expressDelivery) total += 149;
    return total;
  };

  const getOriginalTotal = () => {
    let total = parseInt(selectedPlan.originalPrice.replace(/[^0-9]/g, ""));
    if (formData.addConsultation) total += 5100;
    if (formData.expressDelivery) total += 299;
    return total;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.partnerName.trim())
      newErrors.partnerName = "Partner name is required";
    if (!formData.partnerDob)
      newErrors.partnerDob = "Partner DOB is required";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "Please accept terms";

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
    if (!validateForm()) return;

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    const amount = calculateTotal();

    try {
      const bookingData = {
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        dob: formData.dob,
        language: formData.language,
        plan_title: selectedPlan.title,
        plan_price: parseInt(selectedPlan.price.replace(/[^0-9]/g, "")),
        add_consultation: formData.addConsultation,
        express_delivery: formData.expressDelivery,
        total_amount: amount,
        payment_status: "pending"
      };

      const { data, error } = await supabase
        .from("bookings")
        .insert([bookingData])
        .select();

      if (error) {
        console.error("Error saving booking:", error);
        alert("Failed to save booking. Please try again.");
        return;
      }

      const booking = data[0];
      const currentBookingId = booking.id;
      setBookingId(currentBookingId);

      const options = {
        key: "rzp_live_RxYS86uZQlGyUA",
        amount: amount * 100,
        currency: "INR",
        name: "AstroRisi",
        description: selectedPlan.title,
        image: "/src/assets/logo-b6gmqxob.png",
        handler: async function (response) {
          try {
            const { error: updateError } = await supabase
              .from('bookings')
              .update({
                payment_status: 'succeeded',
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id || null,
                razorpay_signature: response.razorpay_signature || null,
                updated_at: new Date().toISOString()
              })
              .eq('id', currentBookingId);

            if (updateError) {
              console.error('Error updating payment status:', updateError);
            }

            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            console.log("Booking ID:", currentBookingId);
            console.log("Form Data:", formData);
            console.log("Payment Response:", response);
            onClose();
          } catch (error) {
            console.error('Error in payment handler:', error);
            alert('Payment successful but failed to update status. Please contact support.');
          }
        },
        modal: {
          ondismiss: async function() {
            try {
              const { error: updateError } = await supabase
                .from('bookings')
                .update({
                  payment_status: 'failed',
                  updated_at: new Date().toISOString()
                })
                .eq('id', currentBookingId);

              if (updateError) {
                console.error('Error updating payment status on dismiss:', updateError);
              }
              console.log('Payment modal closed - marked as failed');
            } catch (error) {
              console.error('Error in modal dismiss handler:', error);
            }
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.whatsapp
        },
        notes: {
          booking_id: currentBookingId,
          plan: selectedPlan.title,
          language: formData.language,
          dob: formData.dob,
          partner_name: formData.partnerName,
          partner_dob: formData.partnerDob,
          addConsultation: formData.addConsultation,
          expressDelivery: formData.expressDelivery
        },
        theme: {
          color: "#7D1F1F"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="booking-fullscreen-overlay">
      <button className="booking-close-btn" onClick={onClose}>×</button>

      <div className="booking-fullscreen-container">
        <h1 className="booking-main-title">
          Book Your Kundli Matching Report
        </h1>

        <div className="booking-content-wrapper">
          {/* LEFT CARD */}
          <div className="booking-plan-display">
            <div className="plan-display-card">
              <div className="plan-display-image">
                <img src={selectedPlan.image} alt={selectedPlan.title} />
              </div>

              <div className="plan-display-details">
                <h2>{selectedPlan.title}</h2>

                <div className="plan-display-pricing">
                  <span className="plan-display-strikethrough">
                    {selectedPlan.originalPrice}
                  </span>
                  <span className="plan-display-price">
                    {selectedPlan.price}
                  </span>
                </div>

                <div className="plan-display-features">
                  <h3>What's Included:</h3>
                  <ul>
                    {selectedPlan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="booking-form-display">
            <form className="booking-form" onSubmit={handlePayment}>
              {/* BASIC INFO */}
              <div className="form-fields-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>WhatsApp Number *</label>
                  <input
                    name="whatsapp"
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Report Language *</label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                  </select>
                </div>
              </div>

              {/* YOUR BIRTH DETAILS */}
              <h3 className="form-section-title">Your Birth Details</h3>
              <div className="form-fields-grid">
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Time of Birth</label>
                  <input
                    type="time"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group form-group-full">
                  <label>Place of Birth</label>
                  <input
                    name="birthPlace"
                    placeholder="City, State, Country"
                    value={formData.birthPlace}
                    onChange={handleChange}
                  /> 
                </div>
              </div>

              {/* PARTNER DETAILS */}
              <h3 className="form-section-title" style={{ color: "#ffffff" }}>
                Partner's Birth Details
              </h3>

              <div className="form-fields-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    name="partnerName"
                    placeholder="Enter partner's name"
                    value={formData.partnerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    name="partnerDob"
                    value={formData.partnerDob}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Time of Birth</label>
                  <input
                    type="time"
                    name="partnerBirthTime"
                    value={formData.partnerBirthTime}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group form-group-full">
                  <label>Place of Birth</label>
                  <input
                    name="partnerBirthPlace"
                    placeholder="City, State, Country"
                    value={formData.partnerBirthPlace}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* ADDONS */}
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
                      <p>Talk to astrologer one-on-one</p>
                    </div>
                  </label>
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
                      <p>Priority delivery within 24 hours</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* FOOTER */}
              <div className="terms-section">
                <label className="terms-checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <span>I agree to the Terms and Conditions</span>
                </label>
              </div>

              <div className="form-footer-section">
                <div className="final-amount">
                  <span className="final-label">Final Amount:</span>
                  <span className="final-price">₹{calculateTotal()}</span>
                  <span className="final-strikethrough">
                    ₹{getOriginalTotal()}
                  </span>
                </div>

                <button className="pay-with-razorpay-btn">
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
