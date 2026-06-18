import React from "react";
import GlassCard from "../../../ui/GlassCard";

const MetricCard = ({
  icon,
  title,
  value,
  growth,
  subtitle,
  className = "",
}) => {
  return (
    <GlassCard
      className={`
        p-6
        min-w-[260px]
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-400">{title}</p>

          <h3 className="mt-2 text-5xl font-bold text-white">{value}</h3>

          {growth && (
            <p className="mt-2 text-lg font-semibold text-green-400">
              ↑ {growth}
            </p>
          )}

          {subtitle && <p className="mt-2 text-sm text-gray-400">{subtitle}</p>}
        </div>

        {/* Icon */}
        {icon && (
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-violet-600
              text-white
            "
          >
            {icon}
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default MetricCard;
