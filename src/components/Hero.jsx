import React from 'react';
import { ArrowRight, Database, Network, ShieldCheck, Check } from 'lucide-react';
import ArchitectureConsole from './ArchitectureConsole';
import { AGENCY_INFO } from '../data/agencyData';

export default function Hero({ onOpenConsultation }) {
  const phoneNumber = "923059200072";

  return (
    <section className="relative pt-24 pb-20 md:pt-28 md:pb-24 bg-[#000000] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimal Badge */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-neutral-800 text-xs font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Enterprise Information Architecture &bull; LIS Practice</span>
          </div>
        </div>

        {/* Hero Grid with generous space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
              Architecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400">
                Enterprise Knowledge
              </span>{' '}
              &amp; Digital Repositories.
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl font-normal">
              We translate fragmented corporate archives and unindexed institutional assets into structured taxonomies, turnkey DSpace &amp; Koha repositories, and AI-grounded ontologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenConsultation()}
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold text-black bg-white hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Initiate Architecture Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${phoneNumber}?text=Hello%20LIS%20Advisory!%20I%20want%20to%20discuss%20an%20information%20architecture%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-xs font-mono font-bold text-black bg-[#25D366] hover:bg-[#20bd5a] transition-all flex items-center gap-2 cursor-pointer"
              >
                {/* WhatsApp SVG */}
                <svg className="w-4 h-4 fill-black shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp: 0305-9200072</span>
              </a>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#0a0a0a] border border-neutral-850">
                <span className="text-sky-400 font-bold block mb-1">Taxonomy</span>
                <span className="text-[11px] text-neutral-400">SKOS &amp; Ontologies</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0a0a0a] border border-neutral-850">
                <span className="text-emerald-400 font-bold block mb-1">DSpace &bull; Koha</span>
                <span className="text-[11px] text-neutral-400">Turnkey Cloud</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0a0a0a] border border-neutral-850">
                <span className="text-blue-400 font-bold block mb-1">AI Grounding</span>
                <span className="text-[11px] text-neutral-400">RAG Chunking</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0a0a0a] border border-neutral-850">
                <span className="text-neutral-300 font-bold block mb-1">Preservation</span>
                <span className="text-[11px] text-neutral-400">ISO 14721 OAIS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Enterprise Console */}
          <div className="lg:col-span-5">
            <ArchitectureConsole />
          </div>

        </div>

        {/* Live Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {AGENCY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-3">
              <span className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-mono text-neutral-400 block mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
