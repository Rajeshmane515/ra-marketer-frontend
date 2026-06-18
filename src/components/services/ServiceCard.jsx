import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ icon, title, subtitle, description, route }) => {
  const navigate = useNavigate();
  return (
    <div
      className="
        relative
        w-[370px]
        overflow-hidden
        rounded-[32px]
        border
        border-blue-500/40
        bg-[#060B18]
      "
    >
      {/* Icon */}
      <div className="mt-10 flex justify-center">
        <div
          className="
            flex
            h-[170px]
            w-[170px]
            items-center
            justify-center
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/5
            text-blue-600
          "
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 px-10">
        <h3 className="text-3xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-xl text-blue-400">{subtitle}</p>

        <p className="mt-5 text-lg leading-6 text-gray-400">{description}</p>
      </div>

      {/* Button */}
      <div className="flex justify-center py-8">
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevents carousel rotation
            navigate(route);
          }}
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-blue-500/50
            text-blue-400
            transition-all
            duration-300
            hover:bg-blue-500
            hover:text-white
          "
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
