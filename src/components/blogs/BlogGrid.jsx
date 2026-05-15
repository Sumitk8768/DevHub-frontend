import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      
      {blogs.length === 0 ? (
        <div className="text-center text-(--text-secondary)">
          No blogs found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogGrid;