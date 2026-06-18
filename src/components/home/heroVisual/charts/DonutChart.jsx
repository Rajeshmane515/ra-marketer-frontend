import React from "react";

const DonutChart = ({ percentage = 86, size = 140, strokeWidth = 14 }) => {
  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const progress = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
        />

        {/* Progress Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#2563EB"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
        />
      </svg>

      {/* Center Text */}
      <div className="absolute text-center">
        <h3 className="text-3xl font-bold text-white">{percentage}%</h3>

        <p className="mt-1 text-sm text-gray-400">Conversion</p>
      </div>
    </div>
  );
};

export default DonutChart;
