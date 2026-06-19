import React from "react";
import {
  ArrowRight,
  Building2,
  Users,
  Target,
  Crosshair,
  Briefcase,
  Radar,
} from "lucide-react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const AccountMarketing = () => {
  const services = [
    "Target Account Selection",
    "Stakeholder Mapping",
    "Intent-Based Research",
    "Personalized Content Strategy",
    "Multi-Channel Outreach",
    "ABM Campaign Optimization",
  ];

  const framework = [
    {
      number: "01",
      title: "Identify Accounts",
      description:
        "Select high-value companies that align with your ideal customer profile.",
    },
    {
      number: "02",
      title: "Research Stakeholders",
      description:
        "Understand decision-makers, buying committees, and business priorities.",
    },
    {
      number: "03",
      title: "Personalize Outreach",
      description:
        "Deliver tailored messaging that resonates with each account.",
    },
    {
      number: "04",
      title: "Generate Opportunities",
      description:
        "Turn engagement into conversations, meetings, and revenue opportunities.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-6 bg-black">
      {/* Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#2563FF]/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HERO */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#2563FF]/20 bg-[#2563FF]/10 px-5 py-2 text-sm text-[#7FB2FF]">
            Account-Based Marketing
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white md:text-7xl">
            Focus On The
            <br />
            <span className="text-[#2563FF]">Accounts That Matter</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Stop chasing thousands of prospects. Focus on high-value accounts,
            engage decision-makers, and build personalized campaigns that drive
            meaningful business conversations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
              Launch ABM Campaign
            </button>

            <button className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white hover:border-[#2563FF]">
              Talk To Experts
            </button>
          </div>
        </div>

        {/* VISUAL ABM CONCEPT */}
        <div className="mt-28 rounded-[40px] border border-white/10 bg-[#07101F] p-10">
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="text-center">
              <Building2 size={50} className="mx-auto text-[#2563FF]" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Enterprise Accounts
              </h3>
            </div>

            <div className="text-center">
              <Target size={70} className="mx-auto text-[#2563FF]" />
              <h3 className="mt-4 text-2xl font-bold text-white">
                Personalized Campaigns
              </h3>
            </div>

            <div className="text-center">
              <Briefcase size={50} className="mx-auto text-[#2563FF]" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Revenue Opportunities
              </h3>
            </div>
          </div>
        </div>

        {/* WHY ABM */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">
              Why Account-Based Marketing?
            </h2>
          </div>

          <div className="mt-16 space-y-8">
            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <div className="flex items-start gap-6">
                <div className="text-5xl font-bold text-[#2563FF]">01</div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Precision Targeting
                  </h3>

                  <p className="mt-4 text-white/60">
                    Focus your efforts on accounts that have the highest
                    potential to become customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <div className="flex items-start gap-6">
                <div className="text-5xl font-bold text-[#2563FF]">02</div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Personalized Experiences
                  </h3>

                  <p className="mt-4 text-white/60">
                    Deliver messaging tailored to each account's business goals,
                    challenges, and stakeholders.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <div className="flex items-start gap-6">
                <div className="text-5xl font-bold text-[#2563FF]">03</div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Higher Conversion Potential
                  </h3>

                  <p className="mt-4 text-white/60">
                    Engage decision-makers directly and create stronger
                    opportunities for sales conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FRAMEWORK */}
        <div className="mt-32">
          <h2 className="text-center text-5xl font-bold text-white">
            Our ABM Framework
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {framework.map((step) => (
              <div
                key={step.number}
                className="rounded-[30px] border border-white/10 bg-[#07101F] p-8"
              >
                <div className="text-6xl font-bold text-[#2563FF]">
                  {step.number}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="mt-32">
          <h2 className="text-center text-5xl font-bold text-white">
            ABM Services
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-[#07101F] p-6"
              >
                <Radar size={22} className="text-[#2563FF]" />

                <span className="text-lg text-white">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 rounded-[40px] border border-[#2563FF]/20 bg-[#001A66]/20 p-14 text-center">
          <Crosshair size={50} className="mx-auto text-[#2563FF]" />

          <h2 className="mt-6 text-5xl font-bold text-white">
            Close Bigger Deals With The Right Accounts
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Reach decision-makers, personalize engagement, and focus your
            resources where they matter most.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
            Start ABM Strategy
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountMarketing;
