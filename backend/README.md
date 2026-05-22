# CloudWaveTech Contact Form Backend API

A professional, production-ready backend API service for routing portfolio contact form submissions directly to your Gmail inbox. Built using Node.js, Express, Nodemailer, and Gmail SMTP.

## Project Structure
```text
backend/
├── server.js        # Main Express server code with SMTP transporter
├── package.json     # Node dependencies & start scripts
├── .env             # Environment variables (credentials)
└── README.md        # Documentation and deployment guide
```

---

## 1. Quick Start & Local Setup

### Installation Commands
If you are initializing from scratch, run the following commands:
```bash
# Initialize npm package settings
npm init -y

# Install required dependencies
npm install express cors nodemailer dotenv
```

### Configuration
1. Create a `.env` file in the `backend/` directory (you can copy `.env.example`).
2. Add your credentials:
   ```env
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

### Start Server
Run the start script to launch the local development server:
```bash
# Start server on local port
npm start
```
The console will log: `[CloudWaveTech Backend] Server successfully running on port 5000`.

---

## 2. Gmail App Password Instructions

To allow the server to securely send emails via Gmail SMTP, you must configure a Google App Password rather than using your main account password.

### Step 1: Enable Google 2-Step Verification
1. Go to your [Google Account Console](https://myaccount.google.com/).
2. Select **Security** from the left navigation menu.
3. Scroll down to the *"How you sign in to Google"* section and select **2-Step Verification**.
4. Follow the on-screen instructions to set it up (requires verification via phone/SMS or Authenticator App).

### Step 2: Generate an App Password
1. Once 2-Step Verification is active, go back to the **Security** page.
2. In the search bar at the top, search for **"App passwords"** (or find it at the bottom of the 2-Step Verification page).
3. If prompted, re-authenticate your identity.
4. Enter a descriptive custom name for the app (e.g., `CloudWaveTech Backend`).
5. Click **Create**.
6. A dialog box will display a **16-character passcode** (e.g., `abcd efgh ijkl mnop`). **Copy this password immediately** (it will not be shown again).

### Step 3: Configure `.env`
Open your `backend/.env` file and input the values:
```env
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=abcdefghijklmnop   # Paste the 16-character passcode (no spaces needed)
```

---

## 3. Frontend Integration

Here is a complete, production-ready React example using standard `fetch()` to send state-driven contact data directly to the `/send` endpoint of the backend.

### React Fetch Integration Code Snippet
```javascript
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // States: 'idle', 'loading', 'success', 'error'
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Quick validation before request
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'An error occurred during submission.');
      }
    } catch (err) {
      console.error('Network Error:', err);
      setStatus('error');
      setErrorMessage('Unable to reach the server. Please check your internet connection.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {status === 'success' && <p className="success-msg">Message Sent Successfully!</p>}
      {status === 'error' && <p className="error-msg">{errorMessage}</p>}
      
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Your Name *" 
        disabled={status === 'loading'}
        required 
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Your Email *" 
        disabled={status === 'loading'}
        required 
      />
      <input 
        type="text" 
        name="subject" 
        value={formData.subject} 
        onChange={handleChange} 
        placeholder="Subject" 
        disabled={status === 'loading'}
      />
      <textarea 
        name="message" 
        value={formData.message} 
        onChange={handleChange} 
        placeholder="Your Message *" 
        disabled={status === 'loading'}
        required
      />
      
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

---

## 4. Deployment Instructions (Render.com)

Render allows you to host web servers and APIs for free with auto-deployment support directly from Git.

### Step 1: Push Backend to GitHub
1. Ensure your repository has your backend code.
2. Important: Make sure your `.env` file is added to your `.gitignore` so your SMTP password is **never** committed.

### Step 2: Create a Web Service on Render
1. Log in to [Render](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository containing the backend directory.
4. Set the following options during configuration:
   - **Name**: `cloudwavetech-backend` (or a name of your choice)
   - **Environment**: `Node`
   - **Region**: Select a region closest to your users
   - **Branch**: `main` (or the branch you deploy from)
   - **Root Directory**: `backend` (very important: since the backend code is stored in the `backend/` folder)
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Select the **Free** tier

### Step 3: Configure Environment Variables on Render
1. Scroll down to the **Advanced** settings or go to the **Environment** tab of the service dashboard once created.
2. Click **Add Environment Variable** and enter the variables corresponding to your local `.env`:
   - `EMAIL_USER` = `your-actual-email@gmail.com`
   - `EMAIL_PASS` = `your-gmail-16-character-app-password`
3. Notice that Render will automatically assign a `PORT` variable. The server code handles this automatically (`process.env.PORT || 5000`).

### Step 4: Deploy and Update Frontend
1. Click **Create Web Service**. Render will build and deploy the app.
2. Once deployed, copy your service's live URL (e.g., `https://cloudwavetech-backend.onrender.com`).
3. Update the `fetch()` URL inside your React client side (`Contact.jsx` component) to point to the live Render URL.
