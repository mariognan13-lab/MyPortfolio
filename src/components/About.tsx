import React, { useState, useEffect } from 'react';
import { Award, BookOpen, Terminal, CheckCircle2, ChevronRight, Binary, Code, Database, Brain, Sparkles, Sigma, Cpu } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission'|'interests'>('mission');

  // Animated counters configuration
  const counters = [
    { label: 'B.Tech CGPA', target: 8.8, prefix: '', suffix: '' },
    { label: 'Diploma %', target: 93.1, prefix: '', suffix: '%' },
    { label: 'Problems Solved', target: 600, prefix: '', suffix: '+' },
    { label: 'Certifications', target: 3, prefix: '', suffix: '' },
  ];

  const interestCategories = [
    {
      id: 'cp',
      title: 'Competitive Programming',
      icon: Binary,
      description: 'Active solver on LeetCode (Rating 1401), CodeChef (Rating 1255), and Codeforces. Solved over 600 algorithmic problems.',
      color: 'border-l-4 border-google-blue',
      badge: 'Active Solver'
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: Code,
      description: 'Building modern interfaces. Developed Crime Reporting Web App featuring in-browser media capture. freeCodeCamp Certified.',
      color: 'border-l-4 border-google-red',
      badge: 'Responsive UI'
    },
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      icon: Terminal,
      description: 'Solid understanding of stacks, queues, trees, graphs, sorting, searching, and complexity optimization.',
      color: 'border-l-4 border-google-green',
      badge: 'Core Logic'
    },
    {
      id: 'dbms',
      title: 'Database Management',
      icon: Database,
      description: 'Designing normalized schemas (1NF to BCNF), querying with SQL, and maintaining ACID transaction bounds.',
      color: 'border-l-4 border-google-yellow',
      badge: 'SQL & DBMS'
    },
    {
      id: 'os',
      title: 'Operating Systems',
      icon: Cpu,
      description: 'Studying process synchronization, memory paging, deadlock prevention, and basic hardware coordination.',
      color: 'border-l-4 border-google-blue',
      badge: 'Systems Core'
    },
    {
      id: 'networks',
      title: 'Computer Networks',
      icon: Sparkles,
      description: 'Exploring protocol models (TCP/IP), network routing layers, DNS lookups, and secure connection handshakes.',
      color: 'border-l-4 border-google-green',
      badge: 'Protocols'
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-gray-150 dark:border-neutral-900 bg-white dark:bg-neutral-950 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="text-xs font-mono text-google-blue mb-2 font-medium">ABOUT / STRATEGY</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white">
            Engineering boundaries is our science.
          </h2>
        </div>

        {/* Layout grid containing picture and story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Portait picture frame */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/60 shadow-lg">
              <img
                src="/src/assets/images/mario_seelam_portrait.png"
                alt="Mario Seelam Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale select-none group-hover:grayscale-0 transition-all duration-500 scale-102"
                onError={(e) => {
                  // Fallback if image fails to render
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/mario/600/800";
                }}
              />
              {/* Overlay graphics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="font-display font-medium text-lg leading-tight">Mario Seelam</div>
                <div className="font-mono text-xs text-blue-300 mt-1">Computer Science Student</div>
              </div>
            </div>

            {/* Resume button download option */}
            <a
              id="resume-download-btn"
              href="#resume-pdf"
              onClick={(e) => {
                e.preventDefault();
                alert("Simulating standard PDF Resume download. Contact: mariognan13@gmail.com for inquiries.");
              }}
              className="mt-6 w-full max-w-[340px] py-3.5 px-6 rounded-xl border border-gray-200 dark:border-neutral-800 text-center text-sm font-semibold text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-900 cursor-pointer transition-colors block"
            >
              Examine CV / Resume (.pdf)
            </a>
          </div>

          {/* Right: Narrative Story + Counters */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Tab navigation */}
            <div className="flex border-b border-gray-100 dark:border-neutral-850 gap-6">
              <button
                onClick={() => setActiveTab('mission')}
                className={`pb-4 text-base font-semibold tracking-tight border-b-2 cursor-pointer transition-all ${
                  activeTab === 'mission'
                    ? 'border-google-blue text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-neutral-300'
                }`}
              >
                Our Manifesto & Mission
              </button>
              <button
                onClick={() => setActiveTab('interests')}
                className={`pb-4 text-base font-semibold tracking-tight border-b-2 cursor-pointer transition-all ${
                  activeTab === 'interests'
                    ? 'border-transparent text-gray-400 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-neutral-300'
                    : 'border-google-blue text-gray-900 dark:text-white' // wait inverted states
                }`}
              >
                InVestigation Clusters
              </button>
            </div>

            {/* Mission Section */}
            {activeTab === 'mission' ? (
              <div className="space-y-6 text-lg text-gray-600 dark:text-neutral-300 leading-relaxed font-light font-sans tracking-wide">
                <p>
                  I am a Computer Science student and software developer. I build clean, responsive web user-interfaces and solve complex algorithmic scenarios on competitive programming platforms.
                </p>
                <p>
                  My academic foundations at <strong>Prasad V. Potluri Siddhartha Institute of Technology</strong> and past Diploma studies have grounded me in Data Structures & Algorithms, Operating Systems, Database Management Systems, and Computer Networks. I focus on bridging logical theory with practical, user-centered web applications.
                </p>
                <p className="border-l-4 border-google-red pl-5 italic text-gray-550 dark:text-neutral-400 text-base">
                  "Solving problems is not just about passing tests; it is about writing clean, optimized code that executes efficiently and enhances the user experience."
                </p>
              </div>
            ) : (
              /* Interests Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="interests-grid">
                {interestCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={cat.id}
                      className={`p-5 rounded-2xl bg-gray-50/50 dark:bg-neutral-900/30 border border-gray-150 dark:border-neutral-900/60 hover:shadow-md transition-all ${cat.color}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 text-gray-800 dark:text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-medium text-sm text-gray-900 dark:text-white">
                          {cat.title}
                        </h3>
                        <span className="ml-auto text-[10px] font-mono bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-gray-500 dark:text-neutral-400">
                          {cat.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Counters Section */}
            <div className="pt-8 border-t border-gray-100 dark:border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6" id="stats-dashboard">
              {counters.map((count, index) => (
                <div key={index} className="text-center md:text-left p-4 rounded-xl bg-gray-55/30 dark:bg-neutral-900/10">
                  <div className="text-3xl md:text-4xl font-mono font-medium text-gray-900 dark:text-white select-all">
                    {count.prefix}{count.target}{count.suffix}
                  </div>
                  <div className="text-xs font-mono text-gray-400 dark:text-neutral-500 mt-2 font-medium tracking-wide">
                    {count.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
