import React, { useState, useEffect } from 'react';
import { Server, Activity, ArrowUpRight, Cpu, HardDrive, Wifi, ShieldCheck, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardVisual() {
  const [metrics, setMetrics] = useState({
    cpu: 28,
    memory: 42,
    latency: 24,
    requests: 1240,
    networkIn: 4.8,
    networkOut: 12.4
  });

  const [logs, setLogs] = useState([
    { time: '22:15:32', type: 'INFO', msg: 'System initialized on AWS us-east-1' },
    { time: '22:15:33', type: 'SUCCESS', msg: 'Route53 health checks green' },
    { time: '22:15:35', type: 'INFO', msg: 'Auto Scaling group scaled down to 2 instances' },
    { time: '22:16:01', type: 'SUCCESS', msg: 'CloudFront edge cache invalidated (deployment: v2.4.1)' }
  ]);

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const nextCpu = Math.max(10, Math.min(95, prev.cpu + Math.floor(Math.random() * 9) - 4));
        const nextMem = Math.max(30, Math.min(85, prev.memory + Math.floor(Math.random() * 3) - 1));
        const nextLat = Math.max(15, Math.min(45, prev.latency + Math.floor(Math.random() * 5) - 2));
        const nextReq = Math.max(800, prev.requests + Math.floor(Math.random() * 41) - 20);
        const nextNetIn = parseFloat((Math.max(1.0, prev.networkIn + (Math.random() * 1 - 0.5))).toFixed(1));
        const nextNetOut = parseFloat((Math.max(5.0, prev.networkOut + (Math.random() * 2 - 1))).toFixed(1));

        return {
          cpu: nextCpu,
          memory: nextMem,
          latency: nextLat,
          requests: nextReq,
          networkIn: nextNetIn,
          networkOut: nextNetOut
        };
      });

      // Periodically append a random log
      if (Math.random() > 0.6) {
        const logTemplates = [
          { type: 'INFO', msg: 'CloudFront edge node synced in Frankfurt' },
          { type: 'SUCCESS', msg: 'SSL Certificate verified (Let\'s Encrypt)' },
          { type: 'SUCCESS', msg: 'Backup snapshot completed for RDS PostgreSQL' },
          { type: 'WARNING', msg: 'CPU utilization reached 78% on i-04a11fbc' },
          { type: 'SUCCESS', msg: 'GitHub Action build #1043: deploy_prod completed' },
          { type: 'INFO', msg: 'Nginx server reloaded configuration' }
        ];

        const randomLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        const timeString = new Date().toTimeString().split(' ')[0];

        setLogs(prev => [
          ...prev.slice(1),
          { time: timeString, type: randomLog.type, msg: randomLog.msg }
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full glass-panel rounded-2xl overflow-hidden shadow-2xl border-slate-200 dark:border-slate-800 flex flex-col h-[460px] text-slate-800 dark:text-slate-200 bg-white/40 dark:bg-slate-950/60 font-mono text-xs">
      
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100/50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-slate-500 dark:text-slate-400 font-semibold ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" /> aws-cloud-console : cwt-prod
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 animate-pulse">
            ● ONLINE
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-3 flex-1 overflow-y-auto">
        
        {/* Metric Card: CPU */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span>CPU Load</span>
            <Cpu className="w-4 h-4 text-blue-500" />
          </div>
          <div className="my-2">
            <div className="text-2xl font-bold text-slate-800 dark:text-white font-sans">{metrics.cpu}%</div>
            {/* Visual Mini Progress Bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${
                  metrics.cpu > 80 ? 'bg-red-500' : metrics.cpu > 60 ? 'bg-yellow-500' : 'bg-blue-500'
                }`}
                style={{ width: `${metrics.cpu}%` }}
              ></div>
            </div>
          </div>
          <div className="text-[10px] text-slate-400">Instances: 2 / 4</div>
        </div>

        {/* Metric Card: Memory */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span>RAM Usage</span>
            <HardDrive className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="my-2">
            <div className="text-2xl font-bold text-slate-800 dark:text-white font-sans">{metrics.memory}%</div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
              <div className="bg-indigo-500 h-full transition-all duration-1000" style={{ width: `${metrics.memory}%` }}></div>
            </div>
          </div>
          <div className="text-[10px] text-slate-400">Used: {(metrics.memory * 0.08).toFixed(1)} GB / 8 GB</div>
        </div>

        {/* Metric Card: Latency */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 flex flex-col justify-between col-span-2 md:col-span-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span>Latency</span>
            <Wifi className="w-4 h-4 text-cyan-500" />
          </div>
          <div className="my-2">
            <div className="text-2xl font-bold text-slate-800 dark:text-white font-sans">{metrics.latency} ms</div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
              <div 
                className="bg-cyan-500 h-full transition-all duration-1000" 
                style={{ width: `${Math.min(100, (metrics.latency / 50) * 100)}%` }}
              ></div>
            </div>
          </div>
          <div className="text-[10px] text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> SSL Active (HTTP/3)
          </div>
        </div>

        {/* Live Network Bandwidth */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 col-span-2 md:col-span-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
            <span>Network Traffic (Live)</span>
            <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
          </div>
          <div className="grid grid-cols-2 gap-4 my-1">
            <div>
              <span className="text-[10px] text-slate-400 block">Bandwidth In</span>
              <span className="text-base font-bold text-slate-800 dark:text-white font-sans">{metrics.networkIn} MB/s</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Bandwidth Out</span>
              <span className="text-base font-bold text-slate-800 dark:text-white font-sans">{metrics.networkOut} MB/s</span>
            </div>
          </div>
          {/* Simulated chart bars */}
          <div className="flex items-end gap-1.5 h-12 mt-2 pt-1 border-t border-slate-200/30 dark:border-slate-800/30">
            {Array.from({ length: 24 }).map((_, i) => {
              // Generate some random wave graph
              const h = Math.max(10, Math.sin((i + metrics.cpu) * 0.4) * 20 + 25 + Math.random() * 15);
              return (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-sm opacity-80" 
                  style={{ height: `${h}%` }}
                ></div>
              )
            })}
          </div>
        </div>

        {/* Scrolling deployment terminal logs */}
        <div className="p-3 rounded-xl bg-slate-900 dark:bg-black/80 border border-slate-200 dark:border-slate-900 col-span-2 md:col-span-3 flex flex-col h-[130px] overflow-hidden">
          <div className="text-[10px] text-slate-400 border-b border-slate-800 pb-1 mb-1.5 flex justify-between">
            <span>Server Deployment Stream Logs</span>
            <span className="text-indigo-400">AWS CloudWatch</span>
          </div>
          <div className="flex-1 flex flex-col gap-1 overflow-y-auto pr-1">
            {logs.map((log, index) => (
              <div key={index} className="flex gap-2 leading-relaxed text-[10px]">
                <span className="text-slate-500">{log.time}</span>
                <span className={
                  log.type === 'SUCCESS' ? 'text-emerald-400' :
                  log.type === 'WARNING' ? 'text-amber-400' : 'text-blue-400'
                }>[{log.type}]</span>
                <span className="text-slate-300 flex-1 truncate">{log.msg}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
