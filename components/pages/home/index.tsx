import Hero from "@/components/organisms/home/HeroSection";
import NeuroArchitectureSection from "@/components/organisms/home/NeuroArchitectureSection";
import AboutSection from "@/components/organisms/home/AboutSection";
import ServicesSection from "@/components/organisms/home/ServicesSection";
import ProcessSection from "@/components/organisms/home/ProcessSection";
import PortfolioSection from "@/components/organisms/home/PortfolioSection";
import QualificationSection from "@/components/organisms/home/QualificationSection";
import FaqSection from "@/components/organisms/home/FaqSection";
import CtaSection from "@/components/organisms/home/CtaSection";
import Footer from "@/components/organisms/home/Footer";
import Navbar from "@/components/organisms/home/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <NeuroArchitectureSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      {/* <QualificationSection /> */}
      {/*       <FaqSection /> */}
      <CtaSection />
      <Footer />
    </main>
  );
}
