import React from 'react';
import { Shield, Cpu, RefreshCw, Layers, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const coreCompetencies = [
    {
      title: 'AWS Cloud Expertise',
      description: 'Architecting secure multi-AZ VPC environments, managing EC2 workloads, RDS databases, S3 storage, and Auto Scaling setups.',
      icon: Cpu,
    },
    {
      title: 'Linux Server Administration',
      description: 'Tuning Nginx servers, shell scripting, managing Linux security policies (UFW/fail2ban), cron automation, and performance tuning.',
      icon: Shield,
    },
    {
      title: 'CI/CD Pipelines & Automation',
      description: 'Streamlining application deployment from GitHub directly to cloud environments using GitHub Actions and AWS CodeDeploy.',
      icon: RefreshCw,
    },
    {
      title: 'CDN & Content Delivery',
      description: 'Setting up CloudFront CDN cache policies to deliver media and frontend builds at sub-millisecond latencies worldwide.',
      icon: Layers,
    },
  ];

  const badges = [
    'AWS Solutions Architect',
    'Certified SysOps Administrator',
    'Linux Professional Institute LPIC-1',
    'Terraform Associate Certified'
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative">
      
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: About Text & Badges */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 text-left space-y-6"
        >
          <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
            WHO WE ARE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
            Engineering High-Performance Infrastructure for Global Brands
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            CloudWaveTech is a premium freelancer cloud operations agency. We specialize in designing and deploying cloud systems that are ultra-secure, automated, and cost-optimized.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether migrating an old legacy VPS server, configuring a redundant database cluster, or scaling a React application, we construct pipelines that eliminate downtime.
          </p>

          {/* Badges List */}
          <div className="pt-4 space-y-3">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Certifications & Standards:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {badges.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <Award className="w-4.5 h-4.5 text-blue-500 flex-shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Competency Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {coreCompetencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 text-left"
              >
                <div className="p-3 w-fit rounded-xl bg-blue-500/5 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {comp.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {comp.description}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
