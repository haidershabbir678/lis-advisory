import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  FileQuestion, 
  FileCheck2, 
  Search, 
  Clock, 
  Database, 
  Layers, 
  ShieldAlert, 
  ShieldCheck 
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/agencyData';

export default function InteractiveComparison() {
  const [activeTab, setActiveTab] = useState('structured');
  const [selectedItem, setSelectedItem] = useState(0);

  const currentData = activeTab === 'swamp' ? COMPARISON_DATA.swamp : COMPARISON_DATA.structured;

  return (
    <section id="simulator" className="py-16 bg-[#0a0e19] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0f1524] border border-white/10 text-[11px] font-mono text-sky-400 mb-2">
            <span>Comparative Architecture Model</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
            Unmanaged File Swamp vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              Curated Information Architecture
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Evaluating search drag, citation loss, and compliance exposure before and after applying formal Information &amp; Library Science classification.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => { setActiveTab('swamp'); setSelectedItem(0); }}
            className={`py-2 px-4 rounded-md text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'swamp'
                ? 'bg-rose-950/60 text-rose-300 border border-rose-500/40'
                : 'bg-[#0f1524] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Unmanaged Swamp</span>
          </button>

          <button
            onClick={() => { setActiveTab('structured'); setSelectedItem(0); }}
            className={`py-2 px-4 rounded-md text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'structured'
                ? 'bg-sky-950/60 text-sky-300 border border-sky-500/40'
                : 'bg-[#0f1524] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Curated Architecture</span>
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* File Repository Viewer */}
          <div className="lg:col-span-7 bg-[#0f1422] rounded-xl p-5 border border-white/10">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${activeTab === 'swamp' ? 'bg-rose-400' : 'bg-emerald-400'}`} />
                <h4 className="text-xs font-mono font-semibold text-white">{currentData.title}</h4>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                {activeTab === 'swamp' ? 'Unindexed Repository' : 'Dublin Core / SKOS'}
              </span>
            </div>

            <div className="space-y-2.5">
              {currentData.items.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedItem(idx)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    selectedItem === idx
                      ? activeTab === 'swamp' 
                        ? 'bg-rose-950/30 border-rose-500/40' 
                        : 'bg-sky-950/30 border-sky-500/40'
                      : 'bg-[#0c101b] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {activeTab === 'swamp' ? (
                      <FileQuestion className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    ) : (
                      <FileCheck2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="text-xs font-mono font-medium text-white break-all">
                        {item.name}
                      </div>
                      {item.title && (
                        <div className="text-xs text-slate-300 mt-0.5">{item.title}</div>
                      )}
                      {item.issue && (
                        <div className="text-[11px] text-rose-300 mt-1">
                          {item.issue}
                        </div>
                      )}
                      {item.tags && (
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {item.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded shrink-0 self-start sm:self-center ${
                    activeTab === 'swamp' ? 'bg-rose-900/30 text-rose-300' : 'bg-sky-900/30 text-sky-300'
                  }`}>
                    {item.status || 'Verified OAIS'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance & Metrics */}
          <div className="lg:col-span-5 bg-[#0f1422] rounded-xl p-5 border border-white/10 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-sky-400" />
              <span>Retrieval Diagnostics</span>
            </h4>

            <div className="p-3 rounded-lg bg-[#0c101b] border border-white/5">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Retrieval Latency
                </span>
                <span className={activeTab === 'swamp' ? 'text-rose-400 font-semibold' : 'text-emerald-400 font-semibold'}>
                  {currentData.searchTime}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0c101b] border border-white/5">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" /> Precision Hit Rate
                </span>
                <span className={activeTab === 'swamp' ? 'text-rose-400 font-semibold' : 'text-sky-400 font-semibold'}>
                  {currentData.accuracy}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0c101b] border border-white/5">
              <div className="text-xs font-mono text-slate-400 mb-1">AI / RAG Grounding Readiness</div>
              <div className="text-xs text-slate-200 font-mono">{currentData.aiReadiness}</div>
            </div>

            <div className="p-3 rounded-lg bg-[#0c101b] border border-white/5">
              <div className="text-xs font-mono text-slate-400 mb-1">Compliance &amp; Economic Impact</div>
              <div className="text-xs text-slate-200 font-mono">{currentData.cost}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
