const companies = [
  "KPMG",
  "Judge Group",
  "Recruit CRM",
  "Globant",
  "DXC Technology",
];

const LogoSlider = () => {
  return (
    <section className="relative overflow-hidden py-8">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      {/* Slider */}
      <div
        className="flex gap-16 w-max animate-marquee-right"
        style={{
          animationDuration: "25s",
        }}
      >
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-max"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-700 hover:text-white transition-colors duration-300 whitespace-nowrap">
              {company}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;
