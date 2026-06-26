import React from "react";

const SectionBadge = ({ text, className = "" }) => {
  return (
    <div
      className={`
        inline-flex items-center justify-center
        px-5 py-2.5
        my-6
        rounded-full
        border border-[#2563EB]/40
        bg-[#2563EB]/5
        backdrop-blur-md
        shadow-[0_0_20px_rgba(37,99,235,0.08)]
        transition-all duration-300
        hover:border-[#2563EB]/80
        hover:bg-[#2563EB]/10
        ${className}
      `}
    >
      <span
        className="
          text-xs
          md:text-sm
          uppercase
          tracking-[0.35em]
          font-bold
          text-[#2563FF]
        "
      >
        {text}
      </span>
    </div>
  );
};

export default SectionBadge;
