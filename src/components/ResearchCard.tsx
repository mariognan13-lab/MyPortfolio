import React, { useState } from 'react';
import { BookOpen, ExternalLink, MessageSquare, Award, ChevronDown, ChevronUp, Share2, Star } from 'lucide-react';
import { RESEARCH_PAPERS } from '../data';
import { ResearchPaper } from '../types';

export default function ResearchSection() {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [expandedPapers, setExpandedPapers] = useState<Record<string, boolean>>({});

  const domains = ['All', 'Python Programming', 'Software Development', 'Frontend Engineering'];

  const toggleExpand = (id: string) => {
    setExpandedPapers((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredPapers = selectedDomain === 'All'
    ? RESEARCH_PAPERS
    : RESEARCH_PAPERS.filter(p => p.domain === selectedDomain);

  return (
    <section id="research" className="py-24 border-t border-gray-150 dark:border-neutral-900 bg-gray-50/50 dark:bg-neutral-950/20 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-google-red mb-2 font-medium">CREDENTIALS / ACQUISITIONS</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white">
              Certifications & Credentials
            </h2>
          </div>
          
          {/* Domain filtering pills */}
          <div className="flex flex-wrap gap-2" id="research-domain-filters">
            {domains.map((dom) => (
              <button
                key={dom}
                id={`filter-research-${dom.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedDomain(dom)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-medium cursor-pointer transition-all ${
                  selectedDomain === dom
                    ? 'bg-google-red text-white'
                    : 'bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-55'
                }`}
              >
                {dom}
              </button>
            ))}
          </div>
        </div>

        {/* Papers Grid */}
        <div className="space-y-6" id="research-papers-list">
          {filteredPapers.map((paper: ResearchPaper) => {
            const isExpanded = !!expandedPapers[paper.id];
            
            return (
              <div
                key={paper.id}
                id={paper.id}
                className="bg-white dark:bg-neutral-900 border border-gray-200/65 dark:border-neutral-800/80 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Paper Header */}
                <div 
                  onClick={() => toggleExpand(paper.id)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono font-medium text-google-red bg-red-50 dark:bg-red-950/40 px-2.5 py-1 rounded-full border border-red-100 dark:border-red-900/30">
                        {paper.domain.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-gray-400 dark:text-neutral-500 font-light">
                        {paper.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-gray-900 dark:text-white tracking-tight group-hover:text-google-red transition-colors">
                      {paper.title}
                    </h3>

                    <p className="text-xs font-mono text-gray-500 dark:text-neutral-400 mt-1 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-google-yellow" />
                      <span>{paper.venue}</span>
                    </p>
                  </div>

                  {/* Verification indicator */}
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-400 dark:text-neutral-500 self-start md:self-auto bg-gray-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-gray-100 dark:border-neutral-800/50">
                    <div className="text-center px-2">
                      <span className="block text-sm font-semibold text-google-green">Verified</span>
                      <span className="text-[9px] uppercase tracking-wider text-gray-400 font-medium">Credential</span>
                    </div>
                  </div>
                </div>

                {/* Abstract Preview */}
                <div className="px-6 md:px-8 pb-4">
                  <p className="text-sm text-gray-600 dark:text-neutral-300 font-light leading-relaxed line-clamp-2">
                    {paper.abstract}
                  </p>
                </div>

                {/* Expandable Details Container */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-8 pt-4 border-t border-gray-100 dark:border-neutral-800/60 bg-gray-50/50 dark:bg-neutral-900/20 space-y-6 animate-fade-in">
                    
                    {/* Abstract full */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-400 dark:text-neutral-500 mb-2 uppercase">Credential Overview</h4>
                      <p className="text-sm text-gray-650 dark:text-neutral-300 font-light leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>

                    {/* Key Findings List */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-400 dark:text-neutral-500 mb-3 uppercase">Key Learnings & Core Competencies</h4>
                      <ul className="space-y-2.5">
                        {paper.keyFindings.map((finding, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-neutral-300 font-light">
                            <span className="w-1.5 h-1.5 bg-google-red rounded-full mt-2 self-start flex-shrink-0" />
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies tags */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-400 dark:text-neutral-500 mb-2 uppercase">Covered Tech & Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {paper.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-gray-600 dark:text-neutral-400 bg-gray-100 dark:bg-neutral-800/80 px-2.5 py-1 rounded border border-gray-200/20 dark:border-neutral-700/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions inside Card */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-200/50 dark:border-neutral-800/50">
                      <button
                        onClick={() => alert(`Reviewing credential details for [${paper.title}]`)}
                        className="py-2.5 px-5 rounded-full bg-google-red hover:bg-red-600 text-white font-sans text-xs font-semibold shadow-sm cursor-pointer transition-colors"
                      >
                        View Credential Details
                      </button>
                    </div>

                  </div>
                )}

                {/* Direct action toggles bottom anchor */}
                <div 
                  onClick={() => toggleExpand(paper.id)}
                  className="bg-gray-50/40 dark:bg-neutral-900/10 border-t border-gray-100 dark:border-neutral-850/50 py-2.5 text-center flex items-center justify-center gap-1 cursor-pointer hover:bg-gray-55 dark:hover:bg-neutral-800/20 text-xs text-gray-400 dark:text-neutral-500 font-mono transition-colors"
                >
                  {isExpanded ? (
                    <>
                      <span>COLLAPSE DETAIL</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>EXPAND CERTIFICATION & TOPIC HIGHLIGHTS</span>
                      <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
