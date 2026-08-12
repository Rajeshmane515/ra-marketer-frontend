import { useMemo, useState } from "react";
import { blogs } from "../blogs/blogLoader";
import BlogCard from "../components/blog/BlogCard";
import BlogCategory from "../components/blog/BlogCategory";
import BlogLink from "../components/blog/BlogLink";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Create categories automatically
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") {
      return blogs;
    }

    return blogs.filter((blog) => blog.category === selectedCategory);
  }, [selectedCategory]);

  // Featured and latest blogs
  const featuredBlog = filteredBlogs[0];
  const latestBlogs = filteredBlogs.slice(1);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Blog Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-blue-400 font-medium mb-3">RA MARKETER BLOG</p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Insights for Modern B2B Marketing
          </h1>

          <p className="text-gray-400 text-lg leading-7">
            Practical strategies, insights and ideas to help businesses generate
            leads, build demand and grow their pipeline.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredBlog && (
          <section className="mb-16">
            <p className="text-sm text-blue-400 font-medium mb-5">
              FEATURED ARTICLE
            </p>

            <article className="grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              {/* Image */}
              <div className="h-72 lg:h-full lg:min-h-[360px]">
                {featuredBlog.image && (
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                {/* Category */}
                <BlogCategory category={featuredBlog.category} />

                {/* Title */}
                <h2 className="text-3xl font-bold mb-4 mt-4">
                  {featuredBlog.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 leading-7 mb-7">
                  {featuredBlog.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {featuredBlog.date}
                  </span>

                  <BlogLink to={`/blog/${featuredBlog.slug}`}>
                    Read Article
                  </BlogLink>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* Latest Articles */}
        {latestBlogs.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-7">Latest Articles</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-400">No articles found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
