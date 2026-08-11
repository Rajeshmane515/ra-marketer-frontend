import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactHero from "../components/contact/ContactHero";
import LocationsSection from "../components/contact/LocationsSection";
import LetsConnect from "../components/contact/LetsConnect";

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Hero */}

      <ContactHero />

      <LocationsSection />

      <LetsConnect />
      {/* FAQ */}
    </div>
  );
};

export default Contact;
