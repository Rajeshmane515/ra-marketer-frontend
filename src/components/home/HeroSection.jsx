import { Link } from "react-router-dom";
import Button from "../common/Button";
import Background from "./Background";
import Ribbon from "../animations/RibbonHero";
import HeroVisual from "./heroVisual/HeroVisual";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Background />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto min-h-screen grid lg:grid-cols-2 items-center gap-12">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-blue-500 via-slate-200 to-pink-400 bg-clip-text text-transparent">
              Captive Demand Gen
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-500 via-slate-200 to-pink-400 bg-clip-text text-transparent">
              Operational Solutions
            </span>
          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl mb-10">
            For Global Agencies & Publishers
          </p>

          <div>
            <Link to="/contact">
              <Button text="Get Started" />
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
