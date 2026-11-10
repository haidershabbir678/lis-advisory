import React, { useState, useEffect } from 'react';
import { ShieldCheck, Star, Plus, MessageSquare } from 'lucide-react';
import AddFeedbackModal from './AddFeedbackModal';

export default function TestimonialStrip() {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load client reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lis_client_feedback_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setTestimonials(parsed);
        }
      }
    } catch (e) {
      console.warn("Could not read from localStorage", e);
    }
  }, []);

  const handleAddFeedback = (newFeedback) => {
    const updated = [newFeedback, ...testimonials];
    setTestimonials(updated);
    try {
      localStorage.setItem('lis_client_feedback_v2', JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0a0a] border border-neutral-800 text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
              Client Feedback &amp; Reviews
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-mono mt-2">
              Reviews and endorsements from institutional partners and researchers.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs transition-colors shadow-lg cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Submit Feedback</span>
            </button>
          </div>
        </div>

        {/* Feedback Grid or Clean Empty State */}
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => {
              const initials = t.author
                ? t.author.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
                : 'CL';

              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#090909] border border-neutral-850 hover:border-neutral-700 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
                        Verified
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-200 italic leading-relaxed mb-6 font-body">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Clean text initials instead of photo */}
                  <div className="flex items-center gap-3 pt-5 border-t border-neutral-850">
                    <div className="w-9 h-9 rounded-lg bg-[#141414] border border-neutral-800 text-sky-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      {initials}
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">
                        {t.author}
                      </div>
                      {(t.title || t.org) && (
                        <div className="text-[11px] text-neutral-400 font-mono">
                          {[t.title, t.org].filter(Boolean).join(' • ')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Clean Empty State */
          <div className="p-10 rounded-2xl bg-[#080808] border border-neutral-850 text-center max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 mx-auto mb-4">
              <MessageSquare className="w-5 h-5 text-sky-400" />
            </div>
            <h3 className="text-base font-display font-bold text-white mb-2">
              No Client Feedback Yet
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-mono">
              Be the first partner or researcher to share your experience with our information architecture and repository services.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Submit Feedback</span>
            </button>
          </div>
        )}

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
