import { Link } from "react-router-dom";
import Button from "../common/Button";
import Background from "./Background";
import HeroVisual from "./heroVisual/HeroVisual";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden ">
      <Background />

      {/* Content */}
      <div
        className="
          relative
          z-20
          max-w-7xl
          mx-auto
          min-h-screen
          px-5
          sm:px-8
          lg:px-12
          pt-28
          lg:pt-0
          grid
          lg:grid-cols-2
          items-center
          gap-10
          lg:gap-12
          
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
            <span className="bg-gradient-to-r from-blue-500 via-slate-200 to-pink-400 bg-clip-text text-transparent">
              Captive Demand Gen
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-500 via-slate-200 to-pink-400 bg-clip-text text-transparent">
              Operational Solutions
            </span>
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
