import React from "react";
import { NavBar } from "components/NavBar";
import { HeroSection } from "components/HeroSection";
import { CoreServicesSection } from "components/CoreServicesSection";
import { SystemsSection } from "components/SystemsSection";
import { BusinessPerformanceSection } from "components/BusinessPerformanceSection";
import { SolutionsSection } from "components/SolutionsSection";
import { ClientsSection } from "components/ClientsSection";
import { ContactSection } from "components/ContactSection";
import { CTASection } from "components/CTASection";
import { Footer } from "components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <CoreServicesSection />
        <SystemsSection />
        <BusinessPerformanceSection />
        <SolutionsSection />
        <ClientsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
