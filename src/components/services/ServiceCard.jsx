import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ icon, title, subtitle, description, route }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative
        w-full
        max-w-[320px]
        sm:max-w-[340px]
        lg:w-[370px]
        lg:max-w-none
        overflow-hidden
        rounded-[24px]
        lg:rounded-[32px]
        border
        border-blue-500/40
        bg-[#060B18]
      "
    >
      {/* Icon */}
      <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center">
        <div
          className="
            flex
            h-[120px]
            w-[120px]
            sm:h-[140px]
            sm:w-[140px]
            lg:h-[170px]
            lg:w-[170px]
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
      <div className="mt-5 px-5 sm:px-7 lg:px-10">
        <h3
          className="
            text-2xl
            sm:text-[28px]
            lg:text-3xl
            font-semibold
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            lg:mt-3
            text-base
            sm:text-lg
            lg:text-xl
            text-blue-400
          "
        >
          {subtitle}
        </p>

        <p
          className="
            mt-4
            lg:mt-5
            text-sm
            sm:text-base
            lg:text-lg
            leading-6
            text-gray-400
          "
        >
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center py-6 lg:py-8">
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(route);
          }}
          className="
            flex
            h-12
            w-12
            sm:h-14
            sm:w-14
            lg:h-16
            lg:w-16
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
          <ArrowRight size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
