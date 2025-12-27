import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'phone') {
      console.log('Phone:', phoneNumber);
    } else {
      console.log('Email:', email);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-header">
          <h2>Login to Continue</h2>
          <p>You will receive a 4 digit code for verification</p>
        </div>

        <div className="modal-tabs">
          <button
            className={`tab-btn ${activeTab === 'phone' ? 'active' : ''}`}
            onClick={() => setActiveTab('phone')}
          >
            Phone Number
          </button>
          <button
            className={`tab-btn ${activeTab === 'email' ? 'active' : ''}`}
            onClick={() => setActiveTab('email')}
          >
            Email
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {activeTab === 'phone' ? (
            <div className="input-group">
              <div className="phone-input">
                <div className="country-code">
                  <span className="flag">🇮🇳</span>
                  <span className="code">+91</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength="10"
                  required
                />
              </div>
            </div>
          ) : (
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
            </div>
          )}

          <button type="submit" className="otp-btn">
            GET OTP
          </button>

          <p className="terms-text">
            By Signing, you agree to our{' '}
            <a href="#" className="terms-link">Terms of Use</a>{' '}
            and{' '}
            <a href="#" className="terms-link">Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
