import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutOverview from "../components/about/AboutOverview";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutOverview />
    </div>
  );
};

export default About;
