import { Link } from "react-router-dom";
import Button from "../common/Button";
import Background from "./Background";
import HeroVisual from "./heroVisual/HeroVisual";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 lg:py-20">
      <Background />

      {/* Content */}
      <div
        className="
          relative
          z-20
          max-w-7xl
          mx-auto
          max-h-500
          px-5
          sm:px-8
          lg:px-12
          pt-28
          lg:pt-0
          grid lg:grid-cols-[55%_45%]
          items-center
          gap-10
          lg:gap-6
          
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex
            flex-col
            justify-center
            text-center
            lg:text-left
          "
        >
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              font-bold
              leading-tight
              mb-6
              lg:mb-8
            "
          >
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className=" bg-gradient-to-r from-blue-500 via-pink-300 to-white bg-clip-text text-transparent">
                Captive Demand Gen Operational Solutions
              </span>
            </h1>
          </h1>

          <p
            className="
              text-zinc-400
              text-lg
              sm:text-xl
              md:text-2xl
              mb-8
              lg:mb-10
            "
          >
            For Global Agencies & Publishers
          </p>

          <div
            className="
              flex
              justify-center
              lg:justify-start
              
            "
          >
            <Link to="/contact">
              <Button text="Get Started" />
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="
            flex
            items-center
            justify-center
            mt-8
            lg:mt-0
          "
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
