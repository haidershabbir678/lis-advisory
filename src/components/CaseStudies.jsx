import React from 'react';
import { Building2, Scale, Dna, CheckCircle2, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';

export default function CaseStudies({ onSelectCaseStudy }) {
  const getSectorIcon = (sector) => {
    if (sector.includes('Medical') || sector.includes('Education')) return <Building2 className="w-4 h-4 text-sky-400" />;
    if (sector.includes('Legal')) return <Scale className="w-4 h-4 text-blue-400" />;
    return <Dna className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section id="case-studies" className="py-24 bg-[#000000] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0a0a0a] border border-neutral-800 text-xs font-mono text-sky-400 mb-4">
            <span>Verified Case Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Proven Enterprise Transformations
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Click any deployment to inspect the full architecture blueprint, metadata schema, and production metrics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCaseStudy(study)}
              className="bg-[#090909] rounded-2xl p-7 border border-neutral-850 flex flex-col justify-between hover:border-sky-500/50 hover:bg-[#0c0c0c] transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-850">
                  <div className="flex items-center gap-2">
                    {getSectorIcon(study.sector)}
                    <span className="text-[11px] font-mono uppercase text-neutral-300">
                      {study.sector}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display font-black text-white block leading-none">
                      {study.metric}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">
                      {study.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-sky-300 transition-colors mb-3">
                  {study.client}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-body">
                  {study.challenge}
                </p>

                <div className="space-y-2 mb-6">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-850">
                <div className="w-full py-2.5 px-3 rounded-xl text-xs font-mono font-medium text-white bg-neutral-900 group-hover:bg-white group-hover:text-black transition-all flex items-center justify-center gap-2">
                  <span>Inspect Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
