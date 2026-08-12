import { Link } from "react-router-dom";

const BlogLink = ({ to, children, variant = "read" }) => {
  if (variant === "back") {
    return (
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-blue-400/30 bg-blue-500/10 text-sm font-semibold text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/60 hover:text-white transition-all duration-300"
    >
      <span>{children}</span>

      <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
};

export default BlogLink;
