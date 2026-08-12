import { Link } from "react-router-dom";
import BlogCategory from "./BlogCategory";
import BlogLink from "./BlogLink";

const BlogCard = ({ blog }) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <BlogCategory category={blog.category} />

        {/* Title */}
        <h3 className="text-lg font-semibold mt-3 mb-3">{blog.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-6 mb-6">
          {blog.description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{blog.date}</span>

          <BlogLink to={`/blog/${blog.slug}`}>Read Article</BlogLink>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
