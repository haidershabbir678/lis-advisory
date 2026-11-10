import React from 'react';
import { 
  Mail, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Layers
} from 'lucide-react';
import Logo from './Logo';
import { SERVICES } from '../data/agencyData';

export default function Footer({ onOpenConsultation }) {
  const phoneNumber = "923059200072";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20LIS%20Advisory!%20I%20want%20to%20inquire%20about%20your%20services.`;
  const emailAddress = "hmarslanskp@gmail.com";

  return (
    <footer className="bg-[#030303] border-t border-neutral-900 pt-20 pb-12 text-neutral-400 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-neutral-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" />
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                LIS ADVISORY
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
              Enterprise Information Architecture, Digital Repositories (DSpace/Koha), and AI Data Curation. Founded by specialized Information &amp; Library Science professionals.
            </p>

            <div className="text-xs font-mono text-neutral-400 space-y-1">
              <div>Direct Phone / WhatsApp: <a href={whatsappUrl} className="text-white hover:text-emerald-400 font-bold transition-colors">0305-9200072</a></div>
              <div>Direct Email: <a href={`mailto:${emailAddress}`} className="text-white hover:text-sky-400 font-semibold transition-colors">{emailAddress}</a></div>
              <div>Technical Engineering Partner: <span className="text-sky-400 font-semibold">AstraVenta</span></div>
            </div>

            {/* Social Icons (WhatsApp, Email) */}
            <div className="pt-2 flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0e0e0e] border border-neutral-800 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 flex items-center justify-center transition-all cursor-pointer"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${emailAddress}`}
                className="w-9 h-9 rounded-lg bg-[#0e0e0e] border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas Column */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3">
              Practice Areas
            </h5>
            <ul className="space-y-2 text-xs font-mono">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenConsultation(s.title)}
                    className="hover:text-sky-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="text-neutral-600">&bull;</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Direct Actions */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3">
              Direct Engagement
            </h5>
            <p className="text-xs text-neutral-400 leading-relaxed font-body">
              Contact our information architects directly on WhatsApp for immediate scoping evaluation.
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 0305-9200072</span>
              </a>

              <button
                onClick={() => onOpenConsultation()}
                className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Initiate Online Scoping</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} LIS Advisory &bull; Technical Partnership with <span className="text-neutral-300 font-semibold">AstraVenta</span>.
          </div>
          <div className="flex items-center gap-4">
            <span>ANSI/NISO Z39.19</span>
            <span>&bull;</span>
            <span>Dublin Core</span>
            <span>&bull;</span>
            <span>ISO 14721 OAIS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
