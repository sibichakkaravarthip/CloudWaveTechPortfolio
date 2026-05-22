import React from 'react';
import { Check, Server, Zap, Code, Terminal, Info, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing({ openBackendModal }) {
  const plans = [
    {
      name: 'Basic Hosting',
      icon: Server,
      price: '$19',
      unit: 'starting price',
      command: 'aws s3 sync ./dist s3://bucket',
      region: 'us-east-1 (Free Tier Ready)',
      description: 'Ideal for portfolio websites, static websites, and simple business landing pages.',
      features: [
        'EC2 website hosting',
        'Domain connection',
        'SSL certificate setup',
        'Nginx basic configuration',
        'Static website deployment',
        'Basic support',
      ],
      techTags: ['AWS EC2', 'Nginx', 'SSL', 'DNS'],
      popular: false,
      cta: 'Get Started',
      accentColor: 'from-blue-500 to-cyan-400',
      glowColor: 'rgba(59, 130, 246, 0.15)',
    },
    {
      name: 'Standard Deployment',
      icon: Zap,
      price: '$39',
      unit: 'starting price',
      command: 'git push origin main # auto-deploy',
      region: 'us-east-1 | VPC Enabled',
      description: 'Ideal for React applications and beginner full stack projects.',
      features: [
        'React frontend deployment',
        'Backend hosting',
        'Database connection',
        'Domain setup',
        'SSL setup',
        'Basic server configuration',
        'Full stack deployment support',
      ],
      techTags: ['React', 'Node.js', 'RDS SQL', 'VPS/VPC'],
      popular: true,
      cta: 'Deploy Now',
      accentColor: 'from-blue-600 via-cyan-500 to-indigo-500',
      glowColor: 'rgba(34, 211, 238, 0.35)',
    },
    {
      name: 'Website Development',
      icon: Code,
      price: '$79',
      unit: 'starting price',
      command: 'npx create-react-app portfolio',
      region: 'CDN Optimized Routing',
      description: 'Ideal for startups, freelancers, and small business websites.',
      features: [
        'Responsive website design',
        'React frontend',
        'Contact form integration',
        'Modern UI design',
        'Mobile responsive layout',
        'Website deployment included',
        'Basic SEO setup',
      ],
      techTags: ['React', 'Tailwind', 'Figma UX', 'SEO Setup'],
      popular: false,
      cta: 'Build Website',
      accentColor: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(59, 130, 246, 0.15)',
    },
  ];

  return (
    <section id="pricing" className="py-28 px-4 md:px-8 relative overflow-hidden bg-slate-950 text-white border-t border-slate-900">

      {/* Immersive Dark Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span>PRICING PLANS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-100 leading-tight">
          Flexible & Transparent Pricing
        </h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
          Affordable, beginner-friendly cloud services and website packages tailored for startups, freelancers, and small projects.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto relative z-10 px-2 md:px-0">
        {plans.map((plan, idx) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="w-full flex"
            >
              {/* Gentle Floating Motion Wrapper */}
              <motion.div
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 1.5
                }}
                className="w-full flex"
              >
                {/* Glow/Scale Hover Card Wrapper */}
                <motion.div
                  whileHover={{
                    scale: plan.popular ? 1.05 : 1.02,
                    y: -4,
                    boxShadow: `0 20px 40px ${plan.glowColor}`
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className={`w-full flex flex-col justify-between rounded-3xl backdrop-blur-lg relative overflow-hidden transition-all duration-300 ${plan.popular
                      ? 'p-[1.5px] bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_30px_rgba(59,130,246,0.25)] lg:scale-105 z-10'
                      : 'border border-slate-800 bg-slate-950/65'
                    }`}
                >

                  {/* Card Content Outer (only applies wrapper inner background if popular card) */}
                  <div className={`flex flex-col justify-between h-full w-full rounded-[22px] p-8 text-left ${plan.popular ? 'bg-slate-950' : ''
                    }`}>

                    {/* Glowing Accent lines inside popular card */}
                    {plan.popular && (
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75" />
                    )}

                    <div>
                      {/* Card Header & AWS Terminal decoration */}
                      <div className="flex items-center justify-between mb-5">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${plan.accentColor} text-white shadow-lg shadow-blue-500/10`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        {plan.popular ? (
                          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/25 px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                            Most Popular
                          </span>
                        ) : (
                          <span className="text-[9px] font-semibold text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Cloud Tier
                          </span>
                        )}
                      </div>

                      {/* Mock AWS CLI Command line decoration */}
                      <div className="mb-4 bg-slate-900/80 rounded-lg p-2.5 border border-slate-800/80 font-mono text-[10px] text-slate-400 flex items-center gap-1.5 overflow-hidden select-none">
                        <span className="text-blue-500 font-bold">$</span>
                        <span className="truncate">{plan.command}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>

                      {/* AWS Region/Zone Metadata badge */}
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                        {plan.region}
                      </p>

                      <p className="text-xs text-slate-400 mb-6 leading-relaxed min-h-[40px]">
                        {plan.description}
                      </p>

                      {/* Pricing Tag */}
                      <div className="flex items-baseline gap-1 mb-6 border-b border-slate-900 pb-5">
                        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1">
                          / {plan.unit}
                        </span>
                      </div>

                      {/* Features Checklist */}
                      <ul className="space-y-3.5 mb-8">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-300 leading-normal">
                            <div className="p-0.5 rounded-full bg-blue-500/10 text-cyan-400 mt-0.5 border border-cyan-500/20">
                              <Check className="w-3.5 h-3.5 flex-shrink-0" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.name === 'Website Development' && (
                        <div className="mt-5 pt-4 border-t border-slate-900 flex flex-col gap-2 mb-8">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-slate-400">Backend Integration Available</span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                openBackendModal();
                              }}
                              className="px-2.5 py-1 rounded-lg border border-cyan-500/30 hover:border-cyan-500 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-white transition-all text-[10px] font-bold cursor-pointer"
                            >
                              Backend Details
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      {/* Technology Pills list */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {plan.techTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-mono bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href="#contact"
                        className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all duration-300 block hover:-translate-y-0.5 ${plan.popular
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 border border-cyan-400/30'
                            : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
                          }`}
                      >
                        {plan.cta}
                      </a>
                    </div>

                  </div>

                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Notes & Legal Notice */}
      <div className="mt-16 text-center space-y-4 max-w-2xl mx-auto px-4 relative z-10">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-slate-900/60 border border-slate-800/80 px-6 py-3.5 rounded-2xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span>AWS hosting charges may vary based on usage.</span>
          </div>
          <span className="hidden sm:inline text-slate-800">|</span>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Custom pricing available for special projects.</span>
          </div>
        </div>
      </div>

    </section>
  );
}
