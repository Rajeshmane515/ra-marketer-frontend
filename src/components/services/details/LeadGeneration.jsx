import React from "react";
import SectionHeading from "../commonComponents/SectionHeading";
import PageHero from "../commonComponents/PageHero";
import FeatureCard from "../commonComponents/FeatureCard";
import CTASection from "../commonComponents/CTASection";
import ServiceList from "../commonComponents/ServiceList";
import PageContainer from "../commonComponents/PageContainer";
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
    <PageContainer>
      {/* Hero */}
      <PageHero
        badge="B2B Lead Generation"
        title="Generate More"
        highlight="Qualified Leads"
        description="Connect with the right decision-makers through research-driven prospecting, verified contact data, and targeted outreach strategies designed to build a stronger sales pipeline."
        primaryButtonText="Start Generating Leads"
      />

      {/* Capabilities */}
      <div className="mt-32">
        <div className="text-center">
          <SectionHeading
            title="Core Capabilities"
            description="Everything needed to support a modern lead generation strategy."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Included */}
      <div className="mt-32 rounded-[40px] border border-white/10 bg-[#07101F] p-12">
        <SectionHeading title="What's Included" />

        <div className="mt-12">
          <ServiceList items={solutions} />
        </div>
      </div>

      {/* Process */}
      <div className="mt-32">
        <SectionHeading title="Our Process" />

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {process.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* CTA */}

      <CTASection
        title="Ready To Build A Stronger Pipeline?"
        description="Reach the right prospects, start better conversations, and create more opportunities for growth."
        buttonText="Get Started"
      />
    </PageContainer>
  );
};

export default LeadGeneration;
