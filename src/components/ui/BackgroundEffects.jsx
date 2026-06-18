import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top Left Glow */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Bottom Right Glow */}
      <div className="absolute bottom-[-250px] right-[-250px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[140px]" />

      {/* Center Glow */}
      <div className="absolute top-[40%] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default BackgroundEffects;
