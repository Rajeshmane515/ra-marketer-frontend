import FeatureCard from "./FeatureCard";

import { Target, Bot, BarChart3, Users, Workflow } from "lucide-react";

const features = [
  {
    title: "Lead Generation",
    desc: "Generate high-quality B2B leads using smart targeting and modern outreach strategies.",
    icon: Target,
  },
  {
    title: "Campaign Automation",
    desc: "Automate repetitive workflows and manage campaigns more efficiently.",
    icon: Bot,
  },
  {
    title: "Performance Analytics",
    desc: "Track engagement, conversions, and campaign growth in real time.",
    icon: BarChart3,
  },
  {
    title: "Audience Targeting",
    desc: "Reach the right decision-makers with data-driven audience segmentation.",
    icon: Users,
  },
  {
    title: "CRM Integration",
    desc: "Connect your outreach workflows seamlessly with your existing CRM tools.",
    icon: Workflow,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-16 px-6">
          <div className="flex items-center justify-center mb-6">
            <div className="px-5 py-2 rounded-full  border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.15)] ">
              <p className=" text-sm font-semibold tracking-[0.35em] uppercase text-blue-300 ">
                Features
              </p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Everything your business needs
          </h2>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative overflow-hidden max-w-5xl mx-auto pt-3">
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black to-transparent" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black to-transparent" />

          {/* SLIDER */}
          <div
            className="flex gap-8 w-max animate-marquee-left"
            style={{
              animationDuration: "22s",
            }}
          >
            {[...features, ...features].map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
