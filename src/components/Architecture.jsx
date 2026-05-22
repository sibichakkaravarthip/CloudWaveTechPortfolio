import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, Server, User, Globe, ArrowRight, ShieldCheck, Zap, Cpu } from 'lucide-react';

export default function Architecture() {
  const [activeTab, setActiveTab] = useState('app-flow');

  return (
    <section id="architecture" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
        <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
          Infrastructure Design
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
          AWS Architecture Showcase
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Visualize how data and routing requests traverse our robust cloud setups.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex justify-center mb-12">
        <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex gap-1 font-sans text-sm font-semibold">
          <button
            onClick={() => setActiveTab('app-flow')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === 'app-flow'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Application Traffic Flow
          </button>
          <button
            onClick={() => setActiveTab('dns-routing')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === 'dns-routing'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            DNS & Web Server Routing
          </button>
        </div>
      </div>

      {/* Diagram Panel Container */}
      <div className="glass-panel rounded-2xl border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/60 p-6 md:p-12 shadow-2xl relative min-h-[380px] flex items-center justify-center overflow-x-auto">
        
        {/* Animated Traffic Path CSS Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes dash {
            to {
              stroke-dashoffset: -20;
            }
          }
          .traffic-line {
            stroke-dasharray: 5, 5;
            animation: dash 1s linear infinite;
          }
          .traffic-line-reverse {
            stroke-dasharray: 5, 5;
            animation: dash 1.5s linear infinite reverse;
          }
        `}} />

        <AnimatePresence mode="wait">
          {activeTab === 'app-flow' && (
            <motion.div
              key="app-flow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl min-w-[700px] py-4"
            >
              {/* Diagram 1: User -> CloudFront -> Load Balancer -> EC2 -> Database */}
              <div className="relative">
                <svg viewBox="0 0 800 240" className="w-full h-auto select-none stroke-[1.5] fill-none">
                  
                  {/* Nodes Definition */}
                  
                  {/* 1. User */}
                  <g transform="translate(40, 95)" className="group">
                    <circle cx="25" cy="25" r="24" className="stroke-slate-400 dark:stroke-slate-600 fill-slate-100 dark:fill-slate-900" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <User className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">Global Client</text>
                  </g>

                  {/* 2. CloudFront */}
                  <g transform="translate(180, 95)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-orange-500 fill-orange-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Zap className="w-6 h-6 text-orange-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">CloudFront CDN</text>
                  </g>

                  {/* 3. Load Balancer */}
                  <g transform="translate(340, 95)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-blue-500 fill-blue-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Network className="w-6 h-6 text-blue-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">ALB Load Balancer</text>
                  </g>

                  {/* 4. EC2 Instance Cluster */}
                  {/* Instance 1 */}
                  <g transform="translate(520, 30)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-cyan-500 fill-cyan-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Server className="w-6 h-6 text-cyan-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="10" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-sans">EC2 Instance A</text>
                  </g>
                  {/* Instance 2 */}
                  <g transform="translate(520, 140)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-cyan-500 fill-cyan-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Server className="w-6 h-6 text-cyan-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="10" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-sans">EC2 Instance B</text>
                  </g>

                  {/* 5. Database (RDS) */}
                  <g transform="translate(680, 95)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-emerald-500 fill-emerald-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Database className="w-6 h-6 text-emerald-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">RDS database</text>
                  </g>

                  {/* Connecting Pathways with animations */}
                  
                  {/* Client -> CDN */}
                  <line x1="90" y1="120" x2="180" y2="120" className="stroke-blue-500 traffic-line stroke-[2]" />
                  
                  {/* CDN -> ALB */}
                  <line x1="230" y1="120" x2="340" y2="120" className="stroke-indigo-500 traffic-line stroke-[2]" />
                  
                  {/* ALB -> EC2 A */}
                  <path d="M 390 120 L 460 120 L 460 55 L 520 55" className="stroke-blue-500 traffic-line stroke-[1.5]" />
                  
                  {/* ALB -> EC2 B */}
                  <path d="M 390 120 L 460 120 L 460 165 L 520 165" className="stroke-blue-500 traffic-line stroke-[1.5]" />
                  
                  {/* EC2 A -> DB */}
                  <path d="M 570 55 L 630 55 L 630 120 L 680 120" className="stroke-emerald-500 traffic-line stroke-[1.5]" />
                  
                  {/* EC2 B -> DB */}
                  <path d="M 570 165 L 630 165 L 630 120 L 680 120" className="stroke-emerald-500 traffic-line stroke-[1.5]" />
                  
                  {/* Arrow Indicators */}
                  <path d="M 175 116 L 180 120 L 175 124" className="stroke-blue-500 fill-blue-500" />
                  <path d="M 335 116 L 340 120 L 335 124" className="stroke-indigo-500 fill-indigo-500" />
                  <path d="M 515 51 L 520 55 L 515 59" className="stroke-blue-500 fill-blue-500" />
                  <path d="M 515 161 L 520 165 L 515 169" className="stroke-blue-500 fill-blue-500" />
                  <path d="M 675 116 L 680 120 L 675 124" className="stroke-emerald-500 fill-emerald-500" />

                </svg>
              </div>
              
              <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 mr-1.5 animate-ping"></span> 
                This design scale-out delivers static S3 content instantly via CloudFront, while dynamic requests route to EC2 instances backed by RDS.
              </div>
            </motion.div>
          )}

          {activeTab === 'dns-routing' && (
            <motion.div
              key="dns-routing"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl min-w-[700px] py-4"
            >
              {/* Diagram 2: Domain -> Route53 -> EC2 -> Nginx -> Application */}
              <div className="relative">
                <svg viewBox="0 0 800 240" className="w-full h-auto select-none stroke-[1.5] fill-none">
                  
                  {/* 1. Domain Request */}
                  <g transform="translate(40, 95)">
                    <circle cx="25" cy="25" r="24" className="stroke-slate-400 dark:stroke-slate-600 fill-slate-100 dark:fill-slate-900" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Globe className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">cloudwave.tech</text>
                  </g>

                  {/* 2. Route 53 DNS */}
                  <g transform="translate(200, 95)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-indigo-500 fill-indigo-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Network className="w-6 h-6 text-indigo-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">Route 53 DNS</text>
                  </g>

                  {/* 3. EC2 Instance Host */}
                  <g transform="translate(360, 95)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-blue-500 fill-blue-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Server className="w-6 h-6 text-blue-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">EC2 Host</text>
                  </g>

                  {/* 4. Nginx Server (Inside EC2) */}
                  <g transform="translate(520, 95)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-cyan-500 fill-cyan-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <ShieldCheck className="w-6 h-6 text-cyan-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">Nginx Proxy</text>
                  </g>

                  {/* 5. App Application (Port 3000) */}
                  <g transform="translate(680, 95)">
                    <rect x="0" y="0" width="50" height="50" rx="6" className="stroke-violet-500 fill-violet-500/10" />
                    <foreignObject x="13" y="13" width="24" height="24">
                      <Cpu className="w-6 h-6 text-violet-500" />
                    </foreignObject>
                    <text x="25" y="65" fontSize="11" textAnchor="middle" className="stroke-none fill-slate-700 dark:fill-slate-300 font-bold font-sans">App Core (3000)</text>
                  </g>

                  {/* Connectors */}
                  
                  {/* Domain -> Route53 lookup */}
                  <line x1="90" y1="120" x2="200" y2="120" className="stroke-blue-500 traffic-line stroke-[2]" />
                  
                  {/* Route53 returns IP -> Domain requests EC2 */}
                  <path d="M 225 95 Q 292 40 360 95" className="stroke-slate-400 stroke-[1.5] stroke-dasharray-4" />
                  
                  {/* Direct connection Route 53 resolves EC2 */}
                  <line x1="250" y1="120" x2="360" y2="120" className="stroke-indigo-500 traffic-line-reverse stroke-[1.5]" />
                  
                  {/* EC2 -> Nginx Web Port (80 / 443) */}
                  <line x1="410" y1="120" x2="520" y2="120" className="stroke-cyan-500 traffic-line stroke-[2]" />
                  
                  {/* Nginx Proxy -> local backend (port 3000) */}
                  <line x1="570" y1="120" x2="680" y2="120" className="stroke-violet-500 traffic-line stroke-[2]" />

                  {/* Arrows */}
                  <path d="M 195 116 L 200 120 L 195 124" className="stroke-blue-500 fill-blue-500" />
                  <path d="M 355 116 L 360 120 L 355 124" className="stroke-indigo-500 fill-indigo-500" />
                  <path d="M 515 116 L 520 120 L 515 124" className="stroke-cyan-500 fill-cyan-500" />
                  <path d="M 675 116 L 680 120 L 675 124" className="stroke-violet-500 fill-violet-500" />

                </svg>
              </div>

              <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-600 mr-1.5 animate-ping"></span>
                Route53 translates client queries to the EC2 server IP address, where Nginx handles SSL negotiation and reverse-proxies requests locally.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
