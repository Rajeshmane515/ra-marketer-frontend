import Button from "../common/Button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-black text-white px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-12 md:p-20 text-center">
          <p className="text-blue-500 font-semibold mb-4">START GROWING</p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Ready to grow your business faster?
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Powerful marketing tools and analytics designed to help modern
            businesses scale efficiently.
          </p>

          <div className="flex justify-center">
            <Link to="/contact" className="relative z-50">
              <Button text="Get Started" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
