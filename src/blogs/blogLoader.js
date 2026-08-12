import frontMatter from "front-matter";

const blogFiles = import.meta.glob("./*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const blogImages = import.meta.glob("../assets/blog-images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const getImageUrl = (imageName) => {
  if (!imageName) return null;

  const imagePath = `../assets/blog-images/${imageName}`;

  return blogImages[imagePath] || null;
};

export const blogs = Object.entries(blogFiles).map(([path, content]) => {
  const parsed = frontMatter(content);

  return {
    ...parsed.attributes,
    image: getImageUrl(parsed.attributes.image),
    content: parsed.body,
  };
});

export const getBlogBySlug = (slug) => {
  return blogs.find((blog) => blog.slug === slug);
};