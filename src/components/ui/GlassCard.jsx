import React from "react";

const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/10
        bg-black
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;