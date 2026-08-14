import React from "react";

const GlowButton = ({
  text,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        relative overflow-hidden
        rounded-full
        border border-white/10
        px-8 py-3
        text-sm font-medium text-white
        transition-all duration-300
        hover:scale-105
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80" />

      <span className="absolute inset-[1px] rounded-full bg-black" />

      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default GlowButton;
