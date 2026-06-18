import { Link } from "react-router-dom";

const ServicePreview = ({ service }) => {
  return (
    <section className="max-w-5xl mx-auto text-center py-20">
      <span className="rounded-full border border-blue-500/30 px-5 py-2 text-blue-400">
        {service.badge}
      </span>

      <h2 className="mt-8 text-6xl font-bold text-white">{service.heading}</h2>

      <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
        {service.description}
      </p>

      <Link
        to={service.route}
        className="inline-block mt-10 rounded-xl bg-blue-600 px-8 py-4 text-white"
      >
        See More
      </Link>
    </section>
  );
};

export default ServicePreview;
