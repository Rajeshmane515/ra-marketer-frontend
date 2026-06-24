import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = ({ title, description, buttonText }) => {
  return (
    <div className=" rounded-[40px] border border-[#2563FF]/20 bg-[#001A66]/20 p-14 text-center my-20">
      <h2 className="text-5xl font-bold text-white">{title}</h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
        {description}
      </p>

      <Link to="/contact">
        <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#2563FF] px-8 py-4 font-semibold text-white transition hover:scale-105">
          {buttonText}
          <ArrowRight size={18} />
        </button>
      </Link>
    </div>
  );
};

export default CTASection;
