import React from "react";
import SectionHeading from "../commonComponents/SectionHeading";
import PageHero from "../commonComponents/PageHero";
import FeatureCard from "../commonComponents/FeatureCard";
import CTASection from "../commonComponents/CTASection";
import ServiceList from "../commonComponents/ServiceList";
import PageContainer from "../commonComponents/PageContainer";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react";

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
    <PageContainer>
      {/* HERO */}
      <PageHero
        badge="Demand Generation"
        title="Fill Your Pipeline With"
        highlight="Qualified Opportunities"
        description="Demand generation is more than collecting contacts. It's about creating awareness, building trust, and engaging the right audience before they actively start searching for solutions."
        primaryButtonText="Start Generating Demand"
      />

      {/* BENEFITS */}
      <div className="mt-28 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="mt-32">
        <SectionHeading
          title="Why Businesses Choose Adeverra"
          description="We combine audience intelligence, data-driven targeting, and personalized outreach strategies to help businesses generate meaningful demand."
        />

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
              Every campaign is built around audience insights and buyer intent
              signals.
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
        <SectionHeading title="Demand Generation Solutions" />

        <div className="mt-14">
          <ServiceList items={services} />
        </div>
      </div>

      {/* CTA */}

      <CTASection
        title="Don't Wait — Start Generating Demand"
        description="Reach the right audience, create meaningful engagement, and build a stronger sales pipeline with Adeverra."
        buttonText="Generate Demand Now"
      />
    </PageContainer>
  );
};

export default DemandGeneration;
