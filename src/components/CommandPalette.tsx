import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, BookOpen, Terminal, Code2, LineChart, FileText, Sparkles, X } from 'lucide-react';
import { RESEARCH_PAPERS, PROJECTS, BLOG_POSTS, READ_ITEMS } from '../data';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Perform search across different categories of items
  const matchedResearch = RESEARCH_PAPERS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.domain.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 3);

  const matchedProjects = PROJECTS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.techStack.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  ).slice(0, 3);

  const matchedBlog = BLOG_POSTS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 3);

  const matchedLibrary = READ_ITEMS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 3);

  const handleItemClick = (id: string, type: 'research' | 'projects' | 'blog' | 'library') => {
    onClose();
    setTimeout(() => {
      let targetId = '';
      if (type === 'research') targetId = 'research';
      else if (type === 'projects') targetId = 'projects';
      else if (type === 'blog') targetId = 'blog';
      else if (type === 'library') targetId = 'library';

      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Add a subtle brief highlight animation on the item card
        const cardElements = element.querySelectorAll(`[id^="${id}"]`);
        cardElements.forEach(card => {
          card.classList.add('ring-2', 'ring-google-blue', 'scale-102');
          setTimeout(() => {
            card.classList.remove('ring-2', 'ring-google-blue', 'scale-102');
          }, 1500);
        });
      }
    }, 100);
  };

  const hasResults = matchedResearch.length > 0 || matchedProjects.length > 0 || matchedBlog.length > 0 || matchedLibrary.length > 0;

  return (
    <div
      ref={overlayRef}
      id="command-palette-overlay"
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 md:px-0 bg-neutral-900/60 dark:bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        id="command-palette-modal"
        className="w-full max-w-2xl bg-white dark:bg-neutral-900 border border-gray-250 dark:border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[75vh]"
      >
        {/* Search header container */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50">
          <Search className="w-5 h-5 text-gray-400 dark:text-neutral-500" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent text-sm text-gray-800 dark:text-neutral-100 placeholder-gray-400 dark:placeholder-neutral-500 border-none outline-none focus:ring-0 focus:border-none"
            placeholder="Search credentials, projects, blog logs, metrics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-neutral-300 rounded"
            title="Close command panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic content window */}
        <div className="flex-1 overflow-y-auto p-2" id="command-palette-results">
          {searchTerm.length === 0 && (
            <div className="px-3 py-4 text-xs text-gray-400 dark:text-neutral-500 font-mono flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-google-yellow" />
              <span>SEARCH OVERVIEW OR LAUNCH TARGET NAVIGATION:</span>
            </div>
          )}

          {/* Matches Lists */}
          {matchedResearch.length > 0 && (
            <div className="mb-4">
              <div className="px-3 py-1.5 text-[11px] font-mono tracking-wider font-semibold text-google-blue uppercase">CERTIFICATIONS & CREDENTIALS</div>
              <div className="space-y-0.5">
                {matchedResearch.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id, 'research')}
                    className="w-full text-left p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 flex items-start gap-3 transition-colors group cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-google-blue mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-800 dark:text-neutral-200 group-hover:text-google-blue dark:group-hover:text-blue-400">{item.title}</div>
                      <div className="text-[11px] text-gray-400 dark:text-neutral-500 font-mono mt-0.5">{item.domain} · {item.venue}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedProjects.length > 0 && (
            <div className="mb-4">
              <div className="px-3 py-1.5 text-[11px] font-mono tracking-wider font-semibold text-google-red uppercase">ENGINEERING SYSTEMS</div>
              <div className="space-y-0.5">
                {matchedProjects.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id, 'projects')}
                    className="w-full text-left p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 flex items-start gap-3 transition-colors group cursor-pointer"
                  >
                    <Code2 className="w-4 h-4 text-gray-400 group-hover:text-google-red mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-800 dark:text-neutral-200 group-hover:text-google-red dark:group-hover:text-red-400">{item.title}</div>
                      <div className="text-xs text-gray-500 dark:text-neutral-400 mt-1 line-clamp-1">{item.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedBlog.length > 0 && (
            <div className="mb-4">
              <div className="px-3 py-1.5 text-[11px] font-mono tracking-wider font-semibold text-google-green uppercase">BLOG LOGS</div>
              <div className="space-y-0.5">
                {matchedBlog.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id, 'blog')}
                    className="w-full text-left p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 flex items-start gap-3 transition-colors group cursor-pointer"
                  >
                    <Terminal className="w-4 h-4 text-gray-400 group-hover:text-google-green mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-800 dark:text-neutral-200 group-hover:text-google-green dark:group-hover:text-green-400">{item.title}</div>
                      <div className="text-[11px] text-gray-400 dark:text-neutral-500 font-mono mt-0.5">{item.category} · {item.readingTime}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedLibrary.length > 0 && (
            <div className="mb-2">
              <div className="px-3 py-1.5 text-[11px] font-mono tracking-wider font-semibold text-google-yellow uppercase">LITERARY SHELVES</div>
              <div className="space-y-0.5">
                {matchedLibrary.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id, 'library')}
                    className="w-full text-left p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 flex items-start gap-3 transition-colors group cursor-pointer"
                  >
                    <Compass className="w-4 h-4 text-gray-400 group-hover:text-google-yellow mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-800 dark:text-neutral-200 group-hover:text-google-yellow dark:group-hover:text-yellow-400">{item.title}</div>
                      <div className="text-xs text-gray-500 dark:text-neutral-400 select-none">{item.creator}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {!hasResults && (
            <div className="p-8 text-center text-sm text-gray-400 dark:text-neutral-500 font-mono">
              No parameters match your search term "{searchTerm}"
            </div>
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-3 border-t border-gray-100 dark:border-neutral-800/80 bg-gray-50 dark:bg-neutral-900/80 text-[11px] text-gray-400 dark:text-neutral-500 font-mono flex items-center justify-between select-none">
          <div className="flex gap-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
