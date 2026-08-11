import React from "react";
import SectionHeading from "../commonComponents/SectionHeading";
import PageHero from "../commonComponents/PageHero";
import FeatureCard from "../commonComponents/FeatureCard";
import CTASection from "../commonComponents/CTASection";
import ServiceList from "../commonComponents/ServiceList";
import PageContainer from "../commonComponents/PageContainer";
import SEO from "../../common/SEO.jsx";

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
    <>
      <SEO
        title="B2B Lead Generation Services | RA Marketer"
        description="RA Marketer provides B2B lead generation services that help businesses identify, reach, and qualify decision-makers to build a stronger sales pipeline."
      />

      <PageContainer>
        {/* Hero */}
        <PageHero
          badge="Lead Generation"
          title="B2B Lead Generation"
          highlight="Services"
          description="RA Marketer provides B2B lead generation services that help businesses identify the right decision-makers, connect with qualified prospects, and build a stronger sales pipeline."
          primaryButtonText="Get Started"
        />

        {/* Capabilities */}
        <div className="mt-32">
          <div className="text-center">
            <SectionHeading
              title="Core Capabilities"
              description="RA Marketer helps IT companies and B2B organizations generate qualified leads by reaching relevant decision-makers and building targeted sales pipelines."
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
    </>
  );
};

export default LeadGeneration;
