import React, { useState, useEffect } from 'react';
import { Cloud, Menu, X, Terminal } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import CloudParticles from './components/CloudParticles';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CloudEngineerContact from './components/CloudEngineerContact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import BackendDetailsModal from './components/BackendDetailsModal';
import cloudLogo from '../img/Cloud-image-transparent.png';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loaderLog, setLoaderLog] = useState('');
  const [backendModalOpen, setBackendModalOpen] = useState(false);

  // Manage Dark/Light Mode Tailwind class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Premium Cloud Boot Loader simulation
  useEffect(() => {
    const logs = [
      'RESOLVING DNS cloudwave.tech ...',
      'PULLING AWS VPC INFRASTRUCTURE CONFIG ...',
      'INITIALIZING CLOUDFRONT EDGE CACHES ...',
      'CONNECTING TO REDUNDANT RDS DATABASES ...',
      'BOOTING CLOUDWAVETECH CONSOLE ...'
    ];

    let currentLogIndex = 0;
    
    // Cycle logs
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setLoaderLog(logs[currentLogIndex]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        // Delay slight bit before showing home console
        setTimeout(() => setLoading(false), 500);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Stack', href: '#skills' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 font-mono text-xs text-blue-400">
        <div className="space-y-4 max-w-sm w-full px-8 text-left">
          <div className="flex flex-col items-center justify-center mb-6">
            <img src={cloudLogo} alt="CloudWaveTech" className="h-56 md:h-72 object-contain animate-pulse" />
          </div>
          <div className="flex items-center gap-2 border border-slate-800 bg-slate-900/50 p-3 rounded-lg">
            <Terminal className="w-4 h-4 text-emerald-500 animate-pulse flex-shrink-0" />
            <div className="truncate text-slate-300 font-semibold">{loaderLog}</div>
          </div>
          {/* Simple progress track */}
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full w-full origin-left animate-[pulse_1.5s_infinite]" style={{ animationDuration: '1.5s' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 overflow-x-hidden">
      
      {/* Background drifting particles */}
      <CloudParticles />

      {/* Header bar */}
      <header className="fixed top-0 left-0 w-full z-40 border-b border-slate-200/50 dark:border-slate-900/50 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-28 flex items-center justify-between">
          
          {/* Brand */}
          <a href="#hero" className="flex items-center transition-all duration-300 hover:scale-105">
            <img 
              src={cloudLogo} 
              alt="CloudWaveTech" 
              className="h-20 md:h-24 w-auto object-contain [filter:drop-shadow(0_0_1px_#000)_drop-shadow(0_1px_2px_rgba(0,0,0,0.6))] dark:[filter:none]" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action buttons (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-blue-600 text-xs font-semibold text-white transition-all hover:bg-blue-500 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Actions Drawer trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300 py-4 px-4 space-y-3">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-900">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs text-center block"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Body Contents */}
      <main className="pt-28">
        <Hero />
        <About />
        <Services openBackendModal={() => setBackendModalOpen(true)} />
        <Skills />
        <Architecture />
        <Certifications />
        <Portfolio />
        <Testimonials />
        <Pricing openBackendModal={() => setBackendModalOpen(true)} />
        <CloudEngineerContact />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloating />

      <BackendDetailsModal isOpen={backendModalOpen} onClose={() => setBackendModalOpen(false)} />

    </div>
  );
}
