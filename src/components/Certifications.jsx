import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: 'Verified Credential',
      credentialId: 'AWS-ASA-9382',
      pdfUrl: '/certificates/AWS-Certificate.pdf',
      skills: ['AWS VPC & Networking', 'IAM Security Policies', 'EC2 & Auto Scaling', 'S3 & CloudFront CDN', 'RDS & DynamoDB'],
      color: 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
      badgeColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
      iconColor: 'text-orange-400'
    },
    {
      title: 'Full Stack Developer Certification',
      issuer: 'NAASCOM & FutureSkills Prime',
      issueDate: 'Verified Credential',
      credentialId: 'NSCOM-FSD-4820',
      pdfUrl: '/certificates/NAASCOM-fullstack.pdf',
      skills: ['Full Stack Architecture', 'API Design & Integration', 'Database Management', 'System Workloads', 'Version Control & Git'],
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      badgeColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      iconColor: 'text-blue-400'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/40 dark:border-slate-800/40 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
          Credentials
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
          Professional Certifications
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Verified industry standards and architecture qualifications.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`glass-panel rounded-2xl border bg-gradient-to-br ${cert.color} p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative group overflow-hidden`}
          >
            {/* Background grid line effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-40"></div>

            <div className="space-y-6 relative z-10">
              {/* Top row */}
              <div className="flex justify-between items-start gap-4">
                <div className={`p-3.5 rounded-xl border ${cert.badgeColor}`}>
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-wider text-right uppercase">
                  ID: {cert.credentialId}
                </div>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Issued by {cert.issuer}</span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold font-mono tracking-wide uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified Badge
              </div>

              {/* Validated Skills */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Validated Competencies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-white/40 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 relative z-10">
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span>View Certification PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
