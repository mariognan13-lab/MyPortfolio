import React, { useState, useEffect } from 'react';
import { ArrowDown, HelpCircle, Network, GitMerge, Orbit, CircleDot } from 'lucide-react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const [activeHeadline, setActiveHeadline] = useState(0);

  // Parallax scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interval timer to toggle headlines or keep them staggered
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeadline((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50/50 dark:bg-neutral-950 dotted-bg transition-colors duration-500 pt-20"
    >
      {/* Decorative Floating Elements (Parallax + Floating Keyframes) */}
      
      {/* Floating Satellite (Drifting slowly) */}
      <div
        id="floating-satellite"
        className="absolute z-10 pointer-events-none opacity-40 dark:opacity-50 select-none transition-transform"
        style={{
          transform: `translate3d(120px, calc(-100px + ${offsetY * 0.15}px), 0)`,
          top: '15%',
          right: '8%',
        }}
      >
        <div className="relative animate-bounce" style={{ animationDuration: '8s' }}>
          <svg className="w-24 h-24 text-gray-400 dark:text-neutral-700 hover:text-google-blue cursor-pointer transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="35" y="32" width="30" height="36" rx="4" fill="none" />
            <line x1="15" y1="50" x2="35" y2="50" strokeWidth="2" />
            <line x1="65" y1="50" x2="85" y2="50" strokeWidth="2" />
            <rect x="5" y="38" width="10" height="24" rx="1" />
            <rect x="85" y="38" width="10" height="24" rx="1" />
            <circle cx="50" cy="18" r="6" />
            <line x1="50" y1="24" x2="50" y2="32" />
            <path d="M42,12 C44,9 56,9 58,12" strokeDasharray="2 2" />
          </svg>
          <div className="bg-google-blue absolute right-16 top-6 w-2 h-2 rounded-full animate-ping" />
        </div>
      </div>

      {/* Floating Butterfly (Stylized vector with slow Wing Flap) */}
      <div
        id="floating-butterfly"
        className="absolute z-10 pointer-events-none opacity-30 dark:opacity-40 select-none transition-transform"
        style={{
          transform: `translate3d(-80px, calc(150px - ${offsetY * 0.1}px), 0)`,
          bottom: '22%',
          left: '10%',
        }}
      >
        <div className="relative flex items-center justify-center animate-pulse" style={{ animationDuration: '4s' }}>
          <svg className="w-16 h-16 text-google-red stroke-current" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
            {/* Redesigned minimal geometric butterfly */}
            <path d="M32 20C24 10 12 14 12 24C12 34 22 36 32 44C42 36 52 34 52 24C52 14 40 10 32 20Z animate-wing" fill="none" />
            <path d="M32 12V48" strokeWidth="2.5" />
            <path d="M32 18C28 15 24 16 22 20" />
            <path d="M32 18C36 15 40 16 42 20" />
          </svg>
        </div>
      </div>

      {/* Floating Mathematical Graph Grid */}
      <div
        id="floating-math-graph"
        className="absolute z-10 pointer-events-none opacity-30 dark:opacity-45 select-none transition-transform"
        style={{
          transform: `translate3d(calc(-120px + ${offsetY * -0.05}px), calc(-80px + ${offsetY * 0.12}px), 0)`,
          top: '12%',
          left: '15%',
        }}
      >
        <div className="relative">
          <svg className="w-32 h-32 text-google-yellow" viewBox="0 0 120 120" stroke="currentColor" strokeWidth="1.2" fill="none">
            {/* Graph coordinates axis */}
            <line x1="10" y1="110" x2="110" y2="110" strokeDasharray="3 3" />
            <line x1="10" y1="10" x2="10" y2="110" strokeDasharray="3 3" />
            {/* Mathematical Sine Graph */}
            <path d="M 10 110 Q 35 -15, 60 70 T 110 40" strokeWidth="2.5" />
            <circle cx="35" cy="40" r="4" className="fill-google-yellow" />
            <circle cx="60" cy="70" r="4" className="fill-google-red" />
            <circle cx="85" cy="55" r="4" className="fill-google-blue" />
          </svg>
        </div>
      </div>

      {/* Floating Neural Network Nodes (Connecting links) */}
      <div
        id="floating-neural-mesh"
        className="absolute z-10 pointer-events-none opacity-35 dark:opacity-50 select-none transition-transform"
        style={{
          transform: `translate3d(calc(100px - ${offsetY * 0.08}px), calc(120px + ${offsetY * -0.15}px), 0)`,
          bottom: '15%',
          right: '12%',
        }}
      >
        <div className="relative flex" style={{ width: '130px', height: '130px' }}>
          <svg className="absolute inset-0 w-full h-full text-google-green" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="1">
            <line x1="20" y1="50" x2="50" y2="20" />
            <line x1="20" y1="50" x2="50" y2="80" />
            <line x1="50" y1="20" x2="80" y2="50" strokeDasharray="2 2" />
            <line x1="50" y1="80" x2="80" y2="50" />
            <line x1="50" y1="20" x2="50" y2="80" />
            <circle cx="20" cy="50" r="5" className="fill-google-green" />
            <circle cx="50" cy="20" r="5" className="fill-white dark:fill-neutral-900" strokeWidth="1.5" />
            <circle cx="50" cy="80" r="5" className="fill-white dark:fill-neutral-900" strokeWidth="1.5" />
            <circle cx="80" cy="50" r="5" className="fill-google-blue" />
          </svg>
        </div>
      </div>

      {/* Master Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center">
        {/* Subtle top indicator */}
        <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/60 shadow-sm animate-fade-in">
          <CircleDot className="w-3.5 h-3.5 text-google-blue animate-pulse" />
          <span className="text-xs font-mono font-medium text-gray-500 dark:text-neutral-400">
            SOFTWARE DEVELOPER / COMPETITIVE PROGRAMMER
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="h-[280px] sm:h-[400px] flex items-center justify-center select-none" id="hero-headline-container">
          {activeHeadline === 0 ? (
            <h1
              id="hero-heading-1"
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-gray-900 dark:text-white leading-[1.05] transition-all duration-700 transform flex flex-col justify-center"
            >
              <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 animate-slide-up select-none">
                <span className="text-google-blue bg-clip-text">Research,</span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 animate-slide-up select-none" style={{ animationDelay: '150ms' }}>
                <span className="text-google-red bg-clip-text">Engineering,</span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 animate-slide-up select-none" style={{ animationDelay: '300ms' }}>
                <span className="text-gray-900 dark:text-white">into Reality.</span>
              </div>
            </h1>
          ) : (
            <h1
              id="hero-heading-2"
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-gray-900 dark:text-white leading-[1.05] transition-all duration-700 transform flex flex-col justify-center"
            >
              <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 animate-slide-up select-none">
                <span className="text-google-yellow bg-clip-text">Algorithms,</span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 animate-slide-up select-none" style={{ animationDelay: '150ms' }}>
                <span className="text-google-green bg-clip-text">Systems,</span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 animate-slide-up select-none" style={{ animationDelay: '300ms' }}>
                <span className="text-gray-900 dark:text-white">to Impact.</span>
              </div>
            </h1>
          )}
        </div>

        {/* Headline Description */}
        <p
          id="hero-description"
          className="max-w-2xl mt-8 text-base sm:text-lg md:text-xl text-gray-500 dark:text-neutral-400 font-sans font-light leading-relaxed tracking-wide select-text"
        >
          I am a Computer Science student with strong foundations in Data Structures, Algorithms, and Web Development, seeking an entry-level Software Developer role.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-30" id="hero-actions">
          <button
            id="hero-primary-btn"
            onClick={handleLearnMore}
            className="group px-7 py-3.5 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-900 dark:text-white font-sans text-sm font-semibold tracking-tight shadow-sm flex items-center gap-2 cursor-pointer transition-all duration-150"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative backdrop gradients for premium lab ambient feeling */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] rounded-full bg-google-blue/5 dark:bg-google-blue/10 blur-[120px] pointer-events-none select-none" />
      <div className="absolute top-2/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] rounded-full bg-google-red/5 dark:bg-google-red/5 blur-[120px] pointer-events-none select-none" />
    </section>
  );
}
