import React from "react";

import QualifiedLeadsCard from "./cards/QualifiedLeadsCard";
import ActiveCampaignsCard from "./cards/ActiveCampaignsCard";
import ConversionRateCard from "./cards/ConversionRateCard";
import GlowOrb from "./effects/GlowOrb";

const HeroVisual = () => {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        min-h-[420px]
        md:min-h-[550px]
        lg:min-h-[650px]
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <GlowOrb
        size={250}
        color="violet"
        opacity={10}
        className="bottom-20 md:bottom-40 lg:bottom-50 right-10 md:right-20 lg:right-40"
      />

      {/* Mobile Layout */}
      <div
        className="
          flex
          flex-col
          items-center
          gap-5
          w-full
          lg:hidden
          relative
          z-10
        "
      >
        <ConversionRateCard />
        <QualifiedLeadsCard />
        <ActiveCampaignsCard />
      </div>

      {/* Desktop Layout */}
      <div
        className="
          hidden
          lg:block
          relative
          z-10
          w-full
          h-[500px]
          xl:h-[550px]
        "
      >
        {/* Qualified Leads */}
        <QualifiedLeadsCard
          className="
            absolute
            -right-12
            top-24
            z-20
          "
        />

        {/* Conversion */}
        <ConversionRateCard
          className="
            absolute
            left-16
            top-0
            z-20
          "
        />

        {/* Active Campaigns */}
        <ActiveCampaignsCard
          className="
            absolute
            -right-12
            bottom-16
            z-20
          "
        />
      </div>
    </div>
  );
};

export default HeroVisual;
