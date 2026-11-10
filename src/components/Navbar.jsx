import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = "923059200072";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Bundles & Pricing', href: '#pricing' },
    { name: 'Solutions', href: '#simulator' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#000000]/95 backdrop-blur-md border-b border-neutral-850 shadow-2xl py-3' 
        : 'bg-[#000000]/80 backdrop-blur-sm border-b border-neutral-900 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand with Bespoke Logo Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <Logo className="w-8 h-8 group-hover:border-sky-400 transition-colors" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  LIS ADVISORY
                </span>
                <span className="px-1.5 py-0.5 text-[9px] uppercase font-mono tracking-wider rounded bg-neutral-900 text-sky-400 border border-neutral-800 hidden xs:inline-block">
                  Practice
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono tracking-tight mt-0.5">
                Information Architecture &bull; Repositories
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: WhatsApp & Consultation */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${phoneNumber}?text=Hello%20LIS%20Advisory!%20I%20am%20interested%20in%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-black bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-black shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>0305-9200072</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-mono font-bold tracking-wide text-black bg-white hover:bg-neutral-200 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-900"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-neutral-850 bg-[#090909] rounded-2xl p-4 flex flex-col gap-3 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
              <a
                href={`https://wa.me/${phoneNumber}?text=Hello%20LIS%20Advisory!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-mono font-bold text-black bg-[#25D366]"
              >
                Chat on WhatsApp: 0305-9200072
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 rounded-xl text-center text-xs font-mono font-bold text-black bg-white"
              >
                Book Scoping Audit
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
