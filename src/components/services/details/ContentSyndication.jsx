import React from "react";
import {
  ArrowRight,
  FileText,
  Globe,
  Megaphone,
  Users,
  Share2,
  CheckCircle,
} from "lucide-react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

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
    <section className="relative overflow-hidden py-6 bg-black">
      <Navbar />
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2563FF]/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HERO */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#2563FF]/20 bg-[#2563FF]/10 px-5 py-2 text-sm text-[#7FB2FF]">
            Content Syndication
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white md:text-7xl">
            Amplify Your Content.
            <br />
            <span className="text-[#2563FF]">Reach The Right Audience.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Great content deserves visibility. Our content syndication programs
            help you distribute valuable assets to targeted audiences, generate
            engagement, and create new opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
              Syndicate Content
            </button>

            <button className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white hover:border-[#2563FF]">
              Learn More
            </button>
          </div>
        </div>

        {/* CONTENT FLOW */}
        <div className="mt-28">
          <h2 className="text-center text-4xl font-bold text-white">
            How Content Syndication Works
          </h2>

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
              <div
                key={index}
                className="rounded-[30px] border border-white/10 bg-[#07101F] p-8"
              >
                <div className="text-[#2563FF]">{item.icon}</div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/60">{item.description}</p>
              </div>
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contentTypes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-black/20 p-5"
              >
                <CheckCircle size={22} className="text-[#2563FF]" />

                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* REACH SECTION */}
        <div className="mt-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-bold text-white">
                Expand Beyond
                <br />
                Your Existing Audience
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Content syndication helps your assets reach professionals
                actively looking for insights, solutions, and industry
                expertise.
              </p>
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
        <div className="mt-32 rounded-[40px] border border-[#2563FF]/20 bg-[#001A66]/20 p-14 text-center">
          <h2 className="text-5xl font-bold text-white">
            Turn Content Into Opportunities
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Expand your reach, engage the right audience, and maximize the value
            of every content asset.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
            Start Syndication
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContentSyndication;
