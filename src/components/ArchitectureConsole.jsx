import React, { useState } from 'react';
import { Database, Search, CheckCircle2, ShieldCheck, Terminal, Cpu, ArrowRight } from 'lucide-react';

export default function ArchitectureConsole() {
  const [activeTab, setActiveTab] = useState('metadata'); // 'metadata', 'repository', 'rag'

  return (
    <div className="w-full rounded-2xl bg-[#090909] border border-neutral-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Console Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0e0e0e] border-b border-neutral-850">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="text-[11px] text-neutral-400 font-semibold ml-2">
            LIS Architecture Terminal &bull; Dublin Core v2
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] bg-sky-950/80 text-sky-400 border border-sky-500/30">
          STATUS: ACTIVE
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-850 bg-[#070707]">
        <button
          onClick={() => setActiveTab('metadata')}
          className={`flex-1 py-2.5 px-3 text-center transition-colors cursor-pointer text-[11px] font-semibold ${
            activeTab === 'metadata' 
              ? 'bg-[#090909] text-sky-400 border-b-2 border-sky-500' 
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          Dublin Core Schema
        </button>
        <button
          onClick={() => setActiveTab('repository')}
          className={`flex-1 py-2.5 px-3 text-center transition-colors cursor-pointer text-[11px] font-semibold ${
            activeTab === 'repository' 
              ? 'bg-[#090909] text-emerald-400 border-b-2 border-emerald-500' 
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          DSpace 8 Harvest
        </button>
        <button
          onClick={() => setActiveTab('rag')}
          className={`flex-1 py-2.5 px-3 text-center transition-colors cursor-pointer text-[11px] font-semibold ${
            activeTab === 'rag' 
              ? 'bg-[#090909] text-blue-400 border-b-2 border-blue-500' 
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          AI RAG Grounding
        </button>
      </div>

      {/* Console Body */}
      <div className="p-5 text-neutral-300 space-y-3.5 min-h-[290px] flex flex-col justify-between">
        {activeTab === 'metadata' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-850">
              <span>Standard: ANSI/NISO Z39.19</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> ISO 15836 Compliant
              </span>
            </div>
            
            <div className="space-y-2 text-[11px] leading-relaxed">
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850">
                <span className="text-neutral-500">dc.title: </span>
                <span className="text-white font-semibold">"Enterprise Knowledge Architecture 2026"</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850">
                <span className="text-neutral-500">dc.subject.classification: </span>
                <span className="text-sky-300">Faceted Thesaurus (BT: Information Science)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850">
                <span className="text-neutral-500">dc.rights.governance: </span>
                <span className="text-emerald-300">ISO 15489 Retention Schedule: 7 Yrs Defensible</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850">
                <span className="text-neutral-500">dc.format.preservation: </span>
                <span className="text-amber-300">OAIS Archival Master TIFF / PDF/A-3 (SHA-256)</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'repository' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-850">
              <span>Protocol: OAI-PMH v2.0</span>
              <span className="text-emerald-400">Live Koha &amp; DSpace Sync</span>
            </div>
            
            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850 flex justify-between">
                <span>Total Digital Assets Indexed:</span>
                <span className="text-white font-bold">128,450 Records</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850 flex justify-between">
                <span>Google Scholar / PubMed Harvest:</span>
                <span className="text-emerald-400 font-bold">Verified 100%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850 flex justify-between">
                <span>Catalog Search Latency:</span>
                <span className="text-sky-300 font-bold">0.04 Seconds</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rag' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-850">
              <span>Grounding: Neo4j &bull; ChromaDB</span>
              <span className="text-sky-400">Anti-Hallucination Active</span>
            </div>
            
            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850 flex justify-between">
                <span>Context Precision Score:</span>
                <span className="text-emerald-400 font-bold">98.4% Hit Accuracy</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850 flex justify-between">
                <span>Provenance Traceability:</span>
                <span className="text-white font-bold">Exact Paragraph &amp; Page Citation</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-neutral-850 flex justify-between">
                <span>Dark Data Deduplication:</span>
                <span className="text-sky-300 font-bold">68% Clutter Eliminated</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Interactive Command Status */}
        <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-[10px] text-neutral-500">
          <span className="flex items-center gap-1.5 text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Real-time Semantic Cluster Running</span>
          </span>
          <span className="text-sky-400 font-semibold cursor-pointer hover:underline">
            Inspect Architecture &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
