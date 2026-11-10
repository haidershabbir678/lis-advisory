import React from 'react';
import { Server, ShieldCheck, Cpu, Code2, ArrowUpRight, Network } from 'lucide-react';

export default function TechnicalPartner() {
  return (
    <section className="py-20 bg-[#000000] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Partnership Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#080808] border border-neutral-850 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Info & Collaboration Scope */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111111] border border-neutral-800 text-[11px] font-mono text-sky-400">
                <Network className="w-3.5 h-3.5" />
                <span>Strategic Technical Collaboration</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Engineering Backed by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400">
                  AstraVenta
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body max-w-2xl">
                While <strong className="text-white">LIS Advisory</strong> leads information architecture, metadata governance (Dublin Core), and domain ontology design, our technical partner <strong className="text-white">AstraVenta</strong> engineers the robust enterprise backend infrastructure, cloud server hardening, API pipelines, and secure database migrations.
              </p>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#0f0f0f] border border-neutral-850">
                  <div className="text-sky-400 font-bold mb-1 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    <span>Backend Systems</span>
                  </div>
                  <span className="text-[11px] text-neutral-400">High-concurrency server architecture &amp; databases.</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0f0f0f] border border-neutral-850">
                  <div className="text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Cloud Security</span>
                  </div>
                  <span className="text-[11px] text-neutral-400">Linux server hardening &amp; ISO data compliance.</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0f0f0f] border border-neutral-850">
                  <div className="text-blue-400 font-bold mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>AI Integrations</span>
                  </div>
                  <span className="text-[11px] text-neutral-400">Production vector pipelines &amp; RAG orchestration.</span>
                </div>
              </div>
            </div>

            {/* Right: Partner Branding Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-[#0d0d0d] border border-neutral-800 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-neutral-700 flex items-center justify-center text-sky-400 mb-3 shadow-lg">
                <Code2 className="w-7 h-7" />
              </div>
              <div className="text-lg font-display font-extrabold text-white tracking-wide">
                ASTRAVENTA
              </div>
              <div className="text-[11px] font-mono text-sky-400 mt-0.5">
                Official Technical &amp; Backend Partner
              </div>
              <p className="text-[11px] text-neutral-400 mt-3 leading-relaxed">
                Empowering scalable infrastructure for global institutional repositories and knowledge graphs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
