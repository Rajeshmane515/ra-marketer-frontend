import React from "react";
import {
  ArrowRight,
  Target,
  Users,
  Database,
  CheckCircle,
  Search,
  Send,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const LeadGeneration = () => {
  const capabilities = [
    {
      icon: <Target size={28} />,
      title: "ICP Targeting",
      description:
        "Identify and reach businesses that perfectly match your ideal customer profile.",
    },
    {
      icon: <Database size={28} />,
      title: "Verified Data",
      description:
        "Accurate and validated contact information for better outreach performance.",
    },
    {
      icon: <Users size={28} />,
      title: "Qualified Prospects",
      description:
        "Focus on conversations that have real potential to become opportunities.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Pipeline Growth",
      description:
        "Generate a steady flow of prospects to support long-term growth.",
    },
  ];

  const process = [
    {
      icon: <Search size={28} />,
      title: "Research",
      description:
        "Understand your audience, industry, and ideal customer profile.",
    },
    {
      icon: <Target size={28} />,
      title: "Target",
      description: "Build a focused list of companies and decision-makers.",
    },
    {
      icon: <Send size={28} />,
      title: "Connect",
      description: "Engage prospects through personalized outreach strategies.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Deliver",
      description:
        "Provide qualified leads ready for meaningful sales conversations.",
    },
  ];

  const solutions = [
    "Decision Maker Research",
    "LinkedIn Prospecting",
    "Verified Contact Discovery",
    "Lead Qualification",
    "ICP Identification",
    "Email List Building",
  ];

  return (
    <section className="relative overflow-hidden py-6 bg-black">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2563FF]/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#2563FF]/30 bg-[#2563FF]/10 px-5 py-2 text-sm font-medium text-[#7FB2FF]">
            B2B Lead Generation
          </span>

          <h1 className="mt-10 text-5xl font-black leading-[0.95] text-white md:text-7xl">
            Generate More
            <br />
            <span className="text-[#2563FF]">Qualified Leads</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
            Connect with the right decision-makers through research-driven
            prospecting, verified contact data, and targeted outreach strategies
            designed to build a stronger sales pipeline.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="rounded-2xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105">
              Start Generating Leads
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#2563FF]">
              View Strategy
            </button>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">Core Capabilities</h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Everything needed to support a modern lead generation strategy.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-[#07101F] p-8"
              >
                <div className="text-[#2563FF]">{item.icon}</div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Included */}
        <div className="mt-32 rounded-[40px] border border-white/10 bg-[#07101F] p-12">
          <h2 className="text-center text-5xl font-bold text-white">
            What's Included
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-5"
              >
                <CheckCircle size={22} className="text-[#2563FF]" />

                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-32">
          <h2 className="text-center text-5xl font-bold text-white">
            Our Process
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-[#07101F] p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563FF]/10 text-[#2563FF]">
                  {step.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 rounded-[40px] border border-[#2563FF]/20 bg-[#001A66]/20 p-14 text-center">
          <h2 className="text-5xl font-bold text-white">
            Ready To Build A Stronger Pipeline?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Reach the right prospects, start better conversations, and create
            more opportunities for growth.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;
