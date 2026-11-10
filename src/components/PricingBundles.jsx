import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function PricingBundles({ onOpenConsultation }) {
  const [selectedBundle, setSelectedBundle] = useState(null);
  const phoneNumber = "923059200072";

  const bundles = [
    {
      id: "starter-repository",
      name: "Starter Repository Sprint",
      badge: "Quick Launch",
      price: "$1,450",
      cadence: "Fixed Scope",
      description: "Complete turnkey deployment of DSpace 8 or Koha ILS on cloud infrastructure with initial Dublin Core metadata schema.",
      features: [
        "Cloud VM installation & Linux hardening",
        "DSpace 8.x or Koha ILS turnkey setup",
        "Dublin Core / MARC21 initial schema mapping",
        "Up to 5,000 legacy records batch import",
        "Staff admin handbook & 1-day remote training",
      ],
      turnaround: "2 Weeks",
      recommended: false,
    },
    {
      id: "enterprise-taxonomy",
      name: "Enterprise Knowledge & Taxonomy Architecture",
      badge: "Most Popular",
      price: "$3,800",
      cadence: "Enterprise Sprint",
      description: "End-to-end information architecture overhaul. Controlled vocabularies, SKOS ontologies, and faceted search for corporate intranets.",
      features: [
        "Faceted taxonomy design (ANSI/NISO Z39.19 compliant)",
        "Machine-readable SKOS & OWL ontology schemas",
        "Corporate file plan & ISO 15489 retention schedule",
        "Dark Data audit & automated tagging taxonomy",
        "Full integration guidelines for Elastic / SharePoint",
      ],
      turnaround: "4 Weeks",
      recommended: true,
    },
    {
      id: "ai-rag-curation",
      name: "AI Grounding & RAG Data Curation Suite",
      badge: "AI & LLM Ready",
      price: "$4,600",
      cadence: "Full Pipeline",
      description: "Transform raw PDFs and research archives into verified, zero-hallucination vector corpora with strict citation provenance.",
      features: [
        "Semantic document chunking & entity extraction",
        "Domain-specific Knowledge Graph modeling (Neo4j / RDF)",
        "Anti-hallucination evaluation & benchmark scoring",
        "Hybrid vector + lexical search ranking rules",
        "Automated citation linking & regulatory compliance",
      ],
      turnaround: "4 - 6 Weeks",
      recommended: false,
    },
    {
      id: "oais-archival",
      name: "Institutional Archival & Digital Preservation",
      badge: "Preservation Grade",
      price: "$5,900",
      cadence: "Comprehensive",
      description: "ISO 14721 (OAIS) standard digital preservation pipeline for rare historical manuscripts, legal deeds, and institutional memory.",
      features: [
        "SIP, AIP, and DIP archival package architecture",
        "Archivematica / Islandora ingestion automation",
        "Master archival TIFF & PDF/A format validation",
        "SHA-256 cryptographic fixity monitoring protocols",
        "Century-grade disaster recovery & cold tier strategy",
      ],
      turnaround: "6 - 8 Weeks",
      recommended: false,
    },
  ];

  const handleOrderWhatsApp = (bundle) => {
    const message = encodeURIComponent(
      `Hello LIS Advisory! I want to order the [${bundle.name}] bundle (${bundle.price}). Please share the onboarding process and invoice details.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-28 bg-[#000000] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous whitespace */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0a0a0a] border border-neutral-800 text-xs font-mono text-sky-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Turnkey Bundled Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Transparent Practice Bundles &amp; Engagements
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Predictable scope, fixed-timeline execution, and direct WhatsApp onboarding with our lead Information &amp; Library Science specialists.
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                bundle.recommended
                  ? 'bg-[#0c0c0c] border-2 border-sky-500/70 shadow-2xl shadow-sky-950/20'
                  : 'bg-[#080808] border border-neutral-850 hover:border-neutral-700'
              }`}
            >
              {bundle.recommended && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-sky-500 text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                  {bundle.badge}
                </span>
                
                <h3 className="text-lg font-display font-bold text-white mb-2 leading-snug">
                  {bundle.name}
                </h3>
                
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {bundle.description}
                </p>

                <div className="mb-6 pb-6 border-b border-neutral-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display font-black text-white">{bundle.price}</span>
                    <span className="text-xs font-mono text-neutral-500">/ {bundle.cadence}</span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400 mt-1 block">
                    Turnaround: {bundle.turnaround}
                  </span>
                </div>

                <div className="space-y-2.5 mb-8">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Included in Scope:
                  </div>
                  {bundle.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-neutral-850">
                <button
                  onClick={() => handleOrderWhatsApp(bundle)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold text-black bg-[#25D366] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-3.5 h-3.5 fill-black shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Order via WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenConsultation(`Bundle: ${bundle.name}`)}
                  className="w-full py-2 px-3 rounded-xl text-xs font-mono text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Request Formal Invoice / Proposal
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Assurance Guarantee */}
        <div className="p-6 rounded-2xl bg-[#080808] border border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold text-white">Mutual NDA &amp; Fixity Integrity Guarantee</h4>
              <p className="text-xs text-neutral-400 mt-0.5">All institutional documents handled under strict non-disclosure and ISO 27001 data governance protocols.</p>
            </div>
          </div>
          <span className="text-xs font-mono text-neutral-400 shrink-0">Direct Desk: 0305-9200072</span>
        </div>

      </div>
    </section>
  );
}
