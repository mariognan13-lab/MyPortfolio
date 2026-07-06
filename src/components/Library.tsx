import React, { useState } from 'react';
import { Search, Compass, BookOpen, GraduationCap, Star, ArrowUpRight, Check } from 'lucide-react';
import { READ_ITEMS } from '../data';
import { ReadItem } from '../types';

export default function LibrarySection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<ReadItem | null>(READ_ITEMS[0]);

  const tabs = ['All', 'book', 'paper', 'course'];

  const filteredItems = READ_ITEMS.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = selectedType === 'All' || item.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'book': return Compass;
      case 'paper': return BookOpen;
      default: return GraduationCap;
    }
  };

  const getGoogleColorBadge = (type: string) => {
    switch (type) {
      case 'book': return 'text-google-blue bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/30';
      case 'paper': return 'text-google-red bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/30';
      default: return 'text-google-green bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900/30';
    }
  };

  return (
    <section id="library" className="py-24 border-t border-gray-150 dark:border-neutral-900 bg-white dark:bg-neutral-950 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header titles */}
        <div className="mb-16">
          <div className="text-xs font-mono text-google-green mb-2 font-medium">LIBRARY / REFLECTIONS</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white">
            Publications & Readings
          </h2>
        </div>

        {/* Dashboard search navigation frame */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between" id="library-nav-controls">
          {/* Library Search Input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-neutral-550" />
            <input
              type="text"
              id="library-search-field"
              className="w-full pl-10 pr-4 py-2 text-xs font-mono bg-gray-50/50 dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800 rounded-xl outline-none focus:ring-1 focus:ring-google-green placeholder-gray-400 dark:placeholder-neutral-500 text-gray-800 dark:text-neutral-100"
              placeholder="Search books, courses, authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Type filters tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                id={`filter-library-${tab}`}
                onClick={() => setSelectedType(tab)}
                className={`px-4 py-2 rounded-full font-mono text-[10px] font-bold cursor-pointer transition-all uppercase ${
                  selectedType === tab
                    ? 'bg-google-green text-white'
                    : 'bg-gray-50/50 dark:bg-neutral-900 border border-gray-200/65 dark:border-neutral-800 text-gray-600 dark:text-neutral-450 hover:bg-gray-55'
                }`}
              >
                {tab === 'All' ? 'ALL ACQUISITIONS' : `${tab.toUpperCase()}S`}
              </button>
            ))}
          </div>
        </div>

        {/* Library Grid Layout split: left list, right detail item */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="library-layout-grid">
          
          {/* Left panel shelf lists */}
          <div className="lg:col-span-7 space-y-3 max-h-[580px] overflow-y-auto pr-2" id="library-shelf-list">
            {filteredItems.map((item: ReadItem) => {
              const ItemIcon = getIcon(item.type);
              const badgeColors = getGoogleColorBadge(item.type);
              const isSelected = selectedItem?.id === item.id;

              return (
                <div
                  key={item.id}
                  id={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex gap-4 ${
                    isSelected
                      ? 'bg-gray-50/60 dark:bg-neutral-900/50 border-google-green/40 shadow-sm'
                      : 'bg-white dark:bg-neutral-900 border-gray-200/60 dark:border-neutral-800 hover:bg-gray-50/50 dark:hover:bg-neutral-900/30'
                  }`}
                >
                  {/* Category mini icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 ${badgeColors}`}>
                    <ItemIcon className="w-5 h-5" />
                  </div>

                  {/* Context block */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono font-medium text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                          {item.category}
                        </span>
                        <div className="flex gap-0.5 ml-auto text-google-yellow select-none">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-sm font-display font-bold text-gray-950 dark:text-white truncate mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-neutral-400 leading-none truncate mt-2 font-mono">
                      By {item.creator}
                    </p>
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="p-8 text-center text-sm font-mono text-gray-400 dark:text-neutral-500">
                No literature matches query "{searchTerm}"
              </div>
            )}
          </div>

          {/* Right panel: Active review book inspector */}
          <div className="lg:col-span-5" id="library-item-inspector">
            {selectedItem ? (
              <div className="bg-white dark:bg-neutral-900 border border-gray-204 dark:border-neutral-800 rounded-2xl p-6 md:p-8 space-y-6 md:h-full flex flex-col justify-between">
                <div className="space-y-4">
                  
                  {/* Rating stars layout */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded bg-gray-100 dark:bg-neutral-950 text-gray-500 uppercase">
                      {selectedItem.type} ANALYSIS
                    </span>
                    <div className="flex gap-0.5 text-google-yellow select-none">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < selectedItem.rating ? 'fill-current' : 'text-gray-200 dark:text-neutral-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs font-mono text-google-green">
                      Written by: {selectedItem.creator} · Finished: {selectedItem.dateFinished}
                    </p>
                  </div>

                  <div className="prose prose-sm dark:prose-invert">
                    <h4 className="text-[10px] font-mono tracking-wider font-semibold text-gray-400 uppercase mb-2">Subject Summary</h4>
                    <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed font-light font-sans">
                      {selectedItem.summary}
                    </p>
                  </div>

                  {/* Bullet Key Insights */}
                  <div className="pt-4 border-t border-gray-100 dark:border-neutral-850 space-y-3">
                    <h4 className="text-[10px] font-mono font-semibold tracking-wider text-gray-400 uppercase">Key Structural Insights</h4>
                    <ul className="space-y-2">
                      {selectedItem.keyInsights.map((insight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-neutral-300 font-light">
                          <Check className="w-4 h-4 text-google-green mt-0.5 flex-shrink-0" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Personal Annotations */}
                  <div className="pt-4 border-t border-gray-100 dark:border-neutral-850">
                    <h4 className="text-[10px] font-mono font-semibold tracking-wider text-gray-400 uppercase mb-2">Personal Critical Review Notes</h4>
                    <div className="p-3.5 bg-gray-50 dark:bg-neutral-950 border border-gray-150 dark:border-neutral-900 rounded-xl font-sans text-xs text-gray-600 dark:text-neutral-400 italic font-light leading-relaxed">
                      "{selectedItem.notes}"
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-neutral-800/60 select-none">
                  <button
                    onClick={() => alert(`Reviewing complete metadata citation tags of [${selectedItem.title}]`)}
                    className="w-full flex justify-center items-center gap-2 py-3 px-5 rounded-xl bg-google-green hover:bg-green-600 text-white text-center text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <span>Request Citation Manuscript</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ) : (
              <div className="h-full bg-white dark:bg-neutral-900 border border-gray-150 rounded-2xl p-6 flex items-center justify-center text-center">
                <span className="text-xs font-mono text-gray-400">
                  Select literary record to read reviews and annotations.
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
