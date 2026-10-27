import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex items-center gap-2 select-none">
          <Cpu className="w-4 h-4 text-google-blue" />
          <span className="font-display font-medium text-sm tracking-tight text-gray-500 dark:text-neutral-400">
            Mario Seelam <span className="text-xs text-google-blue font-mono font-normal">/all-rights-reserved</span>
          </span>
        </div>

        {/* Dynamic details / local time */}
        <div className="text-xs font-mono text-gray-400 dark:text-neutral-500 text-center md:text-right space-y-1">
          <div>© {currentYear} Mario Seelam. Computer Science Portfolio.</div>
          <div>ESTABLISHED ON SECURE METADATA CLOUD SYSTEMS · STATUS: LIVE</div>
        </div>

      </div>
    </footer>
  );
}
