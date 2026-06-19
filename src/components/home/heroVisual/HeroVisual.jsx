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
        w-full
        flex
        items-center
        justify-center
        py-8
        lg:py-0
      "
    >
      {/* Glow */}
      <GlowOrb
        size={250}
        color="violet"
        opacity={10}
        className="right-10 top-20"
      />

      <div
        className="
          relative
          z-10
          w-full
          max-w-4xl
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-6
          lg:gap-8
        "
      >
        {/* LEFT COLUMN */}
        <div
          className="
            flex
            flex-col
            gap-6
            w-full
            lg:w-auto
          "
        >
          <QualifiedLeadsCard />

          <ActiveCampaignsCard />
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="
            flex
            items-center
            justify-center
            w-full
            lg:w-auto
          "
        >
          <ConversionRateCard />
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
