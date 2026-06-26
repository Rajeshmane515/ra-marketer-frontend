import React from "react";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import GlowButton from "../ui/GlowButton";
import ContactForm from "./ContactForm";
import SectionBadge from "../common/SectionBadge";

const LetsConnect = () => {
  return (
    <section className="relative py-24">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[#F472B6]/10 blur-[120px]" />

      <Container>
        <div className="pb-10 text-center"></div>

        {/* Main Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Ready To
              <span className="bg-gradient-to-r from-[#2563FF] to-[#F472B6] bg-clip-text text-transparent">
                {" "}
                Grow Faster?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              Looking for qualified B2B leads, demand generation, account-based
              marketing, or content syndication? Our team is ready to help you
              build a stronger sales pipeline and accelerate business growth.
            </p>

            {/* Info Cards */}
            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <p className="text-sm text-gray-500">Email Us</p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  info@ramarketer.com
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <p className="text-sm text-gray-500">Call Us</p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  +1 332 242 6637
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default LetsConnect;
