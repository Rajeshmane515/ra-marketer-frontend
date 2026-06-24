import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({
  badge,
  title,
  highlight,
  description,
  primaryButtonText,
}) => {
  return (
    <div className="text-center">
      <span className="inline-flex rounded-full border border-[#2563FF]/20 bg-[#2563FF]/10 px-5 py-2 text-sm text-[#7FB2FF]">
        {badge}
      </span>

      <h1 className="mt-8 text-5xl font-bold text-white md:text-7xl">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-[#2563FF]">{highlight}</span>
          </>
        )}
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
        {description}
      </p>

      <div className="mt-10 flex justify-center">
        <Link to="/contact" className="relative z-50">
          <button className="rounded-xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
            {primaryButtonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageHero;
