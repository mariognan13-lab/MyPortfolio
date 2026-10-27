import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, HelpCircle, GitCommit } from 'lucide-react';
import { KNOWLEDGE_NODES, KNOWLEDGE_LINKS } from '../data';
import { KnowledgeNode } from '../types';

export default function KnowledgeMap() {
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(KNOWLEDGE_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<KnowledgeNode | null>(null);
  
  // Custom pan and zoom states
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse handlers for dragging/panning
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only drag if left click is triggered and not clicking on button elements
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (factor: number) => {
    setZoom((prev) => Math.max(0.6, Math.min(2.5, prev * factor)));
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedNode(KNOWLEDGE_NODES[0]);
  };

  // Maps category to styling color codes
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core':
        return { text: 'text-gray-900 dark:text-white', fill: 'fill-gray-900 dark:fill-white', stroke: 'stroke-gray-900 dark:stroke-white', bg: 'bg-gray-100 dark:bg-neutral-800' };
      case 'algorithms':
        return { text: 'text-google-blue', fill: 'fill-google-blue', stroke: 'stroke-google-blue', bg: 'bg-blue-50 dark:bg-blue-950/30' };
      case 'systems':
        return { text: 'text-google-red', fill: 'fill-google-red', stroke: 'stroke-google-red', bg: 'bg-red-50 dark:bg-red-950/30' };
      case 'ai-ml':
        return { text: 'text-google-green', fill: 'fill-google-green', stroke: 'stroke-google-green', bg: 'bg-green-50 dark:bg-green-950/30' };
      case 'math':
        return { text: 'text-google-yellow', fill: 'fill-google-yellow', stroke: 'stroke-google-yellow', bg: 'bg-amber-50 dark:bg-amber-950/30' };
      default:
        return { text: 'text-gray-500', fill: 'fill-gray-500', stroke: 'stroke-gray-500', bg: 'bg-gray-50 dark:bg-neutral-900' };
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-gray-200 dark:border-neutral-900 bg-gray-50/50 dark:bg-neutral-950/10 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mb-16">
          <div className="text-xs font-mono text-google-green mb-2 font-medium">COGNITIVE STRUCTURES / MAP</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white">
            Knowledge Network Graph
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Interactive network graph map container */}
          <div className="lg:col-span-8 flex flex-col relative" id="knowledge-graph-panel">
            <div className="text-xs font-mono text-gray-400 dark:text-neutral-500 mb-3 flex items-center justify-between px-2 select-none">
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Drag inside the map to pan. Use the buttons to zoom. Click a node to inspect details.</span>
              </span>
              <div className="flex gap-2">
                <button onClick={() => handleZoom(1.15)} className="p-1 hover:bg-gray-200 rounded" title="Zoom in"><ZoomIn className="w-4 h-4" /></button>
                <button onClick={() => handleZoom(0.85)} className="p-1 hover:bg-gray-200 rounded" title="Zoom out"><ZoomOut className="w-4 h-4" /></button>
                <button onClick={handleReset} className="p-1 hover:bg-gray-200 rounded" title="Reset map"><RotateCcw className="w-4 h-4" /></button>
              </div>
            </div>

            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className={`w-full aspect-[4/3] rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-inner overflow-hidden cursor-move select-none relative ${
                isDragging ? 'cursor-grabbing' : ''
              }`}
            >
              {/* Actual coordinate system SVG inside viewport */}
              <svg
                className="w-full h-full"
                id="interactive-knowledge-svg"
                viewBox="0 0 800 600"
              >
                {/* Embedded Grid backdrop coordinates */}
                <defs>
                  <pattern id="network-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-100 dark:text-neutral-800" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#network-grid)" />

                {/* Scaled/panned container group */}
                <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
                  
                  {/* Connected Links between elements */}
                  <g id="knowledge-graph-links">
                    {KNOWLEDGE_LINKS.map((link, idx) => {
                      const sourceNode = KNOWLEDGE_NODES.find(n => n.id === link.source);
                      const targetNode = KNOWLEDGE_NODES.find(n => n.id === link.target);
                      if (!sourceNode || !targetNode) return null;

                      const isHighlighted = 
                        (selectedNode && (selectedNode.id === link.source || selectedNode.id === link.target)) ||
                        (hoveredNode && (hoveredNode.id === link.source || hoveredNode.id === link.target));

                      return (
                        <line
                          key={idx}
                          x1={sourceNode.x}
                          y1={sourceNode.y}
                          x2={targetNode.x}
                          y2={targetNode.y}
                          stroke="currentColor"
                          strokeWidth={isHighlighted ? 2.5 : 1.2}
                          className={`transition-all duration-300 ${
                            isHighlighted 
                              ? 'text-google-blue dark:text-blue-500 opacity-80' 
                              : 'text-gray-200 dark:text-neutral-800 opacity-50'
                          }`}
                        />
                      );
                    })}
                  </g>

                  {/* Nodes list */}
                  <g id="knowledge-graph-nodes">
                    {KNOWLEDGE_NODES.map((node) => {
                      const colors = getCategoryColor(node.category);
                      const isSelected = selectedNode?.id === node.id;
                      const isHovered = hoveredNode?.id === node.id;

                      return (
                        <g
                          key={node.id}
                          className="cursor-pointer transition-all duration-200"
                          transform={`translate(${node.x}, ${node.y})`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedNode(node);
                          }}
                          onMouseEnter={() => setHoveredNode(node)}
                          onMouseLeave={() => setHoveredNode(null)}
                        >
                          {/* Radial hover ring */}
                          <circle
                            r={isSelected ? 26 : isHovered ? 20 : 14}
                            className={`fill-transparent border transition-all duration-300 ${colors.stroke}`}
                            strokeWidth="1"
                            strokeDasharray="4 2"
                            style={{ animation: 'spin 40s linear infinite' }}
                          />

                          {/* Center dot solid circle */}
                          <circle
                            r={isSelected ? 10 : isHovered ? 8 : 6}
                            className={`transition-all duration-300 ${colors.fill}`}
                          />

                          {/* Node label text */}
                          <text
                            y={isSelected ? 38 : isHovered ? 32 : 24}
                            className={`text-[11px] font-display font-medium text-center transition-all ${
                              isSelected 
                                ? 'fill-gray-900 dark:fill-white font-semibold transform translate-y-1' 
                                : isHovered 
                                  ? 'fill-gray-800 dark:fill-neutral-200' 
                                  : 'fill-gray-400 dark:fill-neutral-500'
                            }`}
                            textAnchor="middle"
                          >
                            {node.label}
                          </text>
                        </g>
                      );
                    })}
                  </g>

                </g>
              </svg>
            </div>
          </div>

          {/* Right panel: Information inspector drawer sheet panel */}
          <div className="lg:col-span-4" id="knowledge-graph-inspector">
            {selectedNode ? (
              <div className="h-full bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded bg-gray-100 dark:bg-neutral-950 text-gray-600 dark:text-neutral-400 uppercase">
                      {selectedNode.category} MODULE
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      ID: {selectedNode.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
                    {selectedNode.label}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed font-light">
                    {selectedNode.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 dark:border-neutral-800/60 space-y-3">
                    <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase">Key Milestones & Integration Points</h4>
                    <ul className="space-y-2.5">
                      {selectedNode.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-gray-600 dark:text-neutral-300 font-light">
                          <GitCommit className="w-4 h-4 text-google-blue mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-neutral-800/50 flex select-none">
                  <button
                    onClick={() => alert(`Reviewing core source codes connected to: ${selectedNode.label}`)}
                    className="w-full py-3 px-5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 text-center text-xs font-semibold text-gray-700 dark:text-neutral-300 cursor-pointer"
                  >
                    Examine Code Dependencies
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/80 rounded-2xl p-6 flex items-center justify-center text-center">
                <span className="text-xs font-mono text-gray-400 dark:text-neutral-500">
                  Select a node from the map network to view systems engineering details.
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
