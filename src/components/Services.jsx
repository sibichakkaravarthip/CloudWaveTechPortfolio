import React from 'react';
import { 
  Server, Globe, Layers, Lock, 
  Zap, GitFork, Terminal, RefreshCw 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services({ openBackendModal }) {
  const serviceList = [
    {
      title: 'AWS EC2 Hosting',
      description: 'Provisioning optimal EC2 instances, EBS volumes, and security groups. Fine-tuning server resources for your application workload.',
      icon: Server,
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Static Website Hosting',
      description: 'Deploying React, Vue, HTML, or Astro sites on AWS S3, configured with custom domains, bucket security, and fast edge loading.',
      icon: Globe,
      accent: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Full Stack Deployment',
      description: 'Deploying Node.js, Python, or PHP backends alongside frontend projects using AWS Elastic Beanstalk, ECS Docker containers, or EC2.',
      icon: Layers,
      accent: 'from-purple-500 to-pink-500',
    },
    {
      title: 'SSL & Domain Configuration',
      description: 'Route 53 DNS zone management, domain configuration, and automated renewals of SSL certificates via ACM or Let\'s Encrypt.',
      icon: Lock,
      accent: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'CloudFront CDN Setup',
      description: 'Setting up global CloudFront caching, custom behaviors, custom response headers, and DDoS protection via AWS Shield.',
      icon: Zap,
      accent: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Load Balancing & Auto Scaling',
      description: 'Configuring Application Load Balancers (ALB) and Auto Scaling Groups (ASG) to auto-adjust server capacity to traffic spikes.',
      icon: GitFork,
      accent: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Linux Server Administration',
      description: 'Installing and security-hardening Ubuntu or Debian servers, Nginx configurations, cron schedules, logs analysis, and backup scripts.',
      icon: Terminal,
      accent: 'from-slate-600 to-slate-800',
    },
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Constructing robust pipelines using GitHub Actions, GitLab CI, or Jenkins for continuous code testing and instant deployments.',
      icon: RefreshCw,
      accent: 'from-red-500 to-rose-500',
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
          Core Services
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
          Reliable Cloud Solutions Tailored to Your Stack
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Professional infrastructure services to ensure your apps are fast, securely isolated, and highly available.
        </p>
      </div>

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {serviceList.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              variants={cardVariants}
              key={idx}
              className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
            >
              {/* Top corner gradient glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full`} />
              
              <div>
                {/* Icon box */}
                <div className={`p-3 w-fit rounded-xl bg-gradient-to-br ${service.accent} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.title === 'Full Stack Deployment' && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openBackendModal();
                    }}
                    className="mb-6 px-3.5 py-1.5 rounded-lg border border-blue-500/30 hover:border-blue-500 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 dark:text-blue-400 hover:text-white transition-all text-xs font-bold w-fit cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Backend Details</span>
                  </button>
                )}
              </div>

              {/* Decorative line */}
              <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.accent} transition-all duration-500 rounded-full`} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
