import React from "react";

const ArcOrbit = () => {
  return (
    <>
      {/* Arc Wrapper */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl overflow-hidden z-30">
        {/* Horizon Arc */}
        <div className="relative left-1/2 -translate-x-1/2 bottom-[-420px] w-[1500px] h-[650px] rounded-[100%] border-t border-white/5 bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent backdrop-blur-xl" />
      </div>

      {/* Main Horizon Glow */}
      <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 w-[1100px] h-[120px] bg-blue-500/20 blur-3xl rounded-full z-40" />

      {/* Center Shine */}
      <div className="absolute bottom-[150px] left-1/2 -translate-x-1/2 w-[400px] h-[55px]   blur-2xl rounded-full z-40" />
    </>
  );
};

export default ArcOrbit;
