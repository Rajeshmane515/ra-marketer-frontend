import { useParams } from "react-router-dom";
import { marked } from "marked";
import { getBlogBySlug } from "../blogs/blogLoader";

import BlogCategory from "../components/blog/BlogCategory";
import BlogLink from "../components/blog/BlogLink";

const BlogPost = () => {
  const { slug } = useParams();

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>

          <p className="text-gray-400 mb-6">
            The article you're looking for doesn't exist.
          </p>

          <BlogLink to="/blog" variant="back">
            Back to Blog
          </BlogLink>
        </div>
      </main>
    );
  }

  const htmlContent = marked.parse(blog.content);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-10">
        {/* Back */}
        <div className="mb-10">
          <BlogLink to="/blog" variant="back">
            Back to Blog
          </BlogLink>
        </div>

        {/* Category */}
        <BlogCategory category={blog.category} />

        {/* Title */}
        <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {blog.title}
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 leading-8 max-w-3xl">
          {blog.description}
        </p>

        {/* Author / Date */}
        <div className="mt-7 flex items-center gap-3 text-sm text-gray-500">
          <span className="text-gray-300">{blog.author}</span>

          <span>•</span>

          <span>{blog.date}</span>
        </div>
      </section>

      {/* Featured Image */}
      {blog.image && (
        <section className="max-w-4xl mx-auto px-6 mb-14">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-[420px] object-cover rounded-xl"
            />
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div
          className="
            prose prose-invert prose-lg max-w-none

            prose-headings:text-white
            prose-headings:font-bold

            prose-h2:text-3xl
            prose-h2:mt-12
            prose-h2:mb-5

            prose-h3:text-2xl
            prose-h3:mt-10
            prose-h3:mb-4

            prose-p:text-gray-300
            prose-p:leading-8
            prose-p:mb-6

            prose-strong:text-white

            prose-a:text-blue-400
            prose-a:no-underline
            hover:prose-a:underline

            prose-li:text-gray-300
            prose-li:my-2

            prose-ul:my-6
            prose-ol:my-6

            prose-blockquote:border-blue-500
            prose-blockquote:text-gray-400
          "
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
      </article>
    </main>
  );
};

export default BlogPost;
