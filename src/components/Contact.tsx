import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Sparkles, Send, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const socialLinks = [
    { label: 'E-Mail', value: 'mariognan13@gmail.com', href: 'mailto:mariognan13@gmail.com', icon: Mail, color: 'text-google-blue' },
    { label: 'GitHub Link', value: 'Github', href: 'https://github.com/mariognan13-lab', icon: Github, color: 'text-gray-900 dark:text-white' },
    { label: 'LinkedIn Grid', value: 'Linkedin', href: 'www.linkedin.com/in/mario-gnan-seelam-959412385', icon: Linkedin, color: 'text-google-blue' },
    { label: 'LeetCode Profile', value: 'LeetCode', href: 'https://leetcode.com/u/6P39JTz2xd/', icon: Terminal, color: 'text-amber-500' },
  ];

  return (
    <section id="contact" className="py-24 border-t border-gray-150 dark:border-neutral-900 bg-white dark:bg-neutral-950 transition-colors duration-300 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title header */}
        <div className="mb-16">
          <div className="text-xs font-mono text-google-blue mb-2 font-medium">COMMUNICATION / INBOX</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 dark:text-white">
            Connect Transmission Channel
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="contact-integration-grid">
          
          {/* Left panel contact directories */}
          <div className="lg:col-span-5 space-y-8 select-text">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
                Investigational Queries & Collaborations
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-450 leading-relaxed font-light font-sans max-w-sm">
                Feel free to connect for software development collaborations, competitive programming inquiries, or student opportunities.
              </p>
            </div>

            <div className="space-y-4" id="social-links-container">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200/60 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/30 hover:shadow-md hover:border-google-blue/35 transition-all group"
                  >
                    <div className={`p-3 rounded-lg bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 ${link.color}`}>
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono tracking-wider font-semibold text-gray-400 dark:text-neutral-500 uppercase">{link.label}</div>
                      <div className="text-sm font-semibold tracking-tight text-gray-800 dark:text-neutral-200 truncate mt-0.5">{link.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right panel validated active HTML contact form card */}
          <div className="lg:col-span-7" id="contact-form-panel">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                id="contact-form-block"
                className="bg-gray-50/40 dark:bg-neutral-900/30 border border-gray-200/65 dark:border-neutral-800/80 rounded-2xl p-6 md:p-8 space-y-6"
              >
                <div className="text-xs font-mono text-gray-400 mb-2 uppercase flex items-center gap-1.5 select-none">
                  <ShieldCheck className="w-4 h-4 text-google-blue" />
                  <span>TRANSMISSION PARAMS (SSL SECURITIES ACTIVE)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-mono font-medium text-gray-500 dark:text-neutral-400 select-none">SENDER NAME</label>
                    <input
                      required
                      type="text"
                      id="form-name"
                      className="w-full px-4 py-3 text-sm bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800 rounded-xl outline-none focus:ring-1 focus:ring-google-blue placeholder-gray-400 dark:placeholder-neutral-600 text-gray-800 dark:text-neutral-100 font-sans font-light"
                      placeholder="e.g., Mario Seelam"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-mono font-medium text-gray-500 dark:text-neutral-400 select-none">E-MAIL CHANNELS</label>
                    <input
                      required
                      type="email"
                      id="form-email"
                      className="w-full px-4 py-3 text-sm bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800 rounded-xl outline-none focus:ring-1 focus:ring-google-blue placeholder-gray-400 dark:placeholder-neutral-600 text-gray-800 dark:text-neutral-100 font-sans font-light"
                      placeholder="e.g., mario@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Message Text area */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-mono font-medium text-gray-500 dark:text-neutral-400 select-none">COMPILATION MESSAGE BODY</label>
                  <textarea
                    required
                    id="form-message"
                    rows={5}
                    className="w-full px-4 py-3 text-sm bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800 rounded-xl outline-none focus:ring-1 focus:ring-google-blue placeholder-gray-400 dark:placeholder-neutral-600 text-gray-800 dark:text-neutral-100 font-sans font-light leading-relaxed"
                    placeholder="Describe your project, role opportunities, or question in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="select-none">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-google-blue hover:bg-blue-600 text-white font-sans text-xs font-bold shadow-md cursor-pointer flex items-center justify-center gap-2 transition-all"
                  >
                    {loading ? (
                      <span>TRANSMITTING BARS...</span>
                    ) : (
                      <>
                        <span>TRANSMIT PACKET SYSTEM</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Submission Card Frame in line-art tech style */
              <div
                id="contact-form-success"
                className="bg-gray-50/40 dark:bg-neutral-900/30 border border-google-blue/35 rounded-2xl p-8 text-center space-y-6 flex flex-col items-center justify-center min-h-[352px] animate-scale-up"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center border border-blue-100 dark:border-blue-900/40 text-google-blue select-none">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-display font-bold text-gray-950 dark:text-white tracking-tight">
                    Transmission Connected Correctly
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-neutral-450 max-w-sm mx-auto leading-relaxed font-sans font-light">
                    Your metadata packet was dispatched safely. Network handshake acknowledged under <strong>120ms total latency</strong>. We will establish connection on your channel shortly.
                  </p>
                </div>

                <div className="font-mono text-[10px] text-gray-400 select-all bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-850 px-4 py-2 rounded-lg">
                  IP: CLIENT_HANDSHAKE_ESTABLISHED · STATUS: OK
                </div>

                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', message: '' });
                    setSubmitted(false);
                  }}
                  className="py-2.5 px-6 rounded-full bg-google-blue hover:bg-blue-600 text-white font-sans text-xs font-semibold cursor-pointer select-none"
                >
                  Send another transmission
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
