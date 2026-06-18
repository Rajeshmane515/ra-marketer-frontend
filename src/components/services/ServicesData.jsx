import { Target, TrendingUp, Building2, Share2 } from "lucide-react";

export const services = [
  {
    id: 1,
    icon: <Target size={90} strokeWidth={1.5} />,

    // Card Content
    title: "B2B Lead Generation",
    subtitle: "High-quality leads that convert",
    description:
      "Generate targeted prospects and fill your sales pipeline with qualified opportunities.",

    // Preview Section Content
    badge: "Lead Generation",

    heading: "Generate More Qualified Leads",

    previewDescription:
      "Reach decision-makers, engage high-intent prospects, and build a predictable sales pipeline with targeted lead generation strategies.",

    buttonText: "See More",

    route: "/services/lead-generation",
  },

  {
    id: 2,
    icon: <TrendingUp size={90} strokeWidth={1.5} />,

    // Card Content
    title: "Demand Generation",
    subtitle: "Create demand that lasts",
    description:
      "Build awareness, engage buyers, and create demand before prospects enter the market.",

    // Preview Section Content
    badge: "Demand Generation",

    heading: "Fill Your Pipeline With Qualified Opportunities",

    previewDescription:
      "Build awareness, establish trust, and engage potential buyers before they actively begin searching for solutions.",

    buttonText: "See More",

    route: "/services/demand-generation",
  },

  {
    id: 3,
    icon: <Building2 size={90} strokeWidth={1.5} />,

    // Card Content
    title: "Account Based Marketing",
    subtitle: "Target high-value accounts",
    description:
      "Focus on key decision-makers with personalized campaigns designed to drive revenue.",

    // Preview Section Content
    badge: "Account Based Marketing",

    heading: "Engage High-Value Accounts With Precision",

    previewDescription:
      "Deliver personalized experiences to key decision-makers and maximize conversions from your most valuable accounts.",

    buttonText: "See More",

    route: "/services/account-based-marketing",
  },

  {
    id: 4,
    icon: <Share2 size={90} strokeWidth={1.5} />,

    // Card Content
    title: "Content Syndication",
    subtitle: "Expand your reach",
    description:
      "Distribute valuable content across trusted channels and engage the right audience.",

    // Preview Section Content
    badge: "Content Syndication",

    heading: "Expand Your Reach Across Trusted Channels",

    previewDescription:
      "Distribute your content to the right audience, increase visibility, and generate qualified engagement at scale.",

    buttonText: "See More",

    route: "/services/content-syndication",
  },
];
