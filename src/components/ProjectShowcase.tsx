import React, { useState } from 'react';
import { Code, ExternalLink, Github, Layers, ArrowUpRight, MonitorPlay } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function ProjectShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Algorithms', 'Systems', 'AI', 'Data Science', 'Web Development'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  // Generates stylized inline visual vector headers for thumbnails matching each project domain
  const renderProjectVisualTheme = (category: string) => {
    switch (category) {
      case 'Systems':
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-5 relative overflow-hidden font-mono text-[10px] text-google-red/80 select-none">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid" style={{ backgroundImage: 'radial-gradient(#EA4335 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            <div className="flex justify-between items-start">
              <span>CRITICAL_FS_OK</span>
              <span className="animate-pulse">● STORAGE_STABLE</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold tracking-tighter text-white">SYSTEMS ENG</div>
              <div className="text-gray-500 text-[9px]">LOCK-FREE DECENTRALIZED POOLS</div>
            </div>
            <div className="flex justify-between items-end border-t border-google-red/20 pt-2 text-[9px] text-gray-500">
              <span>0x7FFF3B8F09A0</span>
              <span>latency: 4.8µs</span>
            </div>
          </div>
        );
      case 'AI':
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-5 relative overflow-hidden font-mono text-[10px] text-google-green/80 select-none">
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#34A853 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="flex justify-between items-start">
              <span>JIT_COMPILER_RUN</span>
              <span>100% QUANTIZED</span>
            </div>
            <div className="flex flex-col items-center justify-center py-2 flex-grow">
              <svg className="w-12 h-12 text-google-green animate-spin" style={{ animationDuration: '24s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="50" cy="50" r="35" strokeDasharray="5 5" />
                <circle cx="50" cy="50" r="20" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" className="fill-google-green" />
              </svg>
            </div>
            <div className="flex justify-between items-end border-t border-google-green/20 pt-2 text-[9px] text-gray-500">
              <span>WEIGHT_QUANT: 4-BIT</span>
              <span>OPS_FUSED: 48</span>
            </div>
          </div>
        );
      case 'Algorithms':
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-5 relative overflow-hidden font-mono text-[10px] text-google-blue/80 select-none">
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4285F4 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
            <div className="flex justify-between items-start">
              <span>A* SEARCH RUNNING</span>
              <span>WORKERS_ACTIVE: 8</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold tracking-tighter text-white">CONCURRENT SEARCH</div>
              <div className="text-gray-500 text-[9px]">ASYNC GRAPH PARALLELIZATION</div>
            </div>
            <div className="flex justify-between items-end border-t border-google-blue/20 pt-2 text-[9px] text-gray-500">
              <span>O(V * log V + E)</span>
              <span>120 FPS STEADY</span>
            </div>
          </div>
        );
      case 'Data Science':
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-5 relative overflow-hidden font-mono text-[10px] text-google-yellow/80 select-none">
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FBBC05 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
            <div className="flex justify-between items-start">
              <span>TOPOLOGY_ACTIVE</span>
              <span>NETFLOW COMPRESSION</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold tracking-tighter text-white">NETWORK ANALYTICS</div>
              <div className="text-gray-500 text-[9px]">TOPOLOGICAL KERNEL ANALYSIS</div>
            </div>
            <div className="flex justify-between items-end border-t border-google-yellow/20 pt-2 text-[9px] text-gray-500">
              <span>CLI_GRAPH_VERTICES: 12K</span>
              <span>BIVALENT_CYCLES: 142</span>
            </div>
          </div>
        );
      case 'Web Development':
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-5 relative overflow-hidden font-mono text-[10px] text-google-blue/80 select-none">
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4285F4 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
            <div className="flex justify-between items-start">
              <span>HTTP_SERVE_FRONTEND</span>
              <span className="text-google-green">● PORT_3000_LIVE</span>
            </div>
            <div className="flex-grow flex flex-col justify-center py-2">
              <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                <div className="w-2/3 h-full bg-google-blue animate-pulse" />
              </div>
              <div className="flex justify-between text-[8px] text-gray-500 mt-1.5">
                <span>RESPONSIVE GRID</span>
                <span>BOOTSTRAP 100%</span>
              </div>
            </div>
            <div className="flex justify-between items-end border-t border-google-blue/20 pt-2 text-[9px] text-gray-500">
              <span>CSS GRID / FLEXBOX</span>
              <span>CAMERA API</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-5 relative overflow-hidden font-mono text-[10px] text-white/50 select-none">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            <div className="flex justify-between items-start">
              <span>VITE_SERVE_PORT3000</span>
              <span>READY</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold tracking-tighter-text text-white">REACTIVE SYSTEMS</div>
              <div className="text-gray-500 text-[9px]">MODULAR MOTION RENDERING</div>
            </div>
            <div className="flex justify-between items-end border-t border-white/10 pt-2 text-[9px] text-gray-550">
              <span>HTML5 CANVAS ADAPTER</span>
              <span>HMR_DISABLED</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-gray-150 dark:border-neutral-900 bg-white dark:bg-neutral-950 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-google-blue mb-2 font-medium">BUILD / PLATFORMS</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white">
              Systems Engineering
            </h2>
          </div>

          {/* Filtering pills */}
          <div className="flex flex-wrap gap-2" id="project-filters">
            {filters.map((fil) => (
              <button
                key={fil}
                id={`filter-project-${fil.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(fil)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-medium cursor-pointer transition-all ${
                  selectedFilter === fil
                    ? 'bg-google-blue text-white shadow-sm'
                    : 'bg-gray-50/50 dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-55'
                }`}
              >
                {fil}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-white dark:bg-neutral-900 border border-gray-200/65 dark:border-neutral-800/80 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Specialized Thumbnail Header */}
              <div className="aspect-[16/10] w-full border-b border-gray-150 dark:border-neutral-800 overflow-hidden relative">
                {renderProjectVisualTheme(project.category)}
                
                {/* Micro Category Tag Floating Overlay */}
                <span className="absolute top-4 right-4 bg-white/90 dark:bg-neutral-900/95 backdrop-blur shadow-sm px-2.5 py-1 text-[10px] font-mono rounded-full font-medium text-gray-700 dark:text-neutral-300">
                  {project.category.toUpperCase()}
                </span>
              </div>

              {/* Card Context Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-gray-950 dark:text-white tracking-tight flex items-center justify-between group-hover:text-google-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Dependencies tag row */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-gray-50 dark:bg-neutral-950 text-gray-500 dark:text-neutral-400 px-2 py-0.5 rounded border border-gray-100 dark:border-neutral-800/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-neutral-800/60">
                    <button
                      onClick={() => alert(`Simulating execution playground of demo: ${project.title}`)}
                      className="flex-1 py-2 px-4 rounded-xl bg-gray-50 hover:bg-google-blue hover:text-white dark:bg-neutral-950 border border-gray-150 dark:border-neutral-800 text-center text-xs font-semibold text-gray-700 dark:text-neutral-300 cursor-pointer flex items-center justify-center gap-1.5 transition-all"
                    >
                      <MonitorPlay className="w-3.5 h-3.5" />
                      <span>Live Sandbox</span>
                    </button>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-gray-150 dark:border-neutral-800 text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-950 transition-colors"
                      title="Explore Source Code repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
