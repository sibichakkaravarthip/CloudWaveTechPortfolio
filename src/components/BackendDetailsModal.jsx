import React from 'react';
import { X, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackendDetailsModal({ isOpen, onClose }) {
  const services = [
    'Node.js backend setup',
    'Database connection',
    'Contact form backend',
    'Login & authentication',
    'CRUD operations',
    'API integration',
    'Backend deployment support',
  ];

  const tags = ['Node.js', 'Express.js', 'MySQL', 'REST API'];

  const handleWhatsAppClick = () => {
    const phoneNumber = '916380710952';
    const text = 'Hello! I am interested in your Backend Development services ($49 starting package).';
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            className="relative w-full max-w-lg bg-slate-900/90 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.25)] rounded-3xl p-8 backdrop-blur-xl text-left text-white z-10 overflow-hidden"
          >
            {/* Top Glowing Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-xl bg-slate-950/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800/80 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 mb-1.5">
                Backend Development
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Simple backend solutions for websites and web applications.
              </p>
              
            </div>

            {/* Pricing Section */}
            <div className="flex items-baseline gap-2 mb-6 border-b border-slate-800 pb-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Starting from</span>
              <span className="text-3xl font-extrabold text-cyan-400">$49</span>
            </div>

            {/* Services Checklist */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                Services Included:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                    <div className="p-0.5 rounded-full bg-cyan-500/10 text-cyan-400 mt-0.5 border border-cyan-500/20">
                      <Check className="w-3 h-3 flex-shrink-0" />
                    </div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology tags */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                Technology Tags:
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800/80 px-3 py-1 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 py-3 px-4 rounded-xl border border-emerald-500/30 hover:border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Contact</span>
              </button>
              
              <a
                href="#contact"
                onClick={() => {
                  onClose();
                  // Give slight delay to wait for modal fade out
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 text-xs font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
