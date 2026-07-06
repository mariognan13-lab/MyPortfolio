import React, { useState } from 'react';
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, CornerDownRight, X, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function BlogSection() {
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Bulletproof custom markdown-to-HTML parser function
  const parseMarkdownToHTML = (md: string) => {
    let html = md;
    
    // Replace headers
    html = html.replace(/^##\s+(.+)$/gm, '<h2 id="$1" class="text-xl font-display font-semibold mt-6 mb-3 text-gray-950 dark:text-white">$1</h2>');
    html = html.replace(/^###\s+(.+)$/gm, '<h3 class="text-lg font-display font-medium mt-4 mb-2 text-gray-800 dark:text-neutral-200">$1</h3>');
    
    // Replace code blocks
    html = html.replace(/```cpp([\s\S]*?)```/gm, '<pre class="bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-4 rounded-xl font-mono text-xs overflow-x-auto my-4 text-gray-850 dark:text-neutral-200 max-w-full"><code>$1</code></pre>');
    html = html.replace(/```c([\s\S]*?)```/gm, '<pre class="bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-4 rounded-xl font-mono text-xs overflow-x-auto my-4 text-gray-850 dark:text-neutral-200 max-w-full"><code>$1</code></pre>');
    html = html.replace(/```([\s\S]*?)```/gm, '<pre class="bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-4 rounded-xl font-mono text-xs overflow-x-auto my-4 text-gray-850 dark:text-neutral-200 max-w-full"><code>$1</code></pre>');
    
    // Inline code tags
    html = html.replace(/`([^`]+)`/g, '<code class="font-mono text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-google-blue dark:text-blue-400 font-medium">$1</code>');
    
    // Strong tags
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-950 dark:text-white">$1</strong>');
    
    // Bullet lists
    html = html.replace(/^\s*-\s*(.+)$/gm, '<li class="ml-4 list-disc text-gray-700 dark:text-neutral-350 leading-relaxed py-0.5">$1</li>');
    
    // Ordered lists
    html = html.replace(/^\s*\d+\.\s*(.+)$/gm, '<li class="ml-4 list-decimal text-gray-700 dark:text-neutral-350 leading-relaxed py-0.5">$1</li>');

    // Split paragraphs safely by double-newlines
    const lines = html.split('\n\n');
    const parsedLines = lines.map(line => {
      // If line is already an HTML element, leave it
      if (line.trim().startsWith('<h') || line.trim().startsWith('<pre') || line.trim().startsWith('<li') || line.trim().startsWith('<code')) {
        return line;
      }
      if (line.trim().length === 0) return '';
      return `<p class="text-gray-600 dark:text-neutral-300 leading-relaxed text-sm font-light select-text mb-4">$inline_para</p>`.replace('$inline_para', line.trim());
    });

    return parsedLines.join('\n');
  };

  const handleShare = (post: BlogPost) => {
    alert(`Generating share citation link for: ${post.title}`);
  };

  return (
    <section id="blog" className="py-24 border-t border-gray-150 dark:border-neutral-900 bg-gray-50/50 dark:bg-neutral-950/20 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title header */}
        <div className="mb-16">
          <div className="text-xs font-mono text-google-green mb-2 font-medium">LATEST WRITEUPS / RESEARCH BLOCKS</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white animate-fade-in">
            Reflections & Analysis Logs
          </h2>
        </div>

        {/* Blog Posts list Showcase */}
        {!readingPost ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
            {BLOG_POSTS.map((post: BlogPost) => (
              <article
                key={post.id}
                id={post.id}
                onClick={() => setReadingPost(post)}
                className="bg-white dark:bg-neutral-900 border border-gray-200/65 dark:border-neutral-800/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-google-green/45 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Thumbnail Image display */}
                  <div className="aspect-[16/9] w-full border-b border-gray-150 dark:border-neutral-800 relative overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 select-none"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-neutral-950/95 backdrop-blur px-2.5 py-1 text-[9px] font-mono rounded-full font-bold text-gray-650 dark:text-neutral-400">
                      {post.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Context body info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-gray-950 dark:text-white tracking-tight leading-snug group-hover:text-google-green transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-550 dark:text-neutral-450 leading-relaxed font-light line-clamp-2">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Footer read actions overlay */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-gray-400 group-hover:text-google-green transition-colors select-none font-mono font-medium">
                  <span className="flex items-center gap-1.5">
                    <CornerDownRight className="w-3.5 h-3.5" />
                    <span>LAUNCH READING INLINE</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* High-end Immersive Reading Mode layout overlay */
          <div className="bg-white dark:bg-neutral-900 border border-gray-200/65 dark:border-neutral-800 rounded-3xl p-6 md:p-12 space-y-8 max-w-4xl mx-auto shadow-2xl relative animate-scale-up" id="reading-mode-panel">
            
            {/* Top exit controller header */}
            <div className="flex items-center justify-between select-none pb-4 border-b border-gray-100 dark:border-neutral-800">
              <button
                onClick={() => setReadingPost(null)}
                className="flex items-center gap-1.5 text-xs font-mono font-bold text-gray-500 hover:text-gray-900 dark:text-neutral-500 dark:hover:text-white cursor-pointer"
                title="Exit Reading mode logs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>EXIT LAB LOGS</span>
              </button>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleShare(readingPost)}
                  className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                  title="Share post citation"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setReadingPost(null)}
                  className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                  title="Close manuscript reading"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Reading details container */}
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-wider font-semibold bg-green-50 dark:bg-green-950/40 text-google-green border border-green-100 dark:border-green-900/30 px-3 py-1 rounded-full">
                  {readingPost.category.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-gray-400 dark:text-neutral-500">
                  {readingPost.date} · {readingPost.readingTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-950 dark:text-white tracking-tight leading-[1.1]">
                {readingPost.title}
              </h1>

              <p className="text-sm md:text-base text-gray-500 dark:text-neutral-400 font-light max-w-2xl leading-relaxed italic border-l-2 border-google-green pl-4 py-1">
                {readingPost.summary}
              </p>
            </header>

            {/* Reading Mode Graphic Image header */}
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-gray-150 dark:border-neutral-800">
              <img
                src={readingPost.featuredImage}
                alt={readingPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none grayscale cursor-pointer hover:grayscale-0 transition-opacity"
              />
            </div>

            {/* Body of processed dynamic content */}
            <div
              className="markdown-body prose prose-sm md:prose-base dark:prose-invert max-w-none pt-4"
              dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(readingPost.content) }}
            />

            {/* Bottom reading indicator / feedback row */}
            <div className="pt-8 border-t border-gray-100 dark:border-neutral-800 flex flex-col md:flex-row gap-6 items-center justify-between select-none text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-google-yellow" />
                <span>You have analyzed this systems manuscript fully.</span>
              </div>
              <button
                onClick={() => setReadingPost(null)}
                className="w-full md:w-auto py-2.5 px-6 rounded-full bg-google-green hover:bg-green-600 text-white font-sans text-xs font-semibold cursor-pointer text-center"
              >
                Return to Lab Articles Shelf
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
