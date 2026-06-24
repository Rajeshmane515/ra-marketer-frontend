import React from "react";

const SectionHeading = ({ title, description }) => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-white">{title}</h2>

      {description && (
        <p className="mx-auto mt-4 max-w-3xl text-white/60">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
