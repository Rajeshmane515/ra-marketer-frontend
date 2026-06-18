import LogoSlider from "./LogoSlider";

const CompaniesSection = () => {
  return (
    <section className="bg-black text-white px-6 py-20 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-zinc-500 uppercase tracking-[4px] mb-12">
          Trusted by modern companies
        </p>

        <LogoSlider animated={true} />
      </div>
    </section>
  );
};

export default CompaniesSection;
