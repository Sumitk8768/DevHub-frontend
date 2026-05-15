import { useContext } from "react";
import { Blog } from "../context/BlogContext";
import BlogCard from "../components/blogs/BlogCard";
const EngineeringInsights = () => {

  const { blogs, loading } = useContext(Blog);

    console.log(blogs)
    if (loading) {
  return <h1>Loading...</h1>;
}


  return (
         <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Engineering Insights</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard blog = {blog}/>
          ))}
        </div>
      </section>
  )
}

export default EngineeringInsights;
