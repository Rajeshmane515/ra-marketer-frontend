const companies = [
  {
    name: "KPMG",
    logo: "https://adeverra.com/wp-content/uploads/2026/05/KPMG-300x200-1.png",
  },
  {
    name: "Judge Group",
    logo: "https://adeverra.com/wp-content/uploads/2026/05/JUDGE-300x200-1.png",
  },
  {
    name: "Recruit CRM",
    logo: "https://adeverra.com/wp-content/uploads/2026/05/CRM-300x200-1.png",
  },
  {
    name: "Globant",
    logo: "https://adeverra.com/wp-content/uploads/2026/05/GLOBANT-300x200-1.png",
  },
  {
    name: "DXC Technology",
    logo: "https://adeverra.com/wp-content/uploads/2026/05/DXC-TECH-300x200-1.png",
  },
];

const LogoSlider = () => {
  return (
    <section className="relative overflow-hidden py-12 bg-black">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      {/* Slider */}
      <div
        className="flex w-max gap-8 animate-marquee-right"
        style={{ animationDuration: "25s" }}
      >
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="
              w-60 h-32
              flex items-center justify-center
              rounded-3xl
              bg-[#F3F4F6]
              backdrop-blur-md
              border border-zinc-700
              hover:border-[#2563FF]
              hover:bg-zinc-800
              shadow-lg
              transition-all duration-300
              flex-shrink-0
              p-2
            "
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;
