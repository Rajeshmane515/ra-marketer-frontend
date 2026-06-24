import React from "react";
import { CheckCircle } from "lucide-react";

const ServiceList = ({ items }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-[#07101F] p-6"
        >
          <CheckCircle size={22} className="text-[#2563FF]" />

          <span className="text-white">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
