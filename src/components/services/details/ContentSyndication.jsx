import React from "react";
import PageHero from "../commonComponents/PageHero";
import FeatureCard from "../commonComponents/FeatureCard";
import SectionHeading from "../commonComponents/SectionHeading";
import CTASection from "../commonComponents/CTASection";
import ServiceList from "../commonComponents/ServiceList";
import PageContainer from "../commonComponents/PageContainer";
import {
  ArrowRight,
  FileText,
  Globe,
  Megaphone,
  Users,
  Share2,
  CheckCircle,
} from "lucide-react";

const ContentSyndication = () => {
  const channels = [
    {
      icon: <Globe size={28} />,
      title: "Extended Reach",
      description:
        "Distribute content across trusted platforms and reach audiences beyond your existing network.",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Brand Visibility",
      description:
        "Increase awareness and ensure your content is seen by the right people.",
    },
    {
      icon: <Users size={28} />,
      title: "Qualified Audience",
      description:
        "Reach decision-makers actively consuming industry-related content.",
    },
  ];

  const contentTypes = [
    "Whitepapers",
    "eBooks",
    "Case Studies",
    "Industry Reports",
    "Webinars",
    "Product Guides",
  ];

  return (
    <PageContainer>
      {/* HERO */}
      <PageHero
        badge="Content Syndication"
        title="Amplify Your Content."
        highlight="Reach The Right Audience."
        description="Great content deserves visibility. Our content syndication programs help you distribute valuable assets to targeted audiences, generate engagement, and create new opportunities."
        primaryButtonText="Syndicate Content"
      />
      {/* CONTENT FLOW */}
      <div className="mt-28">
        <SectionHeading title="How Content Syndication Works" />

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          {["Create", "Distribute", "Engage", "Capture", "Convert"].map(
            (step, index) => (
              <React.Fragment key={step}>
                <div className="rounded-full border border-white/10 bg-[#07101F] px-6 py-3 text-white">
                  {step}
                </div>

                {index !== 4 && <div className="h-px w-10 bg-[#2563FF]/40" />}
              </React.Fragment>
            ),
          )}
        </div>
      </div>

      {/* BENEFITS */}
      <div className="mt-32">
        <div className="grid gap-8 lg:grid-cols-3">
          {channels.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* CONTENT TYPES */}
      <div className="mt-32 rounded-[40px] border border-white/10 bg-[#07101F] p-12">
        <div className="text-center">
          <FileText size={40} className="mx-auto text-[#2563FF]" />

          <h2 className="mt-6 text-5xl font-bold text-white">
            Content We Syndicate
          </h2>
        </div>

        <div className="mt-14">
          <ServiceList items={contentTypes} />
        </div>
      </div>

      {/* REACH SECTION */}
      <div className="mt-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Expand Beyond Your Existing Audience "
              description="  Content syndication helps your assets reach professionals
                actively looking for insights, solutions, and industry
                expertise."
            />
          </div>

          <div className="rounded-[32px] border border-[#2563FF]/20 bg-[#001A66]/20 p-10">
            <Share2 size={50} className="text-[#2563FF]" />

            <h3 className="mt-6 text-3xl font-bold text-white">
              More Reach.
              <br />
              More Engagement.
              <br />
              More Opportunities.
            </h3>
          </div>
        </div>
      </div>

      {/* CTA */}

      <CTASection
        title="Turn Content Into Opportunities"
        description="Expand your reach, engage the right audience, and maximize the value of every content asset."
        buttonText="Start Syndication"
      />
    </PageContainer>
  );
};

export default ContentSyndication;
