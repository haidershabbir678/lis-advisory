import React, { useState, useEffect } from 'react';
import { TESTIMONIALS as INITIAL_TESTIMONIALS } from '../data/agencyData';
import { ShieldCheck, Star, Plus, Sparkles, MessageSquareQuote } from 'lucide-react';
import AddFeedbackModal from './AddFeedbackModal';

export default function TestimonialStrip() {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load lifetime persisted reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lis_testimonials');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTestimonials(parsed);
        }
      }
    } catch (e) {
      console.warn("Could not read from localStorage", e);
    }
  }, []);

  // Save to localStorage when new feedback arrives
  const handleAddFeedback = (newFeedback) => {
    const updated = [newFeedback, ...testimonials];
    setTestimonials(updated);
    try {
      localStorage.setItem('lis_testimonials', JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Submit Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0a0a] border border-neutral-800 text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Institutional Registry &bull; Realtime</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
              Trusted by Research Deans, Legal Counsel &amp; AI Leads
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-mono mt-2">
              Live feedback from university archives, medical consortiums, and enterprise intelligence labs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs transition-colors shadow-lg cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Submit Client Endorsement</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl flex flex-col justify-between transition-all duration-200 relative ${
                t.isRecent
                  ? 'bg-[#0c0c0c] border border-sky-500/40 shadow-xl shadow-sky-950/20'
                  : 'bg-[#090909] border border-neutral-850 hover:border-neutral-700'
              }`}
            >
              {t.isRecent && (
                <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-sky-500 text-black text-[9px] font-mono font-bold uppercase tracking-wider">
                  Verified Realtime
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {t.timestamp && (
                    <span className="text-[10px] font-mono text-neutral-500">
                      {t.timestamp}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed mb-6 font-body">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 border-t border-neutral-850">
                <img
                  src={t.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-800 shrink-0"
                />
                <div>
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span>{t.author}</span>
                  </div>
                  <div className="text-[11px] text-sky-400 font-mono">{t.title}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Feedback Modal */}
      <AddFeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddFeedback={handleAddFeedback}
      />
    </section>
  );
}
