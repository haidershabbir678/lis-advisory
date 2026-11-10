import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ({ onOpenConsultation }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Traditional IT agencies aur Information & Library Science practice mein kya farq hai?",
      a: "Traditional IT software aur raw storage (AWS S3, simple drives) setup karte hain, lekin unhe classification theory, controlled thesauri, Dublin Core, aur faceted metadata ka ilm nahi hota. Humari practice unstructured dark data ko organize karke instant search precision aur AI grounding provide karti hai."
    },
    {
      q: "Kya aap DSpace 8 aur Koha ILS ki turnkey cloud deployment aur legacy data migration karte hain?",
      a: "Jee haan! Hum universities, law firms, aur research institutes ke liye DSpace aur Koha cloud par deploy karte hain, aur Excel, MARC21, ya purane database se zero data-loss ke saath Dublin Core metadata mein migrate karte hain."
    },
    {
      q: "Enterprise AI aur LLMs mein hallucinations kaise khatam hoti hain?",
      a: "Jab aap raw PDFs ko baghair semantic tagging ke AI mein ingest karte hain to AI galat jawab deta hai. Hum information extraction, semantic chunking, ontology mapping (SKOS/OWL), aur citation provenance lagate hain taake har jawab verifiable aur grounded ho."
    },
    {
      q: "Humari confidential documents ke liye kya security aur NDA protocol hai?",
      a: "Har engagement se pehle legally binding Mutual Non-Disclosure Agreement (NDA) sign hota hai. Hum ISO 27001 data governance aur ISO 15489 records retention standards ke mutabiq kaam karte hain."
    },
    {
      q: "Project timeline aur scoping process kya hota hai?",
      a: "Initial scoping audit 24 ghante ke andar complete hota hai. Standard taxonomy ya repository deployment 2 se 6 hafton mein turnkey hand-over kar di jati hai, jisme staff training bhi shamil hai."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#030303] border-b border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0a0a0a] border border-neutral-800 text-xs font-mono text-sky-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Consultation &amp; Practice FAQ
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Common questions regarding our Information Architecture, DSpace/Koha repositories, and data curation services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#090909] border border-neutral-850 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/50"
              >
                <span className="text-sm font-mono font-bold text-white">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-sky-400 transition-transform duration-200 shrink-0 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-body border-t border-neutral-850/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-neutral-400 mb-4">
            Have a custom question about your collection volume?
          </p>
          <a
            href="https://wa.me/923059200072?text=Hello%20LIS%20Advisory!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-mono font-bold text-xs hover:bg-[#20bd5a] transition-all"
          >
            <span>Ask Directly on WhatsApp: 0305-9200072</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
