import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Database 
} from 'lucide-react';

export default function KnowledgeCalculator({ onOpenConsultation }) {
  const [orgType, setOrgType] = useState('tech');
  const [assetSize, setAssetSize] = useState('medium');
  const [serviceFocus, setServiceFocus] = useState('taxonomy');

  const estimates = useMemo(() => {
    let baseHoursSavedPerWeek = 45;
    let baseAccuracyGain = 65;
    let baseTimelineWeeks = 4;
    let darkDataReduction = '60%';
    let suggestedStandard = 'Dublin Core & SKOS';

    if (assetSize === 'small') {
      baseHoursSavedPerWeek = 28;
      baseTimelineWeeks = 3;
      darkDataReduction = '50%';
    } else if (assetSize === 'medium') {
      baseHoursSavedPerWeek = 65;
      baseTimelineWeeks = 5;
      darkDataReduction = '68%';
    } else if (assetSize === 'large') {
      baseHoursSavedPerWeek = 140;
      baseTimelineWeeks = 8;
      darkDataReduction = '82%';
    } else if (assetSize === 'enterprise') {
      baseHoursSavedPerWeek = 320;
      baseTimelineWeeks = 12;
      darkDataReduction = '91%';
    }

    if (serviceFocus === 'rag') {
      baseAccuracyGain = 98.4;
      suggestedStandard = 'Vector Embedding & SKOS Ontology';
    } else if (serviceFocus === 'repository') {
      suggestedStandard = 'DSpace / Koha ILS + OAI-PMH';
    } else if (serviceFocus === 'archival') {
      suggestedStandard = 'ISO 14721 (OAIS) & Preservation TIFF';
    } else if (serviceFocus === 'taxonomy') {
      suggestedStandard = 'ANSI/NISO Z39.19 Thesauri & Dublin Core';
    }

    return {
      hoursSaved: baseHoursSavedPerWeek,
      accuracyGain: baseAccuracyGain,
      timeline: `${baseTimelineWeeks} - ${baseTimelineWeeks + 2} Weeks`,
      darkDataCut: darkDataReduction,
      standard: suggestedStandard,
    };
  }, [orgType, assetSize, serviceFocus]);

  const handlePreFillInquiry = () => {
    const summary = `Organization: ${orgType.toUpperCase()} | Scale: ${assetSize.toUpperCase()} | Focus: ${serviceFocus.toUpperCase()}`;
    onOpenConsultation(summary);
  };

  return (
    <section id="calculator" className="py-16 bg-[#0a0e19] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0f1524] border border-white/10 text-[11px] font-mono text-sky-400 mb-2">
            <span>Scope &amp; Impact Modeling</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
            Calculate Information Yield &amp; Retrieval Acceleration
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Configure institutional parameters to calculate projected time savings, repository implementation timelines, and standards compliance.
          </p>
        </div>

        {/* Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
          <div className="lg:col-span-7 bg-[#0f1422] rounded-xl p-5 border border-white/10 space-y-5">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                1. Institutional Sector:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'tech', label: 'Tech & AI Lab' },
                  { id: 'legal', label: 'Law Firm / Legal' },
                  { id: 'academic', label: 'University / R&D' },
                  { id: 'pharma', label: 'Healthcare & Pharma' },
                  { id: 'heritage', label: 'Museum / Archives' },
                  { id: 'corporate', label: 'Enterprise Holding' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setOrgType(item.id)}
                    className={`p-2.5 rounded-lg text-xs font-mono text-left border transition-all cursor-pointer ${
                      orgType === item.id
                        ? 'bg-sky-950/60 border-sky-500/50 text-sky-200 font-medium'
                        : 'bg-[#0c101b] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                2. Approximate Document / Record Volume:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'small', label: '< 25k Items', desc: 'Departmental' },
                  { id: 'medium', label: '25k - 100k', desc: 'Mid-Scale' },
                  { id: 'large', label: '100k - 500k', desc: 'Enterprise' },
                  { id: 'enterprise', label: '500k+', desc: 'Institutional' },
                ].map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setAssetSize(scale.id)}
                    className={`p-2.5 rounded-lg text-left border transition-all cursor-pointer ${
                      assetSize === scale.id
                        ? 'bg-sky-950/60 border-sky-500/50 text-sky-200'
                        : 'bg-[#0c101b] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold">{scale.label}</div>
                    <div className="text-[10px] text-slate-400">{scale.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                3. Primary Practice Area:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'taxonomy', label: 'Enterprise Taxonomy & Ontology', tag: 'Fast Search' },
                  { id: 'rag', label: 'AI Curation & Vector Grounding', tag: 'LLM Ready' },
                  { id: 'repository', label: 'DSpace / Koha ILS Deployment', tag: 'Turnkey ILS' },
                  { id: 'archival', label: 'OAIS Preservation & Digitization', tag: 'Heritage' },
                ].map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setServiceFocus(service.id)}
                    className={`p-2.5 rounded-lg text-left border transition-all cursor-pointer flex items-center justify-between ${
                      serviceFocus === service.id
                        ? 'bg-sky-950/60 border-sky-500/50 text-sky-200'
                        : 'bg-[#0c101b] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono font-bold">{service.label}</div>
                      <div className="text-[10px] text-slate-400">{service.tag}</div>
                    </div>
                    {serviceFocus === service.id && (
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="lg:col-span-5 bg-[#0f1422] rounded-xl p-5 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Projected Architecture Yield
                </span>
                <span className="text-[10px] font-mono text-sky-400">
                  Benchmark Model
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-[#0c101b] border border-white/5">
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      Recovered Staff Time:
                    </span>
                    <span className="text-sky-300 font-bold">~{estimates.hoursSaved} hrs/week</span>
                  </div>
                  <div className="text-xl font-display font-bold text-white">
                    {estimates.hoursSaved * 50} <span className="text-xs font-mono font-normal text-slate-400">hours saved annually</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0c101b] border border-white/5">
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      Retrieval Precision:
                    </span>
                    <span className="text-emerald-300 font-bold">98%+ Verified</span>
                  </div>
                  <div className="text-xl font-display font-bold text-white">
                    {estimates.darkDataCut} <span className="text-xs font-mono font-normal text-slate-400">Dark Data Reduction</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0c101b] border border-white/5 space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Estimated Duration:</span>
                    <span className="text-white font-semibold">{estimates.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Primary Standard:</span>
                    <span className="text-sky-300 font-semibold truncate max-w-[190px]">{estimates.standard}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4">
              <button
                onClick={handlePreFillInquiry}
                className="w-full py-2.5 rounded-md text-xs font-mono font-semibold text-slate-950 bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Transfer Scope to Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
