import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#07101F] p-8">
      <div className="text-[#2563FF]">{icon}</div>

      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-white/60">{description}</p>
    </div>
  );
};

export default FeatureCard;
