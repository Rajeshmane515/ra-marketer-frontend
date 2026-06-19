import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const DemandGeneration = () => {
  const benefits = [
    {
      icon: <TrendingUp size={28} />,
      title: "Pipeline Growth",
      description:
        "Build a stronger and more predictable pipeline through targeted demand generation campaigns.",
    },
    {
      icon: <Target size={28} />,
      title: "Quality Leads",
      description:
        "Focus on prospects that actually fit your ideal customer profile.",
    },
    {
      icon: <Zap size={28} />,
      title: "Better Conversions",
      description:
        "Engage buyers earlier in their journey and improve conversion opportunities.",
    },
    {
      icon: <Users size={28} />,
      title: "Decision-Maker Reach",
      description:
        "Connect directly with the people who influence purchasing decisions.",
    },
  ];

  const services = [
    "Content Syndication Campaigns",
    "Webinar Registration Programs",
    "Intent-Based Lead Generation",
    "Product Awareness Campaigns",
    "Account-Based Demand Generation",
    "Audience Engagement Programs",
  ];

  return (
    <section className="relative overflow-hidden py-6 bg-black">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2563FF]/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HERO */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#2563FF]/20 bg-[#2563FF]/10 px-5 py-2 text-sm text-[#7FB2FF]">
            Demand Generation
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white md:text-7xl">
            Fill Your Pipeline With
            <br />
            <span className="text-[#2563FF]">Qualified Opportunities</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Demand generation is more than collecting contacts. It's about
            creating awareness, building trust, and engaging the right audience
            before they actively start searching for solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
              Start Generating Demand
            </button>

            <button className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white hover:border-[#2563FF]">
              Book A Consultation
            </button>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-28 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/10 bg-[#07101F] p-8"
            >
              <div className="text-[#2563FF]">{item.icon}</div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-white/60">{item.description}</p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">
              Why Businesses Choose Adeverra
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-white/60">
              We combine audience intelligence, data-driven targeting, and
              personalized outreach strategies to help businesses generate
              meaningful demand.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <h3 className="text-2xl font-bold text-white">
                Quality Over Quantity
              </h3>

              <p className="mt-4 text-white/60">
                We focus on attracting relevant prospects instead of generating
                large volumes of unqualified leads.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <h3 className="text-2xl font-bold text-white">
                Data-Driven Targeting
              </h3>

              <p className="mt-4 text-white/60">
                Every campaign is built around audience insights and buyer
                intent signals.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <h3 className="text-2xl font-bold text-white">
                Engagement That Converts
              </h3>

              <p className="mt-4 text-white/60">
                Build awareness, generate interest, and nurture prospects into
                sales-ready opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="mt-32">
          <h2 className="text-center text-5xl font-bold text-white">
            Demand Generation Solutions
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-[#07101F] p-6"
              >
                <CheckCircle size={22} className="text-[#2563FF]" />

                <span className="text-lg text-white">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 rounded-[40px] border border-[#2563FF]/20 bg-[#001A66]/20 p-14 text-center">
          <h2 className="text-5xl font-bold text-white">
            Don't Wait — Start Generating Demand
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Reach the right audience, create meaningful engagement, and build a
            stronger sales pipeline with Adeverra.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
            Generate Demand Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemandGeneration;
