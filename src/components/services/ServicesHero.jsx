import OrbitHero from "./OrbitHero";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="max-w-7xl mx-auto relative overflow-hidden bg-black">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid
            lg:grid-cols-[45%_55%]
            items-center
            gap-10
            lg:gap-16
            min-h-screen
            lg:min-h-[700px]
            py-24
            lg:py-0
          "
        >
          {/* LEFT */}
          <div
            className="
              text-center
              lg:text-left
              order-1
            "
          >
            <h1
              className="
                mb-6
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-tight
                text-white
              "
            >
              Solutions That
              <br />
              Drive{" "}
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-pink-500 bg-clip-text text-transparent">
                Real Growth
              </span>
            </h1>

            <p
              className="
                mb-8
                lg:mb-10
                max-w-xl
                mx-auto
                lg:mx-0
                text-base
                sm:text-lg
                lg:text-xl
                text-slate-400
              "
            >
              End-to-end demand generation services to help you attract, engage,
              and convert high-value customers.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link to="/contact" className="relative z-50">
                <button
                  className="
                  rounded-full
                  border
                  border-blue-500/30
                  px-6
                  sm:px-8
                  py-3
                  sm:py-4
                  text-white
                  transition
                  hover:bg-blue-500
                "
                >
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              justify-center
              items-center
              order-2
              w-full
            "
          >
            <OrbitHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
