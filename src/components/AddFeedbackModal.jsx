import React, { useState } from 'react';
import { X, Star, CheckCircle2, Send, MessageSquare } from 'lucide-react';

export default function AddFeedbackModal({ isOpen, onClose, onAddFeedback }) {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    org: '',
    rating: 5,
    quote: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.author.trim() || !formData.quote.trim()) return;

    const newFeedback = {
      author: formData.author.trim(),
      title: formData.title.trim() || '',
      org: formData.org.trim() || '',
      rating: formData.rating,
      quote: formData.quote.trim(),
    };

    onAddFeedback(newFeedback);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ author: '', title: '', org: '', rating: 5, quote: '' });
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-[#090909] rounded-2xl border border-neutral-800 shadow-2xl p-6 sm:p-8 text-neutral-100 font-body"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#111111] border border-neutral-800 text-[10px] font-mono text-sky-400 uppercase tracking-wider mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Client Feedback</span>
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">
                Submit Feedback
              </h3>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Share your experience with our information architecture, taxonomy, or repository services.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arthur Vance"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Title / Role <span className="text-[10px] text-neutral-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Library Director"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Organization <span className="text-[10px] text-neutral-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Legal"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1 font-medium">
                  Rating
                </label>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#121212] border border-neutral-800">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= formData.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-neutral-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-neutral-400 ml-2">
                    {formData.rating} of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1 font-medium">
                  Feedback / Review *
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Share your experience with our services..."
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-black bg-white hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Submit Feedback</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Feedback Submitted
            </h3>
            <p className="text-xs text-neutral-300">
              Thank you! Your feedback has been published.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
