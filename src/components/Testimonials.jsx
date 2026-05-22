import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO at NexaWeb Solutions',
      text: 'CloudWaveTech overhauled our AWS infrastructure and set up auto-scaling. Our monthly AWS bill dropped 35% while application response times cut in half. Highly professional work!',
      initials: 'SJ',
      avatarColor: 'bg-blue-500/10 text-blue-500 border-blue-500/30'
    },
    {
      name: 'David Chen',
      role: 'Founder of SaaSify',
      text: 'The migration of our Node.js app from a basic VPS to a secure AWS VPC was flawless. Zero downtime, database replicas are working perfectly, and staging matches prod identically.',
      initials: 'DC',
      avatarColor: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/30'
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Platform Engineering at FinFlow',
      text: 'Their GitHub Actions CI/CD setup completely automated our QA and production deployments. We no longer deploy manually, and DNS switches happen without any DNS propagation lag.',
      initials: 'ER',
      avatarColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
          Client Feedback
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
          Trusted by Tech Leaders Worldwide
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          See how we help startups and mature products run their cloud hosting operations.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx}
            className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm shadow-md hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between relative text-left"
          >
            {/* Quote Icon overlay */}
            <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-200 dark:text-slate-800/50 -z-10 pointer-events-none" />
            
            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                "{rev.text}"
              </p>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-xs ${rev.avatarColor}`}>
                {rev.initials}
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-white">
                  {rev.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {rev.role}
                </p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
