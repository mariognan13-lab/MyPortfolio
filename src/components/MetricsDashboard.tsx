import React from 'react';
import { Award, Library, Database, CloudLightning, FileSpreadsheet, GitPullRequest, GitBranch } from 'lucide-react';

export default function MetricsDashboard() {
  const cards = [
    { label: 'LeetCode Rating', value: '1,401', desc: 'Active Problem Solver' },
    { label: 'CodeChef Rating', value: '1,255', desc: 'Competitive Programmer' },
    { label: 'Codeforces Rating', value: '847', desc: 'Contest Participant' },
    { label: 'HackerRank Badge', value: '5 ★', desc: 'Problem Solving' }
  ];

  const categoryallocations = [
    { label: 'Programming Languages (C++/Java/Python)', pct: '45%', color: 'bg-google-blue' },
    { label: 'Core Algorithms & Data Structures', pct: '30%', color: 'bg-google-red' },
    { label: 'Web Development & UI (Bootstrap/JS)', pct: '15%', color: 'bg-google-green' },
    { label: 'Databases & OS Principles', pct: '10%', color: 'bg-google-yellow' }
  ];

  // Raw mock contribution grid matching standard GitHub green hues
  const contributionGridWeeks = Array.from({ length: 42 }, () => 
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 4))
  );

  const getIntensityClass = (value: number) => {
    switch (value) {
      case 0: return 'bg-gray-100 dark:bg-neutral-900 border-gray-200/20';
      case 1: return 'bg-green-100 dark:bg-emerald-950/40 border-green-200/10';
      case 2: return 'bg-green-300 dark:bg-emerald-800/50 border-green-400/10';
      case 3: return 'bg-green-500 dark:bg-emerald-600/70 border-green-600/10';
      default: return 'bg-gray-100 dark:bg-neutral-900';
    }
  };

  return (
    <section id="metrics" className="py-24 border-t border-gray-150 dark:border-neutral-900 bg-white dark:bg-neutral-950 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="text-xs font-mono text-google-yellow mb-2 font-medium">METRICS / TELEMETRY</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white">
            Platform Coding Metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch" id="metrics-grid-layout">
          
          {/* Left Block: Core indices counts */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-google-yellow" />
              <span>Academic Impact Index</span>
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-gray-50/50 dark:bg-neutral-900/30 border border-gray-150 dark:border-neutral-900/60 shadow-sm">
                  <div className="text-xs font-mono text-gray-400 dark:text-neutral-500 uppercase tracking-wide truncate">{card.label}</div>
                  <div className="text-3.5xl font-mono font-medium text-gray-900 dark:text-white mt-3 select-all">{card.value}</div>
                  <div className="text-[10px] text-gray-400 mt-2 font-sans font-light leading-none">{card.desc}</div>
                </div>
              ))}
            </div>

            {/* Citations growth chart SVG */}
            <div className="p-5 rounded-2xl bg-gray-50/50 dark:bg-neutral-900/30 border border-gray-150 dark:border-neutral-900/60 shadow-sm relative">
              <div className="text-xs font-mono text-gray-400 dark:text-neutral-550 mb-4 uppercase">Problems Solved Over Time</div>
              
              <svg className="w-full h-32 text-google-blue" viewBox="0 0 300 120">
                {/* Horizontal reference coordinates */}
                <line x1="20" y1="20" x2="280" y2="20" stroke="currentColor" className="opacity-10 text-gray-400 dark:text-neutral-700" strokeDasharray="3 3" />
                <line x1="20" y1="60" x2="280" y2="60" stroke="currentColor" className="opacity-10 text-gray-400 dark:text-neutral-700" strokeDasharray="3 3" />
                <line x1="20" y1="100" x2="280" y2="100" stroke="currentColor" className="opacity-15 text-gray-400 dark:text-neutral-700" />
                
                {/* Chart Path values: 2021(0), 2022(5), 2023(18), 2024(43), 2025(62), 2026(81) */}
                <path
                  d="M 20 100 Q 72 94, 124 78 T 228 34 L 280 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-google-blue dark:text-blue-500"
                />
                
                {/* Dots along path coordinates */}
                <circle cx="20" cy="100" r="3.5" className="fill-google-blue dark:fill-blue-500" />
                <circle cx="72" cy="94" r="3.5" className="fill-google-blue" />
                <circle cx="124" cy="78" r="3.5" className="fill-google-blue" />
                <circle cx="176" cy="56" r="3.5" className="fill-google-blue" />
                <circle cx="228" cy="34" r="3.5" className="fill-google-blue" />
                <circle cx="280" cy="18" r="4" className="fill-white dark:fill-neutral-900" stroke="currentColor" strokeWidth="2" />
                
                {/* Labels */}
                <text x="20" y="114" className="fill-gray-400 text-[8px] font-mono" textAnchor="middle">21</text>
                <text x="72" y="114" className="fill-gray-400 text-[8px] font-mono" textAnchor="middle">22</text>
                <text x="124" y="114" className="fill-gray-400 text-[8px] font-mono" textAnchor="middle">23</text>
                <text x="176" y="114" className="fill-gray-400 text-[8px] font-mono" textAnchor="middle">24</text>
                <text x="228" y="114" className="fill-gray-400 text-[8px] font-mono" textAnchor="middle">25</text>
                <text x="280" y="114" className="fill-gray-400 text-[8px] font-mono" textAnchor="middle">26</text>
              </svg>
            </div>
          </div>

          {/* Center block: Categories study meters allocation */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Database className="w-4.5 h-4.5 text-google-red" />
              <span>Skill Domains Allocation</span>
            </h3>

            <div className="p-6 rounded-2xl bg-gray-55/50 dark:bg-neutral-900/30 border border-gray-150 dark:border-neutral-900/60 shadow-sm space-y-6 h-[290px] md:h-[352px] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-mono text-gray-400 dark:text-neutral-500 uppercase tracking-wide">Weekly Active Target Allocations:</div>
                <div className="space-y-5">
                  {categoryallocations.map((alloc, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-700 dark:text-neutral-300 font-light">{alloc.label}</span>
                        <span className="font-mono font-medium text-gray-900 dark:text-white">{alloc.pct}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-neutral-800">
                        <div
                          className={`h-full rounded-full ${alloc.color}`}
                          style={{ width: alloc.pct }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-[10px] text-gray-400 dark:text-neutral-550 italic font-mono leading-relaxed border-t border-gray-100 dark:border-neutral-800/60 pt-3 select-none">
                "We structure algorithmic models using optimal data representations to achieve microsecond runtime execution."
              </div>
            </div>
          </div>

          {/* Right Block: Github contributions mockup list */}
          <div className="space-y-6 lg:col-span-1">
              <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CloudLightning className="w-4.5 h-4.5 text-google-green" />
                <span>Code Repositories Activity</span>
              </h3>
  
              <div className="p-6 rounded-2xl bg-gray-50/50 dark:bg-neutral-900/30 border border-gray-150 dark:border-neutral-900/60 shadow-sm h-[290px] md:h-[352px] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-gray-400 dark:text-neutral-550 mb-3 uppercase flex items-center justify-between">
                    <span>GitHub Continuous Commits (Current Year)</span>
                    <span className="text-google-green font-semibold">450 commits</span>
                  </div>
                
                {/* Realistic representation of Git contribution matrix pixels */}
                <div className="grid grid-flow-col gap-[3px] select-none py-1 overflow-x-auto max-w-full" id="github-contributions-grid">
                  {contributionGridWeeks.map((week, wIdx) => (
                    <div key={wIdx} className="grid grid-rows-7 gap-[3px]">
                      {week.map((val, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-2 h-2 rounded-[1.5px] border border-transparent ${getIntensityClass(val)}`}
                          title={`Contributions intensity: ${val}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-1.5 text-[9px] font-mono text-gray-400 mt-2 select-none">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 bg-gray-100 dark:bg-neutral-900 rounded-[1px] border border-gray-200/10" />
                  <div className="w-2.5 h-2.5 bg-green-100 dark:bg-emerald-950/40 rounded-[1px] border border-green-200/5" />
                  <div className="w-2.5 h-2.5 bg-green-300 dark:bg-emerald-800/50 rounded-[1px] border-green-300/5" />
                  <div className="w-2.5 h-2.5 bg-green-500 dark:bg-emerald-600/70 rounded-[1px]" />
                  <span>More</span>
                </div>
              </div>

              {/* Active Branch logs */}
              <div className="border-t border-gray-100 dark:border-neutral-800/60 pt-3 flex flex-col gap-1.5 text-xs text-gray-500 dark:text-neutral-400 font-mono">
                <div className="flex items-center gap-2">
                  <GitPullRequest className="w-3.5 h-3.5 text-google-blue" />
                  <span className="font-semibold text-gray-800 dark:text-neutral-200 truncate">PR #12 Merged</span>
                  <span className="ml-auto text-[10px] text-gray-400">1d ago</span>
                </div>
                <p className="text-[11px] leading-tight text-gray-400 dark:text-neutral-500 pl-5 line-clamp-1">
                  Add image capture interface to crime reporting frontend UI
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
