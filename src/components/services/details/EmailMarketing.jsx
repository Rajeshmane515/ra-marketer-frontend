import React from "react";
import PageHero from "../commonComponents/PageHero";
import FeatureCard from "../commonComponents/FeatureCard";
import SectionHeading from "../commonComponents/SectionHeading";
import CTASection from "../commonComponents/CTASection";
import ServiceList from "../commonComponents/ServiceList";
import PageContainer from "../commonComponents/PageContainer";
import SEO from "../../common/SEO.jsx";

import {
  Mail,
  Users,
  Target,
  MessageSquare,
  BarChart3,
  Zap,
  CheckCircle,
} from "lucide-react";

const EmailMarketing = () => {
  const capabilities = [
    {
      icon: <Target size={28} />,
      title: "Targeted Campaigns",
      description:
        "Reach relevant decision-makers with targeted B2B email campaigns built around your ideal customer profile.",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Personalized Messaging",
      description:
        "Create relevant messaging that speaks to the challenges, needs, and priorities of your target audience.",
    },
    {
      icon: <Users size={28} />,
      title: "Lead Nurturing",
      description:
        "Keep prospects engaged with strategic email sequences that move them closer to meaningful sales conversations.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Campaign Performance",
      description:
        "Track campaign engagement and identify opportunities to improve outreach and conversion performance.",
    },
  ];

  const solutions = [
    "B2B Email Campaigns",
    "Cold Email Outreach",
    "Lead Nurturing Campaigns",
    "Email List Segmentation",
    "Personalized Email Messaging",
    "Campaign Performance Tracking",
  ];

  const process = [
    {
      number: "01",
      title: "Research",
      description:
        "Understand your target audience, ideal customer profile, and campaign objectives.",
    },
    {
      number: "02",
      title: "Segment",
      description:
        "Organize prospects into relevant audience segments based on business needs and characteristics.",
    },
    {
      number: "03",
      title: "Engage",
      description:
        "Deliver personalized email campaigns designed to start relevant conversations.",
    },
    {
      number: "04",
      title: "Optimize",
      description:
        "Analyze campaign performance and continuously improve messaging and targeting.",
    },
  ];

  return (
    <>
      <SEO
        title="B2B Email Marketing Services | RA Marketer"
        description="RA Marketer provides B2B email marketing services that help businesses reach targeted audiences, nurture prospects, and generate qualified sales opportunities."
      />

      <PageContainer>
        {/* HERO */}
        <PageHero
          badge="B2B Marketing"
          title="B2B Email Marketing"
          highlight="Services"
          description="Reach the right prospects, build meaningful conversations, and nurture B2B opportunities through targeted and personalized email marketing campaigns."
          primaryButtonText="Get Started"
        />

        {/* INTRO */}
        <div className="mt-28">
          <div className="rounded-[40px] border border-white/10 bg-[#07101F] p-10 md:p-14">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2563FF]/10">
                  <Mail size={32} className="text-[#2563FF]" />
                </div>

                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  Turn Email Outreach Into{" "}
                  <span className="text-[#2563FF]">
                    Meaningful Opportunities
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-white/60">
                  Effective B2B email marketing is more than sending messages.
                  It is about reaching the right people with relevant
                  communication at the right time.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/60">
                  RA Marketer helps businesses build targeted email campaigns
                  that engage prospects, nurture relationships, and create
                  opportunities for sales teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mt-32">
          <div className="text-center">
            <SectionHeading
              title="Email Marketing Capabilities"
              description="Everything you need to create targeted, personalized, and measurable B2B email campaigns."
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

        {/* WHY EMAIL MARKETING */}
        <div className="mt-32">
          <div className="text-center">
            <SectionHeading
              title="Why B2B Email Marketing?"
              description="Build consistent engagement with prospects while creating more opportunities for your sales pipeline."
            />
          </div>

          <div className="mt-16 space-y-8">
            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <div className="flex items-start gap-6">
                <div className="text-5xl font-bold text-[#2563FF]">01</div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Reach Targeted Prospects
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-white/60">
                    Connect with relevant decision-makers instead of sending
                    generic messages to broad audiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <div className="flex items-start gap-6">
                <div className="text-5xl font-bold text-[#2563FF]">02</div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Nurture Relationships
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-white/60">
                    Stay connected with prospects through relevant and
                    personalized communication throughout their buying journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07101F] p-8">
              <div className="flex items-start gap-6">
                <div className="text-5xl font-bold text-[#2563FF]">03</div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Create Sales Opportunities
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-white/60">
                    Turn relevant engagement into qualified conversations and
                    opportunities for your sales team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOLUTIONS */}
        <div className="mt-32 rounded-[40px] border border-white/10 bg-[#07101F] p-10 md:p-12">
          <div className="flex items-center gap-4">
            <Zap size={34} className="text-[#2563FF]" />

            <h2 className="text-4xl font-bold text-white">
              Email Marketing Solutions
            </h2>
          </div>

          <div className="mt-12">
            <ServiceList items={solutions} />
          </div>
        </div>

        {/* B2B SAAS */}
        <div className="mt-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Email Marketing for B2B SaaS"
                description="SaaS companies need consistent communication throughout the buyer journey. Targeted email campaigns can help introduce solutions, educate prospects, nurture interest, and support sales conversations."
              />
            </div>

            <div className="rounded-[32px] border border-[#2563FF]/20 bg-[#001A66]/20 p-10">
              <Mail size={52} className="text-[#2563FF]" />

              <h3 className="mt-6 text-3xl font-bold text-white">
                Relevant Messages.
                <br />
                Better Engagement.
                <br />
                Stronger Opportunities.
              </h3>

              <p className="mt-5 leading-relaxed text-white/60">
                Build email experiences around your audience instead of sending
                one-size-fits-all campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-32">
          <SectionHeading
            title="Our Email Marketing Process"
            description="A structured approach to building targeted campaigns and continuously improving performance."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-[30px] border border-white/10 bg-[#07101F] p-8"
              >
                <div className="text-6xl font-bold text-[#2563FF]">
                  {step.number}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTASection
          title="Ready To Reach More B2B Prospects?"
          description="Build targeted email campaigns, nurture valuable prospects, and create more opportunities for your sales pipeline."
          buttonText="Start Email Marketing"
        />
      </PageContainer>
    </>
  );
};

export default EmailMarketing;
