import React from "react";
import DonutChart from "../charts/DonutChart";
import GlassCard from "../../../ui/glassCard";

const ConversionRateCard = ({ className = "" }) => {
  return (
    <GlassCard
      className={`
        p-6
        min-w-[100px]
        ${className}
      `}
    >
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-white">Conversion Rate</h3>

        <p className="mt-2 text-sm text-gray-400">Performance Overview</p>

        <div className="mt-6">
          <DonutChart percentage={86} />
        </div>
      </div>
    </GlassCard>
  );
};

export default ConversionRateCard;
