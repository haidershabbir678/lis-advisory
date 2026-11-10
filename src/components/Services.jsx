import React, { useState } from 'react';
import { 
  Network, 
  Cpu, 
  Database, 
  Archive, 
  BookOpen, 
  FileCheck, 
  Check, 
  Clock, 
  PackageCheck, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { SERVICES } from '../data/agencyData';

export default function Services({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & Taxonomy', 'Digital Repositories', 'Archival Preservation', 'Research Intelligence'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'taxonomy-ontology': return <Network className="w-5 h-5 text-sky-400" />;
      case 'ai-data-curation': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'repository-koha': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'digital-preservation': return <Archive className="w-5 h-5 text-slate-300" />;
      case 'research-synthesis': return <BookOpen className="w-5 h-5 text-sky-400" />;
      case 'records-governance': return <FileCheck className="w-5 h-5 text-emerald-400" />;
      default: return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-[#080b13] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0f1524] border border-white/10 text-[11px] font-mono text-sky-400 mb-2">
            <span>Core Practice Areas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
            Information Science Services &amp; Deliverables
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            End-to-end information architecture, open-source library system deployments, and AI-ready data curation compliant with Dublin Core, ISO, and ANSI/NISO standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono tracking-wide transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-slate-950 font-semibold shadow-sm'
                  : 'bg-[#0f1524] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#0f1422] rounded-xl p-6 border border-white/10 flex flex-col justify-between hover:border-sky-500/30 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0a0e18] border border-white/10 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-sky-400/90 mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Deliverables Architecture:
                  </div>
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tools Stack */}
                <div className="mb-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Standard Tools:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0a0e18] text-slate-300 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Deliverables & CTA */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <PackageCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>Turnkey Blueprint</span>
                  </span>
                </div>

                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="w-full py-2 px-3 rounded-md text-xs font-mono font-medium text-white bg-white/5 hover:bg-white hover:text-slate-950 border border-white/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Scope Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
