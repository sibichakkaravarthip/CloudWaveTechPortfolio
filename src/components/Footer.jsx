import { Cloud, ArrowUp } from 'lucide-react';
import cloudLogo from '../../img/Cloud-image-transparent.png';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="0.5" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-10">
        
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center transition-all duration-300 hover:scale-105">
            <img 
              src={cloudLogo} 
              alt="CloudWaveTech" 
              className="h-20 md:h-24 w-auto object-contain [filter:drop-shadow(0_0_1px_#000)_drop-shadow(0_1px_2px_rgba(0,0,0,0.6))] dark:[filter:none]" 
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
            Freelance cloud engineering solutions. Building high-performance, automated, and secure AWS infrastructure pipelines for modern applications.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#hero" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">Home Console</a>
            </li>
            <li>
              <a href="#about" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">About Engineering</a>
            </li>
            <li>
              <a href="#services" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">Services Catalog</a>
            </li>
            <li>
              <a href="#portfolio" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">Case Studies</a>
            </li>
            <li>
              <a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">Connect Terminal</a>
            </li>
          </ul>
        </div>

        {/* Contact info & socials Column */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
              Follow Connection
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sibichakkaravarthi-p-067047375/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>

            </div>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Scroll to Top
          </button>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <div>
          © {currentYear} CloudWaveTech. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
