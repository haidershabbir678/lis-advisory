import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TestimonialStrip from './components/TestimonialStrip';
import Services from './components/Services';
import PricingBundles from './components/PricingBundles';
import InteractiveComparison from './components/InteractiveComparison';
import KnowledgeCalculator from './components/KnowledgeCalculator';
import WhyLISAdvantage from './components/WhyLISAdvantage';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Methodology from './components/Methodology';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import CaseStudyModal from './components/CaseStudyModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const handleOpenConsultation = (serviceTitle = '') => {
    setSelectedService(serviceTitle);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleSelectCaseStudy = (study) => {
    setActiveCaseStudy(study);
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-neutral-100 flex flex-col font-body selection:bg-sky-500/30 selection:text-sky-200">
      {/* Sticky Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Architecture Console */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. Elevated Client Feedback & Testimonial Strip */}
        <TestimonialStrip />

        {/* 3. Core Practice Areas / Services */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 4. Turnkey Bundles & Pricing with WhatsApp Order */}
        <PricingBundles onOpenConsultation={handleOpenConsultation} />

        {/* 5. Paradigm Simulator (Data Swamp vs Curated Architecture) */}
        <InteractiveComparison />

        {/* 6. Information Yield Scope Calculator */}
        <KnowledgeCalculator onOpenConsultation={handleOpenConsultation} />

        {/* 7. Information Science Disciplinary Moat */}
        <WhyLISAdvantage />

        {/* 8. Case Studies (Click to inspect deep-dive) */}
        <CaseStudies onSelectCaseStudy={handleSelectCaseStudy} />

        {/* 9. Interactive Practice FAQ on First Page */}
        <FAQ onOpenConsultation={handleOpenConsultation} />

        {/* 10. Standards & Archival Protocols */}
        <Methodology />
      </main>

      {/* Footer with Lucide Social Links & WhatsApp */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Floating Persistent WhatsApp Quick-Action */}
      <WhatsAppButton />

      {/* Consultation Scoping Modal (with direct WhatsApp transmission) */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
        initialService={selectedService}
      />

      {/* Dedicated Case Study Deep-Dive Modal */}
      <CaseStudyModal 
        study={activeCaseStudy}
        onClose={handleCloseCaseStudy}
        onOpenConsultation={handleOpenConsultation}
      />
    </div>
  );
}
