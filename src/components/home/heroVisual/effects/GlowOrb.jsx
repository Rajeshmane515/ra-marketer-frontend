import React from "react";

const GlowOrb = ({
  size = 300,
  color = "blue",
  opacity = 20,
  className = "",
}) => {
  const colors = {
    blue: "bg-blue-500",
    violet: "bg-violet-500",
    cyan: "bg-cyan-500",
    pink: "bg-pink-500",
  };

  return (
    <div
      className={`
        absolute
        rounded-full
        blur-[120px]
        ${colors[color]}
        ${className}
      `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity / 100,
      }}
    />
  );
};

export default GlowOrb;
