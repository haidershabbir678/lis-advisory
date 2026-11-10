import React from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { ShieldCheck, Star } from 'lucide-react';

export default function TestimonialStrip() {
  return (
    <section className="py-20 bg-[#050505] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0a0a] border border-neutral-800 text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Institutional Endorsements</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Trusted by Research Deans, Legal Counsel &amp; AI Leads
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm font-mono max-w-sm">
            Proven outcomes across medical consortiums, public policy repositories, and enterprise AI teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090909] border border-neutral-850 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed mb-6 font-body">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-850">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-800"
                />
                <div>
                  <div className="text-xs font-mono font-bold text-white">{t.author}</div>
                  <div className="text-[11px] text-sky-400 font-mono">{t.title}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
