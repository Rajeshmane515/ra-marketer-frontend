import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#060816] pt-20 pb-20">
      {/* Background Glow Effects */}
      <div className="absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute left-0 top-40 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <p className="text-sm font-medium tracking-wide text-violet-300">
              ABOUT OUR COMPANY
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            <span className="text-white">Building Modern</span>
            <br />
            <span className="bg-gradient-to-r from-[#2563FF] via-[#E2E8F0] to-[#F472B6] bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            We help brands grow through powerful digital solutions, modern
            design systems, and scalable technology built for the future.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          {/* Primary Button */}
          <Link to="/contact" className="relative z-50">
            <button className="group flex h-14 items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,255,0.5)]">
              Get Started
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Link>

          {/* Secondary Button */}
          <button className="group flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-pink-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(244,114,182,0.25)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Play size={16} className="ml-0.5" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Bottom Cards */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Innovation First",
              desc: "We craft scalable and modern digital products with cutting-edge technologies.",
            },
            {
              title: "Creative Strategy",
              desc: "Combining creativity and strategy to deliver impactful brand experiences.",
            },
            {
              title: "Future Ready",
              desc: "Designed for performance, scalability, and long-term business growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30"
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
