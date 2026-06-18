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
        min-h-[650px]
        w-full
        overflow-hidden
      "
    >
      {/* Background Glows */}

      <GlowOrb
        size={250}
        color="violet"
        opacity={10}
        className="bottom-50 right-40"
      />

      {/* Dashboard Area */}

      <div className="relative z-10">
        {/* Qualified Leads */}

        <QualifiedLeadsCard
          className="
            absolute
             -right-12
            top-0
            z-20
          "
        />

        {/* Conversion */}

        <ConversionRateCard
          className="
            absolute
           left-20
            -top-40
            z-20
          "
        />

        {/* Active Campaigns */}

        <ActiveCampaignsCard
          className="
            absolute
            -right-12
            bottom-10
            z-20
          "
        />
      </div>
    </div>
  );
};

export default HeroVisual;
