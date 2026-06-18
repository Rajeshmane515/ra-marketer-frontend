import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import OrbitHero from "../components/services/OrbitHero";
import ServicesHero from "../components/services/ServicesHero";
import ServiceCard from "../components/services/ServiceCard";
import ServicesCarousel from "../components/services/ServicesCarousel";

const Services = () => {
  return (
    <div className="bg-black min-h-screen ">
      <ServicesHero />

      <ServicesCarousel />
    </div>
  );
};

export default Services;
