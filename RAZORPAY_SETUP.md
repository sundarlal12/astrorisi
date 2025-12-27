# Razorpay Integration Setup Guide

This guide will help you set up Razorpay payment gateway for the Life Journey Report booking form.

## Step 1: Create Razorpay Account

1. Go to [https://dashboard.razorpay.com/signup](https://dashboard.razorpay.com/signup)
2. Sign up for a free account
3. Complete the KYC process (for production)

## Step 2: Get API Keys

1. Log in to your Razorpay Dashboard
2. Navigate to **Settings** → **API Keys**
3. Click on **Generate Test Key** (for testing) or **Generate Live Key** (for production)
4. Copy your **Key ID** and **Key Secret**

## Step 3: Update the Application

Open `src/components/life-journey/ReportBookingForm.jsx` and replace:

```javascript
key: "YOUR_RAZORPAY_KEY_ID",
```

With your actual Razorpay Key ID:

```javascript
key: "rzp_test_xxxxxxxxxx",  // For testing
// or
key: "rzp_live_xxxxxxxxxx",  // For production
```

## Step 4: Test Payment

1. Run your application
2. Go to the Life Journey Report page
3. Click on any "BUY NOW" button
4. Fill out the form
5. Click "Pay with Razorpay"
6. Use test card details (for test mode):
   - Card Number: `4111 1111 1111 1111`
   - CVV: Any 3 digits
   - Expiry: Any future date

## Step 5: Backend Integration (Optional)

For production, you should verify payments on the backend:

1. Create a backend endpoint to create Razorpay orders
2. Update the form to fetch order_id from backend
3. Verify payment signature on backend after successful payment

### Sample Backend Code (Node.js/Express)

```javascript
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET'
});

// Create Order
app.post('/api/create-order', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100,
    currency: 'INR',
    receipt: 'receipt_' + Date.now()
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify Payment
app.post('/api/verify-payment', (req, res) => {
  const crypto = require('crypto');
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const sign = razorpay_order_id + '|' + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac('sha256', 'YOUR_KEY_SECRET')
    .update(sign.toString())
    .digest('hex');

  if (razorpay_signature === expectedSign) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});
```

## Features Included

- Form validation for all required fields
- Dynamic price calculation based on selected plan and add-ons
- Astro Consultation add-on (+₹2100)
- Express Delivery add-on (+₹149)
- Terms and conditions checkbox
- Full-screen responsive layout with plan details sidebar
- Razorpay payment integration

## Form Fields Collected

- Name
- Email
- WhatsApp Number
- Date of Birth
- Report Language (English/Hindi)
- Selected Plan
- Add-ons (Consultation, Express Delivery)

## Payment Success Handling

When payment is successful, the form:
1. Shows an alert with payment ID
2. Logs form data and payment response to console
3. Closes the full-screen booking form

You can modify the `handler` function in `ReportBookingForm.jsx` to:
- Save data to database
- Send confirmation email
- Redirect to thank you page
- Generate invoice

## Security Notes

- Never expose your Key Secret on the frontend
- Always verify payments on the backend
- Use webhooks for payment status updates
- Store payment records securely
- Implement proper error handling

## Support

For Razorpay support, visit:
- Documentation: https://razorpay.com/docs/
- Support: https://razorpay.com/support/
