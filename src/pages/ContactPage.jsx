// import React from 'react';
// import './Page.css';

// const ContactPage = () => {
//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <div className="container">
//           <h1>Contact Us</h1>
//           <p>Get in touch with us for any queries or support</p>
//         </div>
//       </div>

//       <div className="container">
//         <div className="page-content">
//           <div className="contact-grid">
//             <div className="contact-info">
//               <h2>Get In Touch</h2>
//               <p>
//                 We're here to help you with any questions about our services,
//                 consultations, or astrology guidance.
//               </p>

//               <div className="contact-details">
//                 <div className="contact-item">
//                   <h3>Email</h3>
//                   <a href="mailto:info@astrorisi.in">info@astrorisi.in</a>
//                 </div>

//                 <div className="contact-item">
//                   <h3>Website</h3>
//                   <a href="https://astrorisi.in" target="_blank" rel="noopener noreferrer">
//                     astrorisi.in
//                   </a>
//                 </div>

//                 <div className="contact-item">
//                   <h3>Working Hours</h3>
//                   <p>Monday - Sunday: 9:00 AM - 9:00 PM IST</p>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-form">
//               <h2>Send Us a Message</h2>
//               <form>
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <input type="text" id="name" placeholder="Your name" />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input type="email" id="email" placeholder="your@email.com" />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="message">Message</label>
//                   <textarea id="message" rows="5" placeholder="Your message"></textarea>
//                 </div>

//                 <button type="submit" className="submit-btn">Send Message</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


// import React from "react";
// import "./ContactPage.css";

// const ContactPage = () => {
//   return (
//     // <section className="contact-page">
//     //   <div className="contact-wrapper">

//     //     {/* LEFT : FORM */}
//     //     <div className="contact-form-card">
//     //       <h2>Send a Message</h2>

//     //       <form>
//     //         <div className="form-group">
//     //           <label>Name *</label>
//     //           <input type="text" placeholder="Your name" />
//     //           <span className="error-text">Name is required</span>
//     //         </div>

//     //         <div className="form-group">
//     //           <label>Email *</label>
//     //           <input type="email" placeholder="your.email@example.com" />
//     //         </div>

//     //         <div className="form-row">
//     //           <div className="form-group">
//     //             <label>Phone</label>
//     //             <input type="text" placeholder="+91 XXXXX XXXXX" />
//     //           </div>

//     //           <div className="form-group">
//     //             <label>Subject *</label>
//     //             <select>
//     //               <option>Select</option>
//     //               <option>Consultation</option>
//     //               <option>Report Query</option>
//     //               <option>Payment Issue</option>
//     //               <option>Other</option>
//     //             </select>
//     //           </div>
//     //         </div>

//     //         <div className="form-group">
//     //           <label>Message *</label>
//     //           <textarea rows="4" placeholder="Your message..."></textarea>
//     //         </div>

//     //         <button className="submit-btn">Send Message</button>
//     //       </form>
//     //     </div>

//     //     {/* RIGHT : INFO */}
//     //     <div className="contact-info-column">
//     //       <div className="contact-info-card">
//     //         <h3>Contact Information</h3>

//     //         <div className="info-item">
//     //           <span>📧</span>
//     //           <div>
//     //             <strong>Email</strong>
//     //             <p>info@astrorisi.in</p>
//     //           </div>
//     //         </div>

//     //         <div className="info-item">
//     //           <span>📞</span>
//     //           <div>
//     //             <strong>Website & Consultation</strong>
//     //             <p>www.atsrorisi.in</p>
//     //           </div>
//     //         </div>

//       <div className="contact-page">
//       <div className="contact-wrapper">
//         {/* LEFT FORM */}
//         <div className="contact-form-card">
//           <h2>Send a Message</h2>

//           <form>
//             <div className="form-group">
//               <label>
//                 Name <span>*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="error"
//               />
//               <small className="error-text">Name is required</small>
//             </div>

//             <div className="form-group">
//               <label>
//                 Email <span>*</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="your.email@example.com"
//               />
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Phone</label>
//                 <input type="text" placeholder="+91 XXXXX" />
//               </div>

//               <div className="form-group">
//                 <label>
//                   Subject <span>*</span>
//                 </label>
//                 <select>
//                   <option>Select</option>
//                   <option>Report Query</option>
//                   <option>Consultation</option>
//                   <option>Payment</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>
//                 Message <span>*</span>
//               </label>
//               <textarea rows="5" placeholder="Your message..." />
//             </div>

//             <button type="submit" className="send-btn">
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* RIGHT INFO */}
//         <div className="contact-info-card">
//           <h3>Contact Information</h3>

//           <div className="info-item">
//             <strong>Email</strong>
//             <p>info@astrorisi.in</p>
//           </div>

//           <div className="info-item">
//             <strong>Address</strong>
//             <p>
//               House No. 8, HSR Layout, 24 Minor Road,<br />
//               Bengaluru – 560102, India
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

//             {/* <div className="info-item">
//               <span>📞</span>
//               <div>
//                 <strong>Reports Support</strong>
//                 <p>+91 91193 07066</p>
//               </div>
//             </div> */}

//             <div className="info-item">
//               <span>📍</span>
//               <div>
//                 <strong>Office</strong>
//                 <p>
//                    House No. 8, HSR Layout, 24 Minor Road, Bengaluru – 560102, India
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="follow-card">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <span>f</span>
//               <span>📸</span>
//               <span>in</span>
//               <span>▶</span>
//               <span>🐦</span>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* MAP */}
//       <div className="map-section">
//         <h3>📍 Location</h3>
//         <iframe
//           title="AstroRisi Location"
//           src="https://www.google.com/maps?q=Jagatpura%20Jaipur&output=embed"
//           loading="lazy"
//         ></iframe>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;



import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-wrapper">

        {/* LEFT : FORM */}
        <div className="contact-form-card">
          <h2>Send a Message</h2>

          <form>
            <div className="form-group">
              <label>Name *</label>
              <input type="text" placeholder="Your name" />
              <span className="error-text">Name is required</span>
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="your.email@example.com" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="text" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <select>
                  <option>Select</option>
                  <option>Consultation</option>
                  <option>Report Query</option>
                  <option>Payment Issue</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea rows="4" placeholder="Your message..."></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT : INFO */}
        <div className="contact-info-column">

          <div className="contact-info-card">
            <h3>Contact Information</h3>

            <div className="info-item">
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>info@astrorisi.in</p>
              </div>
            </div>

            <div className="info-item">
              <span>🌐</span>
              <div>
                <strong>Website</strong>
                <p>www.astrorisi.in</p>
              </div>
            </div>

            <div className="info-item">
              <span>📍</span>
              <div>
                <strong>Office</strong>
                <p>
                  House No. 8, HSR Layout, 24 Minor Road,
                  Bengaluru – 560102, India
                </p>
              </div>
            </div>
          </div>

          <div className="follow-card">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <span>f</span>
              <span>📸</span>
              <span>in</span>
              <span>▶</span>
              <span>🐦</span>
            </div>
          </div>

        </div>
      </div>

      {/* MAP (ONLY THING UPDATED WITH API KEY) */}
      <div className="map-section">
        <h3>📍 Location</h3>
        <iframe
          title="AstroRisi Location"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBmEP5a5at63KESOSjFAO_R8vTW6VzuuqA&q=House+No.+8,+HSR+Layout,+24+Minor+Road,+Bengaluru,+560102"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
