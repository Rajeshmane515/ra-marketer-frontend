import React from "react";
import PageHero from "../commonComponents/PageHero";
import FeatureCard from "../commonComponents/FeatureCard";
import SectionHeading from "../commonComponents/SectionHeading";
import CTASection from "../commonComponents/CTASection";
import ServiceList from "../commonComponents/ServiceList";
import PageContainer from "../commonComponents/PageContainer";
import {
  ArrowRight,
  Building2,
  Users,
  Target,
  Crosshair,
  Briefcase,
  Radar,
} from "lucide-react";

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
    <PageContainer>
      {/* HERO */}
      <PageHero
        badge="Account-Based Marketing"
        title="Focus On The"
        highlight="Accounts That Matter"
        description="Stop chasing thousands of prospects. Focus on high-value accounts, engage decision-makers, and build personalized campaigns that drive meaningful business conversations."
        primaryButtonText="Launch ABM Campaign"
      />

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
          <SectionHeading title="Why Account-Based Marketing?" />
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
                  Focus your efforts on accounts that have the highest potential
                  to become customers.
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
        <SectionHeading title="Our ABM Framework" />

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
        <SectionHeading title="ABM Services" />

        <div className="mt-14">
          <ServiceList items={services} />
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Close Bigger Deals With The Right Accounts"
        description="Reach decision-makers, personalize engagement, and focus your resources where they matter most."
        buttonText="Start ABM Strategy"
      />
    </PageContainer>
  );
};

export default AccountMarketing;
