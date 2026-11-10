import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Calendar, ArrowRight, Copy, Check } from 'lucide-react';
import { SERVICES } from '../data/agencyData';

export default function ConsultationModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    service: '',
    assetVolume: '25,000 - 100,000 records',
    brief: '',
    ndaRequired: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [dossierId, setDossierId] = useState('');
  const [copied, setCopied] = useState(false);
  const phoneNumber = "923059200072";

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    if (isOpen) {
      setSubmitted(false);
      setCopied(false);
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `LIS-${Math.floor(10000 + Math.random() * 90000)}`;
    setDossierId(generatedId);
    setSubmitted(true);
  };

  const getDossierWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*LIS Advisory - Scoping Request [${dossierId}]*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Institution/Org:* ${formData.org}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service Needed:* ${formData.service || 'Comprehensive Audit'}\n` +
      `*Volume:* ${formData.assetVolume}\n` +
      `*Project Brief:* ${formData.brief || 'Standard assessment'}\n` +
      `*NDA Required:* ${formData.ndaRequired ? 'Yes' : 'No'}`
    );
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  const copyDossier = () => {
    const text = 
      `LIS Advisory - Scoping Request [${dossierId}]\n` +
      `Name: ${formData.name}\n` +
      `Institution: ${formData.org}\n` +
      `Service: ${formData.service}\n` +
      `Volume: ${formData.assetVolume}\n` +
      `Brief: ${formData.brief}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#0a0a0a] rounded-2xl border border-neutral-800 shadow-2xl p-6 sm:p-8 my-8 text-neutral-100 font-body"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-850 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#111111] border border-neutral-800 text-[10px] font-mono text-sky-400 uppercase tracking-wider mb-2">
                <span>Architecture Audit Request</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Initiate Scoping Consultation
              </h3>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Provide your collection and repository parameters. An Information &amp; Library Science specialist will evaluate your taxonomy, DSpace/Koha setup, or AI curation scope.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1 font-medium">
                    Full Name &amp; Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1 font-medium">
                    Corporate / Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@institution.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1 font-medium">
                    Institution / University / Firm *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Health Sciences"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1 font-medium">
                    Holdings Volume
                  </label>
                  <select
                    value={formData.assetVolume}
                    onChange={(e) => setFormData({ ...formData, assetVolume: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400"
                  >
                    <option value="Under 25,000 items">Under 25,000 items</option>
                    <option value="25,000 - 100,000 records">25,000 - 100,000 records</option>
                    <option value="100,000 - 500,000 assets">100,000 - 500,000 assets</option>
                    <option value="500,000+ Institutional Scale">500,000+ Institutional Scale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1 font-medium">
                  Primary Practice Area Needed *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400"
                >
                  <option value="">Select Practice Area...</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Complete Institutional Information Overhaul">
                    Complete Institutional Information Overhaul
                  </option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1 font-medium">
                  Project Brief &amp; Bottlenecks
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe your current repository, dark data challenges, AI hallucination issues, or migration deadlines..."
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#121212] border border-neutral-800 text-white text-xs font-mono focus:outline-none focus:border-sky-400 resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-400 font-mono">
                  <input
                    type="checkbox"
                    checked={formData.ndaRequired}
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    className="rounded bg-[#121212] border-neutral-700 text-sky-500 focus:ring-0"
                  />
                  <span>Execute Mutual NDA first</span>
                </label>

                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Confidential</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-black bg-white hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Transmit Scoping Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen with direct transmission */
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111111] border border-neutral-800 text-xs font-mono text-sky-400 mb-2">
              <span>Dossier Reference ID:</span>
              <strong className="text-white">{dossierId}</strong>
            </div>

            <h3 className="text-xl font-display font-bold text-white mb-1.5">
              Scoping Dossier Generated Successfully
            </h3>

            <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed mb-6">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your dossier for <span className="text-sky-300 font-mono">{formData.org}</span> is registered. You can transmit it instantly via WhatsApp for prioritized 1-hour assessment.
            </p>

            {/* Direct WhatsApp Transmission Action */}
            <div className="space-y-3 max-w-md mx-auto">
              <a
                href={getDossierWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-mono font-bold text-black bg-[#25D366] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                {/* WhatsApp SVG */}
                <svg className="w-4 h-4 fill-black shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Transmit to WhatsApp Desk (0305-9200072)</span>
              </a>

              <button
                onClick={copyDossier}
                className="w-full py-2.5 px-3 rounded-xl bg-[#121212] border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Dossier Copied to Clipboard!' : 'Copy Dossier Summary'}</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 text-xs font-mono text-neutral-500 hover:text-neutral-300"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
