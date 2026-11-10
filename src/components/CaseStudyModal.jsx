import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Database, Layers } from 'lucide-react';

export default function CaseStudyModal({ study, onClose, onOpenConsultation }) {
  if (!study) return null;
  const phoneNumber = "923059200072";

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello LIS Advisory! I reviewed the case study for [${study.client}] and want a similar architecture solution for my organization.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#090909] rounded-2xl border border-neutral-800 shadow-2xl p-6 sm:p-8 my-8 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0e0e0e] border border-neutral-800 text-[10px] font-mono text-sky-400 uppercase tracking-wider mb-2">
            <span>Case Study Deep Dive</span>
            <span>&bull;</span>
            <span>{study.sector}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {study.client}
          </h3>
        </div>

        {/* Metric Highlight Box */}
        <div className="p-4 rounded-xl bg-[#0f1422] border border-sky-500/30 mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">Primary Metric Impact</span>
            <div className="text-2xl font-display font-black text-white mt-0.5">{study.metric}</div>
          </div>
          <span className="text-xs font-mono text-neutral-300 font-semibold">{study.metricLabel}</span>
        </div>

        {/* Content sections */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
              The Institutional Bottleneck:
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-[#0e0e0e] p-3.5 rounded-xl border border-neutral-850">
              {study.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1.5 font-bold">
              The Information Science Intervention:
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-[#0e0e0e] p-3.5 rounded-xl border border-neutral-850">
              {study.solution}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-bold">
              Verified Production Results:
            </h4>
            <div className="space-y-2">
              {study.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-neutral-850 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsAppInquiry}
            className="flex-1 py-3 px-4 rounded-xl text-xs font-mono font-bold text-black bg-[#25D366] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Inquire on WhatsApp: 0305-9200072</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation(`Case Study Inquiry: ${study.client}`);
            }}
            className="py-3 px-4 rounded-xl text-xs font-mono text-neutral-300 hover:text-white bg-[#0e0e0e] border border-neutral-800 transition-colors"
          >
            Schedule Briefing Call
          </button>
        </div>

      </div>
    </div>
  );
}
