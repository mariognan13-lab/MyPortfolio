import React, { useState } from 'react';
import { Calendar, CheckCircle2, GraduationCap, Trophy, Cpu, Code2, LineChart, HelpCircle } from 'lucide-react';
import { MILESTONES } from '../data';

export default function Timeline() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Maps index to matching Lucide Icons for high-fidelity storytelling
  const getMilestoneIcon = (index: number) => {
    switch (index) {
      case 0: return GraduationCap;
      case 1: return Trophy;
      case 2: return Code2;
      case 3: return Cpu;
      case 4: return LineChart;
      default: return HelpCircle;
    }
  };

  return (
    <section id="timeline" className="py-24 border-t border-gray-200 dark:border-neutral-900 bg-gray-50/50 dark:bg-neutral-950/20 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Title */}
        <div className="mb-16">
          <div className="text-xs font-mono text-google-red mb-2 font-medium">JOURNEY / ROADMAP</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white">
            Milestones & Chronology
          </h2>
        </div>

        {/* Timeline main tree */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0" id="chronicle-timeline-container">
          
          {/* Vertical core connector line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gray-200 dark:bg-neutral-800 transform -translate-x-1/2" />

          <div className="space-y-12">
            {MILESTONES.map((milestone, idx) => {
              const MilestoneIcon = getMilestoneIcon(idx);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  id={milestone.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  
                  {/* Center Year Pulsator Dot */}
                  <div className="absolute left-6 sm:left-1/2 top-2 transform -translate-x-1/2 z-10 select-none">
                    <div className={`w-8 h-8 rounded-full border-4 border-white dark:border-neutral-950 shadow-md flex items-center justify-center transition-all duration-300 ${
                      hoveredIdx === idx
                        ? 'bg-google-red scale-110 text-white'
                        : 'bg-gray-100 dark:bg-neutral-900 text-gray-400 dark:text-neutral-500'
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Empty Spacer column for desktop alignment */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Card Content container block */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 relative">
                    <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 space-y-4">
                      
                      {/* Subtitle tag / Date tag */}
                      <div className="flex items-center gap-3 justify-between">
                        <span className="text-sm font-mono font-bold text-google-red">
                          {milestone.date}
                        </span>
                        
                        <span className="text-[10px] font-mono bg-gray-50 dark:bg-neutral-950 text-gray-400 px-2.5 py-1 rounded border border-gray-200/20 dark:border-neutral-800">
                          {milestone.subtitle}
                        </span>
                      </div>

                      {/* Header Title */}
                      <div className="space-y-1">
                        <h3 className="text-lg md:text-xl font-display font-bold text-gray-950 dark:text-white tracking-tight flex items-center gap-2">
                          <MilestoneIcon className="w-4.5 h-4.5 text-google-red" />
                          <span>{milestone.title}</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed font-light">
                          {milestone.description}
                        </p>
                      </div>

                      {/* Bullet Highlights under Milestone Card */}
                      <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 space-y-2">
                        {milestone.highlights.map((hlt, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-neutral-300 font-light leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-google-red mt-0.5 flex-shrink-0" />
                            <span>{hlt}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
