import React from "react";
import { motion } from "framer-motion";

import Container from "../ui/Container";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24">
      {/* Blue Glow */}
      <div className="absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#2563FF]/20 blur-[140px]" />

      {/* Pink Accent Glow */}
      <div className="absolute right-20 top-24 h-[220px] w-[220px] rounded-full bg-[#F472B6]/10 blur-[120px]" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            <span className="text-white">Get In</span>

            <span className="bg-gradient-to-r from-[#2563FF] via-[#60A5FA] to-[#F472B6] bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Looking to grow your business with high-quality B2B leads?
            <br />
            Connect with us and let’s build smarter growth strategies together.
          </p>
        </div>
      </Container>

      {/* Brand Divider */}
      <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2563FF]/60 to-transparent" />
    </section>
  );
};

export default ContactHero;
