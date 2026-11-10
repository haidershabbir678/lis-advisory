import React from 'react';
import { Award, Check } from 'lucide-react';
import { METHODOLOGIES, TESTIMONIALS } from '../data/agencyData';

export default function Methodology() {
  return (
    <section id="standards" className="py-16 bg-[#080b13] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0f1524] border border-white/10 text-[11px] font-mono text-sky-400 mb-2">
            <span>Global Standards</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
            Standards &amp; Architectural Protocols
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            We engineer open, interoperable systems adhering strictly to international Library &amp; Information Science governance frameworks.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {METHODOLOGIES.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0f1422] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-sky-400 uppercase block mb-1.5">
                  {item.code}
                </span>
                <h3 className="text-sm font-display font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>Standard Compliant</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Endorsements */}
        <div className="pt-10 border-t border-white/10">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-display font-bold text-white mb-1">
              Institutional Endorsements
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Evaluations from research directors, counsel, and AI teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, idx) => (
              <div
                key={idx}
                className="bg-[#0f1422] rounded-xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <p className="text-xs text-slate-300 italic leading-relaxed mb-5">
                  "{test.quote}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-9 h-9 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="text-xs font-mono font-medium text-white">
                      {test.author}
                    </div>
                    <div className="text-[11px] text-sky-400 font-mono">
                      {test.title}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {test.org}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
