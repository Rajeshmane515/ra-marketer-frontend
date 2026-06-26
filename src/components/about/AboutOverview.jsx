import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Rocket,
  Users,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import SectionBadge from "../common/SectionBadge";
import FeatureCard from "../services/commonComponents/FeatureCard";
import CTASection from "../services/commonComponents/CTASection";

const AboutOverview = () => {
  const strengths = [
    "Data-Driven Lead Generation",
    "Account-Based Marketing",
    "Demand Generation Campaigns",
    "Decision-Maker Targeting",
    "Transparent Reporting",
    "Dedicated Campaign Support",
  ];

  const features = [
    {
      icon: <Users size={32} />,
      title: "Audience First",
      description:
        "Every campaign starts with understanding your audience, their challenges, and their buying journey.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Performance Focused",
      description:
        "We focus on measurable outcomes, helping businesses maximize the impact of their marketing investments.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Growth Driven",
      description:
        "Our strategies are designed to support long-term growth, stronger pipelines, and better sales opportunities.",
    },
  ];

  return (
    <section className="relative py-28 bg-black">
      <div className="flex justify-center mb-8">
        <SectionBadge text="  About RA Marketer" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
              Helping B2B Companies
              <br />
              Build Predictable Growth
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/70">
              RA Marketer is a modern B2B marketing partner focused on
              connecting businesses with the right audience at the right time.
              We combine strategic targeting, quality data, and
              performance-driven campaigns to help organizations create stronger
              pipelines and generate meaningful opportunities.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Our goal is simple — help businesses spend less time chasing
              prospects and more time closing valuable deals. Every campaign we
              run is built around measurable outcomes, transparency, and
              long-term growth.
            </p>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-[#07101F] p-10">
            <h3 className="text-3xl font-bold text-white">What We Bring</h3>

            <div className="mt-8 space-y-5">
              {strengths.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle size={22} className="text-[#2563FF]" />

                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-32 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[40px] border border-white/10 bg-[#07101F] p-10">
            <div className="flex items-center gap-4">
              <Rocket size={32} className="text-[#2563FF]" />

              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              We envision a future where B2B businesses can identify, engage,
              and convert their ideal customers through smarter, data-powered
              marketing strategies. By embracing innovation and modern
              technologies, we aim to help companies grow faster and make better
              marketing decisions.
            </p>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-[#07101F] p-10">
            <div className="flex items-center gap-4">
              <Target size={32} className="text-[#2563FF]" />

              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Our mission is to create meaningful connections between businesses
              and their future customers. Through targeted campaigns, audience
              intelligence, and performance-focused execution, we help
              organizations generate demand, build trust, and accelerate revenue
              growth.
            </p>
          </div>
        </div>

        {/* Why Businesses Work With Us */}
        <div className="mt-32">
          <div className="text-center">
            <SectionBadge text="Why RA Marketer" />

            <h2 className="mt-4 text-5xl font-bold text-white">
              Built Around Results
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTASection
          title=" Let's Build Something Bigger Together"
          description=" Whether you're looking to generate demand, reach decision-makers, or
            build a stronger sales pipeline, RA Marketer is ready to help you
            achieve your growth goals."
          buttonText="Partner With Us"
        />
      </div>
    </section>
  );
};

export default AboutOverview;
