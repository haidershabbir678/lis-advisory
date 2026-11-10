import React from 'react';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Network, 
  XCircle, 
  CheckCircle2 
} from 'lucide-react';

export default function WhyLISAdvantage() {
  const comparisons = [
    {
      domain: "Data Organization Strategy",
      genericIT: "Dumps raw PDFs and files into cloud storage buckets (S3 / SharePoint) with arbitrary folder structures.",
      lisApproach: "Applies faceted classification, ISO 15489 retention schedules, and Dublin Core metadata for multi-dimensional retrieval.",
    },
    {
      domain: "Artificial Intelligence (RAG & LLM)",
      genericIT: "Splits documents blindly by arbitrary character count, causing severe context fragmentation and AI hallucinations.",
      lisApproach: "Performs semantic chunking, ontology linking, citation provenance verification, and synset synonym normalization.",
    },
    {
      domain: "Search Precision & Discovery",
      genericIT: "Relies strictly on exact keyword matching without understanding synonyms, polysemy, or domain context.",
      lisApproach: "Engineers ANSI/NISO Z39.19 controlled thesauri, broader/narrower term hierarchies (BT/NT/RT), and semantic knowledge graphs.",
    },
    {
      domain: "Long-Term Digital Preservation",
      genericIT: "Assumes simple cloud backups equate to preservation, leaving proprietary file formats vulnerable to obsolescence and bit-rot.",
      lisApproach: "Enforces ISO 14721 (OAIS) lifecycle models, archival master formats (TIFF, PDF/A-3), and cryptographic fixity checks (SHA-256).",
    },
    {
      domain: "Institutional Repositories",
      genericIT: "Builds brittle custom web portals that fail to be indexed by Google Scholar or international academic harvesting protocols.",
      lisApproach: "Deploys standard-compliant DSpace, Koha, and Omeka with OAI-PMH harvest protocol and standardized MARC21/RDA catalogs.",
    },
  ];

  return (
    <section id="advantage" className="py-16 bg-[#080b13] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0f1524] border border-white/10 text-[11px] font-mono text-sky-400 mb-2">
            <span>Disciplinary Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
            Why Generic IT Agencies Struggle with Information Architecture
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Software developers write code; Information Scientists master the formal discipline of how humans and machine systems catalog, query, and verify knowledge.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="bg-[#0f1422] rounded-xl overflow-hidden border border-white/10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0c101b] border-b border-white/10 p-3.5 text-xs font-mono uppercase tracking-wider">
            <div className="md:col-span-3 text-slate-400 font-semibold">Capability Area</div>
            <div className="md:col-span-4 text-rose-400 font-semibold mt-2 md:mt-0 flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5" />
              <span>Generic IT Consultancies</span>
            </div>
            <div className="md:col-span-5 text-sky-400 font-semibold mt-2 md:mt-0 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Our Information Science Practice</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisons.map((item, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-1 md:grid-cols-12 p-4 gap-3 hover:bg-[#121829] transition-colors items-start"
              >
                <div className="md:col-span-3">
                  <div className="text-xs font-mono font-medium text-white">{item.domain}</div>
                </div>

                <div className="md:col-span-4 text-xs text-slate-400 leading-relaxed bg-[#0a0e18] p-2.5 rounded-lg border border-white/5">
                  {item.genericIT}
                </div>

                <div className="md:col-span-5 text-xs text-slate-200 leading-relaxed bg-sky-950/20 p-2.5 rounded-lg border border-sky-500/20">
                  {item.lisApproach}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-sky-950/50 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-display font-bold text-white mb-1">User Intent &amp; Mental Models</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We design retrieval pathways based on how researchers, analysts, and employees formulate inquiry—not raw keyword matches.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
              <Network className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-display font-bold text-white mb-1">Semantic Interoperability</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Schema structured under Dublin Core, MODS, and Schema.org standards so your holdings integrate with AI models and search harvesters.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-display font-bold text-white mb-1">Preservation &amp; Audit Immunity</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Protect institutional memory against digital obsolescence and non-compliance with defensible ISO 15489 records retention.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
