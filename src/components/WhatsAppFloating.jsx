import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { X, Send, Clock } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const phoneNumber = '916380710952';

  const quickSupports = [
    {
      label: 'Website Development',
      desc: 'React & custom business websites',
      message: 'Hello CloudWaveTech, I am interested in Website Development services ($79 starting package).',
      color: 'from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400'
    },
    {
      label: 'Backend Development',
      desc: 'Node.js, Express & Database APIs',
      message: 'Hello CloudWaveTech, I am interested in Backend Development services ($49 starting package).',
      color: 'from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 border-purple-500/20 hover:border-purple-500/40 text-purple-400'
    },
    {
      label: 'AWS Hosting Support',
      desc: 'EC2, RDS, VPC & IAM configuration',
      message: 'Hello CloudWaveTech, I need AWS hosting support.',
      color: 'from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20 border-blue-500/20 hover:border-blue-500/40 text-blue-400'
    },
    {
      label: 'SSL & Domain Setup',
      desc: 'Route53, CloudFront & SSL certificates',
      message: 'Hello CloudWaveTech, I need help with SSL and domain setup on AWS.',
      color: 'from-cyan-500/10 to-sky-500/10 hover:from-cyan-500/20 hover:to-sky-500/20 border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400'
    },
    {
       label: 'Deploy Website',
      desc: 'React/Next.js/HTML on AWS',
      message: 'Hello CloudWaveTech, I need website deployment support on AWS.',
      color: 'from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400'
    }

  ];

  const handleOpenWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleCustomSend = (e) => {
    e.preventDefault();
    if (!customMessage.trim()) return;
    handleOpenWhatsApp(customMessage);
    setCustomMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Floating Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-4 w-96 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200/10 dark:border-slate-800 bg-white/90 dark:bg-slate-950/80 backdrop-blur-xl shadow-2xl overflow-hidden shadow-emerald-500/5"
          >
            {/* Header */}
            <div className="bg-slate-50/50 dark:bg-slate-900/60 border-b border-slate-200/50 dark:border-slate-800 p-4 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500" />
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <FaWhatsapp className="w-6 h-6 animate-pulse" />
                  </div>
                  {/* Status dot */}
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-950 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white tracking-tight">CloudWaveTech Support</h4>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Available for freelance projects
                    </span>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-blue-500" /> Usually replies within 10 minutes
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Widget Body */}
            <div className="p-4 max-h-[350px] overflow-y-auto space-y-4 text-left">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Talk Directly With a Cloud Engineer</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Get fast support for AWS hosting, deployments, Linux servers, CloudFront setup, domains, and production issues.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="border-t border-slate-100 dark:border-slate-900 pt-3">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Select a Service Desk</p>
                <div className="space-y-2">
                  {quickSupports.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOpenWhatsApp(item.message)}
                      className={`w-full text-left p-2.5 rounded-xl border bg-gradient-to-r ${item.color} hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 transform hover:-translate-x-1 flex items-center justify-between group cursor-pointer`}
                    >
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold">{item.label}</p>
                        <p className="text-[10px] opacity-80 font-medium">{item.desc}</p>
                      </div>
                      <Send className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Input Simulation / Footer */}
            <form onSubmit={handleCustomSend} className="bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-900 p-3 flex gap-2">
              <input
                type="text"
                placeholder="Type custom message..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all hover:scale-105 shadow-md shadow-emerald-500/20 cursor-pointer flex items-center justify-center"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative flex items-center justify-center">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-16 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-slate-950/90 text-emerald-400 text-xs font-semibold whitespace-nowrap shadow-lg shadow-emerald-500/5 backdrop-blur-md mr-1"
            >
              Chat with CloudWaveTech
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse / Ring Effect */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping -z-10" />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          animate={isOpen ? { scale: 0.95 } : { y: [0, -6, 0] }}
          transition={isOpen ? {} : { repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] border cursor-pointer ${
            isOpen 
              ? 'bg-slate-900 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-red-500 hover:text-red-400 shadow-none' 
              : 'bg-emerald-500 hover:bg-emerald-400 border-emerald-400/50'
          }`}
          aria-label="Contact support on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <FaWhatsapp className="w-7 h-7" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
