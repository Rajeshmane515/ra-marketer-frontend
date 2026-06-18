import React from "react";

const LineChart = () => {
  return (
    <div className="w-full">
      <svg viewBox="0 0 800 300" className="h-full w-full">
        {/* Grid Lines */}

        {[50, 100, 150, 200, 250].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="800"
            y2={y}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}

        {/* Glow Effect */}

        <path
          d="
            M 0 220
            C 80 200, 120 170, 180 190
            C 250 210, 280 120, 350 130
            C 430 145, 500 70, 580 90
            C 650 105, 720 40, 800 60
          "
          fill="none"
          stroke="#2563EB"
          strokeWidth="10"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Main Line */}

        <path
          d="
            M 0 220
            C 80 200, 120 170, 180 190
            C 250 210, 280 120, 350 130
            C 430 145, 500 70, 580 90
            C 650 105, 720 40, 800 60
          "
          fill="none"
          stroke="#60A5FA"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Data Points */}

        {[
          [180, 190],
          [350, 130],
          [580, 90],
          [800, 60],
        ].map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r="7" fill="#60A5FA" />
        ))}

        {/* Glow Filter */}

        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default LineChart;
