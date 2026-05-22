import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: 'Cloud Infrastructure',
      skills: [
        { name: 'AWS (VPC, IAM, S3, RDS)', level: 95 },
        { name: 'EC2 Compute Management', level: 95 },
        { name: 'CloudFront CDN Integration', level: 92 },
        { name: 'Route 53 DNS & Failover', level: 90 },
      ]
    },
    {
      title: 'DevOps & Systems',
      skills: [
        { name: 'Linux OS (Ubuntu/CentOS)', level: 90 },
        { name: 'Docker Containerization', level: 88 },
        { name: 'Nginx Web Server Tuning', level: 85 },
        { name: 'GitHub Actions CI/CD Pipelines', level: 88 },
      ]
    },
    {
      title: 'Full Stack Development',
      skills: [
        { name: 'React Frontend App Build', level: 82 },
        { name: 'Node.js Backend Deployments', level: 80 },
        { name: 'MySQL / Database Tuning', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[280px] h-[280px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
          Technical Stack
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
          Tools and Technologies We Master
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Our specialized cloud engineering stack provides speed, reliability, and security for modern web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categories.map((category, catIdx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            key={catIdx}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm shadow-md"
          >
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200/55 dark:border-slate-800/60 pb-3 text-left">
              {category.title}
            </h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-2 text-left">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="w-full bg-slate-200/60 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    {/* Animated Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: skillIdx * 0.1 }}
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
