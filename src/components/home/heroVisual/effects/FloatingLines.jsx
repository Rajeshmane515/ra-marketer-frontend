import React from "react";

const FloatingLines = ({ className = "" }) => {
  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Curve */}

      <path
        d="M150 500 C250 420, 350 380, 500 350"
        stroke="rgba(37,99,235,0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Right Curve */}

      <path
        d="M700 300 C850 250, 950 180, 1100 120"
        stroke="rgba(168,85,247,0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bottom Curve */}

      <path
        d="M300 700 C500 620, 700 620, 900 700"
        stroke="rgba(59,130,246,0.15)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Small Dots */}

      <circle cx="500" cy="350" r="5" fill="#2563EB" />

      <circle cx="1100" cy="120" r="5" fill="#A855F7" />

      <circle cx="900" cy="700" r="5" fill="#3B82F6" />
    </svg>
  );
};

export default FloatingLines;
