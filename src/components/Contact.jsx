import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="0.5" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsApp = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.953 11.5.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.46 3.39 1.33 4.887l-.993 3.63 3.77-.969c1.447.78 3.01 1.19 4.59 1.19h.03zM16.91 14.51c-.279-.14-1.65-.815-1.905-.907-.255-.093-.44-.14-.626.14-.185.279-.718.907-.88 1.092-.163.186-.326.21-.605.07-.279-.14-1.18-.435-2.247-1.385-.83-.74-1.39-1.656-1.553-1.935-.163-.28-.018-.43.122-.57.126-.125.279-.325.419-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.07-.14-.627-1.51-.86-2.07-.225-.54-.455-.466-.625-.475-.162-.008-.348-.01-.533-.01-.186 0-.488.07-.743.349-.256.279-.975.953-.975 2.325s1.001 2.7 1.14 2.885c.139.186 1.97 3.01 4.773 4.22.667.288 1.188.46 1.594.59.67.213 1.28.183 1.762.111.538-.08 1.65-.674 1.882-1.325.233-.65.233-1.21.163-1.325-.07-.11-.256-.185-.536-.325z" />
  </svg>
);

import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send`, {
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
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'An error occurred while processing your message.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setErrorMessage('Unable to connect to the contact server. Please ensure the backend is running.');
    }
  };

  const contacts = [
    {
      label: 'Email Address',
      value: 'cloudwavetech33@gmail.com',
      href: 'mailto:cloudwavetech33@gmail.com',
      icon: Mail,
      accent: 'text-blue-500 bg-blue-500/5 border-blue-500/10'
    },
    {
      label: 'WhatsApp Quick Chat',
      value: '+91 63807 10952',
      href: 'https://wa.me/916380710952?text=Hello%20CloudWaveTech%2C%20I%20am%20interested%20in%20your%20services.',
      icon: WhatsApp,
      accent: 'text-emerald-500 bg-emerald-500/5 border-emerald-500/10'
    },
    {
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/sibichakkaravarthi-p-067047375',
      href: 'https://www.linkedin.com/in/sibichakkaravarthi-p-067047375/',
      icon: Linkedin,
      accent: 'text-blue-600 bg-blue-600/5 border-blue-600/10'
    },
    {
      label: 'GitHub Repositories',
      value: 'https://github.com/sibichakkaravarthip',
      href: 'https://github.com/sibichakkaravarthip',
      icon: Github,
      accent: 'text-slate-800 dark:text-slate-200 bg-slate-800/5 dark:bg-slate-200/5 border-slate-800/10 dark:border-slate-200/10'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
          Get In Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
          Let\'s Launch Your Cloud Setup
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Ready to scale? Drop us a line, send an email, or message us directly on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">

        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm shadow-md relative overflow-hidden h-full flex flex-col">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Direct Channels
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Reach out via these platforms for a quicker response, especially regarding urgent server migrations or server downs.
            </p>

            <div className="flex-1 flex flex-col justify-between gap-4">
              {contacts.map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-md min-w-0"
                  >
                    <div className={`p-3 rounded-lg border ${contact.accent} group-hover:scale-105 transition-transform flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">
                        {contact.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-500 transition-colors break-all block">
                        {contact.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm shadow-md relative overflow-hidden h-full flex flex-col">

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
              Send a Message
            </h3>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4 flex-1"
              >
                <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Message Transmitted!</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                  Your inquiry has bypassed the CloudFront cache and safely landed in our inbox. We will contact you within 12 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="AWS Setup Request"
                  />
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col">
                  <label htmlFor="message" className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none flex-1"
                    placeholder="Tell us about your hosting/deployment needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Provisioning Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Deploy Message
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
