const BlogCategory = ({ category }) => {
  return (
    <span className="self-start w-fit px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300 text-xs font-medium">
      {category}
    </span>
  );
};

export default BlogCategory;
