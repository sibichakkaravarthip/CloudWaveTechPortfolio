import { ExternalLink, Server, Shield, Cpu, Database, Share2, Layers } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      title: 'Static Website Hosting on AWS',
      description: 'Zero-maintenance serverless setup for high-speed frontend builds, fully cached at edge locations globally with automatic SSL verification.',
      tags: ['S3', 'CloudFront', 'Route 53', 'ACM'],
      github: 'https://github.com',
      demo: '#',
      icon: Layers,
      // Mini SVG graphics for S3 -> CloudFront
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-24 stroke-blue-500 fill-none stroke-[1.5]">
          <rect x="5" y="15" width="20" height="20" rx="3" className="stroke-indigo-500 fill-indigo-500/10" />
          <text x="15" y="27" fontSize="8" textAnchor="middle" className="stroke-none fill-indigo-400 font-bold font-sans">S3</text>
          
          <line x1="25" y1="25" x2="45" y2="25" strokeDasharray="3,3" className="stroke-slate-500" />
          <path d="M 40 21 L 45 25 L 40 29" className="stroke-slate-500" />
          
          <circle cx="55" cy="25" r="10" className="stroke-cyan-500 fill-cyan-500/10" />
          <text x="55" y="28" fontSize="8" textAnchor="middle" className="stroke-none fill-cyan-400 font-bold font-sans">CDN</text>
          
          <line x1="65" y1="25" x2="80" y2="25" strokeDasharray="3,3" className="stroke-slate-500" />
          
          <rect x="80" y="15" width="16" height="20" rx="3" className="stroke-blue-500 fill-blue-500/10" />
          <text x="88" y="27" fontSize="7" textAnchor="middle" className="stroke-none fill-blue-400 font-bold font-sans">User</text>
        </svg>
      )
    },
    {
      title: 'React App Docker Deployment',
      description: 'Dockerized React application with automated staging/production builds. Containerized environment ensures deployment consistency.',
      tags: ['EC2', 'Docker', 'GitHub Actions', 'Nginx'],
      github: 'https://github.com',
      demo: '#',
      icon: Cpu,
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-24 stroke-cyan-500 fill-none stroke-[1.5]">
          <rect x="2" y="15" width="26" height="20" rx="2" className="stroke-sky-500 fill-sky-500/10" />
          <text x="15" y="27" fontSize="7" textAnchor="middle" className="stroke-none fill-sky-400 font-bold font-sans">GitHub</text>
          
          <line x1="28" y1="25" x2="42" y2="25" className="stroke-slate-500 animate-pulse" />
          
          <rect x="42" y="15" width="26" height="20" rx="4" className="stroke-blue-500 fill-blue-500/15" />
          <text x="55" y="27" fontSize="7" textAnchor="middle" className="stroke-none fill-blue-400 font-bold font-sans">Docker</text>
          
          <line x1="68" y1="25" x2="82" y2="25" className="stroke-slate-500" />
          
          <rect x="82" y="15" width="16" height="20" rx="2" className="stroke-indigo-500 fill-indigo-500/10" />
          <text x="90" y="27" fontSize="7" textAnchor="middle" className="stroke-none fill-indigo-400 font-bold font-sans">EC2</text>
        </svg>
      )
    },
    {
      title: 'Full Stack AWS Hosting',
      description: 'Secure application deployment leveraging isolated network subnets, automated RDS backups, and scalable compute nodes.',
      tags: ['VPC', 'ECS Fargate', 'RDS MySQL', 'ALB'],
      github: 'https://github.com',
      demo: '#',
      icon: Database,
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-24 stroke-emerald-500 fill-none stroke-[1.5]">
          <rect x="5" y="10" width="90" height="32" rx="3" className="stroke-slate-600/40 fill-none" />
          <text x="12" y="17" fontSize="5" className="stroke-none fill-slate-400 font-sans">AWS VPC</text>
          
          <rect x="15" y="18" width="18" height="18" rx="2" className="stroke-blue-500 fill-blue-500/10" />
          <text x="24" y="28" fontSize="7" textAnchor="middle" className="stroke-none fill-blue-400 font-bold font-sans">ALB</text>
          
          <line x1="33" y1="27" x2="48" y2="27" className="stroke-slate-600" />
          
          <rect x="48" y="18" width="20" height="18" rx="2" className="stroke-violet-500 fill-violet-500/10" />
          <text x="58" y="28" fontSize="7" textAnchor="middle" className="stroke-none fill-violet-400 font-bold font-sans">ECS</text>
          
          <line x1="68" y1="27" x2="76" y2="27" className="stroke-slate-600" />
          
          <rect x="76" y="18" width="16" height="18" rx="2" className="stroke-emerald-500 fill-emerald-500/10" />
          <text x="84" y="28" fontSize="7" textAnchor="middle" className="stroke-none fill-emerald-400 font-bold font-sans">RDS</text>
        </svg>
      )
    },
    {
      title: 'CloudFront CDN Setup',
      description: 'Configuration of CDN cache behaviors, origin shielded servers, geographical restrictions, and HTTP headers for CORS/security policy.',
      tags: ['CloudFront', 'S3', 'WAF Shield', 'SSL'],
      github: 'https://github.com',
      demo: '#',
      icon: Shield,
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-24 stroke-amber-500 fill-none stroke-[1.5]">
          <path d="M 10 25 L 30 10 L 50 25 L 30 40 Z" className="stroke-red-500 fill-red-500/10" />
          <text x="30" y="28" fontSize="7" textAnchor="middle" className="stroke-none fill-red-400 font-bold font-sans">WAF</text>
          
          <line x1="50" y1="25" x2="65" y2="25" className="stroke-slate-500" />
          
          <circle cx="75" cy="25" r="10" className="stroke-amber-500 fill-amber-500/10" />
          <text x="75" y="28" fontSize="7" textAnchor="middle" className="stroke-none fill-amber-400 font-bold font-sans">CDN</text>
        </svg>
      )
    },
    {
      title: 'AWS Infrastructure Migration',
      description: 'Zero-downtime database and asset migration from a shared VPS provider to AWS. Verified rollback strategies and DNS switchovers.',
      tags: ['AWS Migration', 'EC2', 'DMS', 'RDS'],
      github: 'https://github.com',
      demo: '#',
      icon: Share2,
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-24 stroke-indigo-500 fill-none stroke-[1.5]">
          <rect x="5" y="15" width="22" height="20" rx="2" className="stroke-slate-600 fill-slate-600/10" />
          <text x="16" y="27" fontSize="7" textAnchor="middle" className="stroke-none fill-slate-400 font-sans">VPS</text>
          
          <path d="M 35 25 Q 50 10 65 25" strokeDasharray="3,3" className="stroke-indigo-500" />
          <path d="M 60 21 L 65 25 L 60 27" className="stroke-indigo-500 fill-indigo-500" />
          
          <rect x="73" y="15" width="22" height="20" rx="2" className="stroke-blue-500 fill-blue-500/10" />
          <text x="84" y="27" fontSize="7" textAnchor="middle" className="stroke-none fill-blue-400 font-bold font-sans">AWS</text>
        </svg>
      )
    },
    {
      title: 'Load Balanced Web Architecture',
      description: 'Deployment of stateless EC2 clusters behind an ALB with Target Group scaling policies to scale horizontally during load spikes.',
      tags: ['ELB', 'ASG', 'EC2 Cluster', 'CloudWatch'],
      github: 'https://github.com',
      demo: '#',
      icon: Server,
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-24 stroke-blue-500 fill-none stroke-[1.5]">
          <circle cx="15" cy="25" r="8" className="stroke-blue-500 fill-blue-500/10" />
          <text x="15" y="28" fontSize="7" textAnchor="middle" className="stroke-none fill-blue-400 font-bold font-sans">ALB</text>
          
          <line x1="23" y1="25" x2="35" y2="15" className="stroke-slate-600" />
          <line x1="23" y1="25" x2="35" y2="35" className="stroke-slate-600" />
          
          <rect x="35" y="5" width="18" height="15" rx="2" className="stroke-cyan-500 fill-cyan-500/10" />
          <text x="44" y="15" fontSize="6" textAnchor="middle" className="stroke-none fill-cyan-400 font-sans">EC2 1</text>
          
          <rect x="35" y="30" width="18" height="15" rx="2" className="stroke-cyan-500 fill-cyan-500/10" />
          <text x="44" y="40" fontSize="6" textAnchor="middle" className="stroke-none fill-cyan-400 font-sans">EC2 2</text>
          
          <path d="M 58 12 Q 70 25 80 25" className="stroke-slate-600" />
          <path d="M 58 37 Q 70 25 80 25" className="stroke-slate-600" />
          
          <rect x="80" y="15" width="15" height="20" rx="2" className="stroke-emerald-500 fill-emerald-500/10" />
          <text x="87.5" y="27" fontSize="7" textAnchor="middle" className="stroke-none fill-emerald-400 font-sans">DB</text>
        </svg>
      )
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative">
      
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-indigo-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
          Case Studies
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
          Production Infrastructure Showcases
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Take a look at deployment configurations and systems integrations we have executed.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm overflow-hidden flex flex-col hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Visual Panel */}
              <div className="bg-slate-100/50 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60 p-4 flex items-center justify-center h-28 relative">
                <div className="absolute top-2 left-2 flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> AWS_INFRA_SCHEMATIC
                </div>
                {project.visual}
              </div>

              {/* Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-md bg-blue-500/5 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                    <a 
                      href={project.demo} 
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
