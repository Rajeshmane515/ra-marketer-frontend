import YAML from "yaml";

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

const parseFrontMatter = (content) => {
  // Normalize Windows/Linux line endings
  const normalizedContent = content.replace(/\r\n/g, "\n");

  // Find front-matter block
  const match = normalizedContent.match(
    /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/
  );

  if (!match) {
    return {
      attributes: {},
      body: normalizedContent,
    };
  }

  const frontMatterText = match[1];
  const body = match[2];

  try {
    const attributes = YAML.parse(frontMatterText) || {};

    return {
      attributes,
      body,
    };
  } catch (error) {
    console.error("Error parsing blog front matter:");
    console.error(error);
    console.error("Front matter:");
    console.error(frontMatterText);

    return {
      attributes: {},
      body: body,
    };
  }
};

export const blogs = Object.entries(blogFiles).map(
  ([path, content]) => {
    const parsed = parseFrontMatter(content);

    return {
      ...parsed.attributes,
      image: getImageUrl(parsed.attributes.image),
      content: parsed.body,
    };
  }
);

export const getBlogBySlug = (slug) => {
  return blogs.find((blog) => blog.slug === slug);
};