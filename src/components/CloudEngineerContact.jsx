  import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Server, Database, ShieldCheck, CloudLightning, Activity, Clock, ArrowRight, Code } from 'lucide-react';

export default function CloudEngineerContact() {
  const phoneNumber = '916380710952';
  const defaultMessage = 'Hello CloudWaveTech, I need AWS hosting and deployment support.';

  const quickSupports = [
    {
      label: 'Website Development',
      desc: 'React, Next.js, or custom responsive portfolio & business sites.',
      message: 'Hello CloudWaveTech, I am interested in Website Development services ($79 starting package).',
      icon: Code,
      color: 'border-emerald-500/20 hover:border-emerald-500/50 text-emerald-500 shadow-emerald-500/5 hover:shadow-emerald-500/20'
    },
    {
      label: 'Backend Development',
      desc: 'Node.js/Express.js server config, CRUD API & DB integrations.',
      message: 'Hello CloudWaveTech, I am interested in Backend Development services ($49 starting package).',
      icon: Database,
      color: 'border-purple-500/20 hover:border-purple-500/50 text-purple-500 shadow-purple-500/5 hover:shadow-purple-500/20'
    },
    {
      label: 'AWS Hosting Support',
      desc: 'Infrastructure setup, VPC configuration, RDS database, & IAM permissions.',
      message: 'Hello CloudWaveTech, I need AWS hosting support.',
      icon: Database,
      color: 'border-blue-500/20 hover:border-blue-500/50 text-blue-500 shadow-blue-500/5 hover:shadow-blue-500/20'
    },
    {
      label: 'SSL & Domain Setup',
      desc: 'Route53 DNS mapping, CloudFront CDN edge caching, and SSL setup.',
      message: 'Hello CloudWaveTech, I need help with SSL and domain setup on AWS.',
      icon: ShieldCheck,
      color: 'border-cyan-500/20 hover:border-cyan-500/50 text-cyan-500 shadow-cyan-500/5 hover:shadow-cyan-500/20'
    },
    {
      label: 'Deploy Website',
      desc: 'React, Next.js, or HTML static sites on AWS EC2, S3, or Amplify.',
      message: 'Hello CloudWaveTech, I need website deployment support on AWS.',
      icon: Server,
      color: 'border-emerald-500/20 hover:border-emerald-500/50 text-emerald-500 shadow-emerald-500/5 hover:shadow-emerald-500/20'
    }

  ];

  const handleOpenWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cloud-engineer" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Grid Layout (Aligned at items-start for clean top alignment) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Title, Description, Status SLAs */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Live Cloud Console Support
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">
            Talk Directly With a <span className="text-gradient">FullStack Cloud Engineer</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Get fast support for AWS hosting, deployments, Linux servers, CloudFront setup, domains, and production issues. Avoid ticketing queues and chat directly with a dedicated engineer.
          </p>

          {/* Business Status Cards (Equalized Heights) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm flex flex-col justify-between min-h-[95px] h-full">
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mb-1">Freelance Availability</span>
              <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-emerald-400 flex items-center gap-1.5 mt-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for freelance projects
              </span>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm flex flex-col justify-between min-h-[95px] h-full">
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mb-1">Response Time SLA</span>
              <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-blue-500 dark:text-blue-400 flex items-center gap-1.5 mt-auto">
                <Clock className="w-4 h-4" />
                Replies within 10 minutes
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => handleOpenWhatsApp(defaultMessage)}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs md:text-sm tracking-tight transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5" /> Start Consultation Thread
            </button>
          </div>
        </motion.div>

        {/* Right Column: 5 Quick Support Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-4"
        >
          <div className="text-left mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Support Channels</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Click a portal below to initialize your message on WhatsApp automatically.</p>
          </div>

          {/* Grid Container containing all 5 cards for equal and aligned grid spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickSupports.map((item, idx) => {
              const Icon = item.icon;
              const isUrgent = false;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => handleOpenWhatsApp(item.message)}
                  className={`p-5 rounded-2xl border bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group ${
                    isUrgent 
                      ? 'md:col-span-2 bg-gradient-to-r from-rose-500/5 to-red-500/5 hover:from-rose-500/10 hover:to-red-500/10 dark:from-red-950/10 dark:to-rose-950/10' 
                      : ''
                  } ${item.color}`}
                >
                  <div className="space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Bar inside Card */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 flex-shrink-0 ${isUrgent ? 'animate-pulse' : ''}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] uppercase font-bold tracking-widest opacity-60 flex items-center gap-1 transition-colors ${
                          isUrgent ? 'text-rose-500 opacity-100' : 'group-hover:text-emerald-500'
                        }`}>
                          
                        </span>
                      </div>
                      
                      {/* Title & Desc */}
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-2">
                          {item.label}
                          {isUrgent && (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold  text-white animate-pulse"></span>
                          )}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status / CTA */}
                    {/* <div className={`flex items-center gap-1 text-[11px] font-bold mt-2 transition-all transform translate-x-[-4px] group-hover:translate-x-0 ${
                      isUrgent ? 'text-rose-500' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      {isUrgent ? 'Trigger Emergency Channel' : 'Deploy Channel'} <ArrowRight className="w-3 h-3" />
                    </div> */}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
