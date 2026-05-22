import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import DashboardVisual from './DashboardVisual';

export default function Hero() {
  const stats = [
    { value: '120+', label: 'AWS Deployments', icon: Server },
    { value: '40%', label: 'Avg Latency Cut', icon: Globe },
    { value: '99.99%', label: 'Uptime SLA', icon: ShieldCheck },
    { value: '5.4 PB', label: 'Data Transferred', icon: Database },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden px-4 md:px-8 max-w-7xl mx-auto z-10">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 dark:bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Cloud className="w-3.5 h-3.5 animate-pulse" />
            AWS Certified Cloud Engineer
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient-white">
            AWS Cloud Hosting & <br />
            <span className="text-gradient">Website Development</span>
          </h1>

          {/* Short Intro */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            We help businesses deploy, secure, and scale applications on AWS cloud infrastructure. 
            Reduce cloud spend, set up lightning-fast CDNs, and establish bulletproof CI/CD pipelines.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#portfolio" 
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-medium transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200/60 dark:border-slate-800/60">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  key={idx} 
                  className="space-y-1"
                >
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
                    <Icon className="w-3.5 h-3.5 text-blue-500" />
                    <span>{s.label}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-sans text-slate-800 dark:text-white">
                    {s.value}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

        {/* Right: Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full lg:max-w-md mx-auto"
        >
          {/* Decorative glowing background */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-20 dark:opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <DashboardVisual />
        </motion.div>

      </div>
    </section>
  );
}
