import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Hero from './components/Hero';
import About from './components/About';
import ResearchSection from './components/ResearchCard';
import ProjectShowcase from './components/ProjectShowcase';
import KnowledgeMap from './components/KnowledgeMap';
import Timeline from './components/Timeline';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true); // Default dark mode is stunning!
  const [paletteOpen, setPaletteOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  // Trigger dark mode classes on viewport mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Listen for Ctrl+K or Cmd+K keyboard mappings to open global command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sets up scroll observer to trace actively viewed sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0.1,
    };

    const sectionIds = ['about', 'research', 'projects', 'skills', 'timeline', 'contact'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Entrance animation observer — reveals sections when they scroll into view
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    if (elementsToAnimate.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-gray-950 dark:text-gray-100 bg-gray-50/40 dark:bg-neutral-950 transition-colors duration-500 relative flex flex-col font-sans selection:bg-google-blue/20 selection:text-google-blue">
      {/* Dynamic Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openPalette={() => setPaletteOpen(true)}
        activeSection={activeSection}
      />

      {/* Global Shortcut Palette popup */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        {/* Full-screen Colossal Hero branding */}
        <Hero />

        {/* Modular detailed contents */}
        <About />
        <ResearchSection />
        <ProjectShowcase />
        <KnowledgeMap />
        <Timeline />
        <ContactSection />
      </main>

      {/* Brand footer */}
      <Footer />
    </div>
  );
}
