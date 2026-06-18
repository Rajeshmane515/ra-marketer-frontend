import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import StatsSection from "../components/home/StatsSection";
import CompaniesSection from "../components/home/CompaniesSection";
import CtaSection from "../components/home/CTA-Section";
import { FloatingOrbs } from "../components/common/FloatingOrbs";

const Home = () => {
  return (
    <main className="relative overflow-hidden bg-[#060816]">
      {/* Background Effects */}
      <FloatingOrbs />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />

        <FeaturesSection />

        <StatsSection />

        <CompaniesSection />

        <CtaSection />
      </div>
    </main>
  );
};
export default Home;
