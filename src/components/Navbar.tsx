import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Search, Cpu } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  openPalette: () => void;
  activeSection: string;
}

export default function Navbar({ darkMode, setDarkMode, openPalette, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setReadingProgress(progress);
      setScrolled(scrollTop > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Certifications', id: 'research' },
    { label: 'Projects', id: 'projects' },
    { label: 'Knowledge Map', id: 'skills' },
    { label: 'Metrics', id: 'metrics' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Library', id: 'library' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-neutral-800/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Reading Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100 dark:bg-neutral-800">
        <div
          className="h-full bg-gradient-to-r from-google-blue via-google-red to-google-green transition-all duration-150 ease-out"
          style={{ width: `${readingProgress * 100}%` }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo brand */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-3 cursor-pointer group"
          id="navbar-brand"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-google-blue via-google-red to-google-green p-[2px]">
            <div className="w-full h-full bg-white dark:bg-neutral-900 rounded-[10px] flex items-center justify-center transition-colors duration-300">
              <Cpu className="w-5 h-5 text-gray-800 dark:text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-display font-medium text-lg tracking-tight text-gray-900 dark:text-white transition-opacity">
            Mario Seelam <span className="text-xs text-google-blue font-mono font-normal ml-1">/portfolio</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleScrollTo(item.id)}
              className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'text-google-blue dark:text-blue-400 bg-gray-100 dark:bg-neutral-800'
                  : 'text-gray-600 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Global actions */}
        <div className="hidden lg:flex items-center gap-3" id="navbar-actions-desktop">
          {/* Cmd+K Search trigger button */}
          <button
            id="nav-search-trigger"
            onClick={openPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-900 text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300 transition-all text-xs font-mono"
            title="Search command palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-gray-200 dark:border-neutral-700">⌘K</kbd>
          </button>

          {/* Dark mode selector */}
          <button
            id="theme-toggler"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-neutral-300 border border-gray-200/50 dark:border-neutral-800/50 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3" id="navbar-actions-mobile">
          <button
            id="mobile-search-trigger"
            onClick={openPalette}
            className="p-2 rounded-lg text-gray-600 dark:text-neutral-300"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark mode toggler mobile */}
          <button
            id="mobile-theme-toggler"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-gray-600 dark:text-neutral-300"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Menu button */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-600 dark:text-neutral-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Expansion */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 py-4 px-6 animate-fade-in" id="mobile-navigation-drawer">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleScrollTo(item.id)}
                className={`w-full text-left py-3 px-4 rounded-xl text-base font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-google-blue dark:text-blue-400 bg-gray-50 dark:bg-neutral-900 border-l-4 border-google-blue'
                    : 'text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
