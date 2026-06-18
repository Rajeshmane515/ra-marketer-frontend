import OrbitHero from "./OrbitHero";

const ServicesHero = () => {
  return (
    <section className=" max-w-7xl mx-auto relative overflow-hidden bg-black">
      <div className="container  px-6 lg:px-12">
        <div className="grid min-h-[620px] items-center gap-15 lg:grid-cols-[5fr_5fr] ">
          {/* LEFT */}
          <div>
            <h1 className="mb-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
              Solutions That
              <br />
              Drive{" "}
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-pink-500 bg-clip-text text-transparent">
                Real Growth
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-xl text-slate-400">
              End-to-end demand generation services to help you attract, engage,
              and convert high-value customers.
            </p>

            <button className="rounded-full border border-blue-500/30 px-8 py-4 text-white transition hover:bg-blue-500">
              Explore Services
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            {" "}
            <OrbitHero />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
