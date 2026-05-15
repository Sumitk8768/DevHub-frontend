import React, { useContext } from 'react'

import { Blog } from '../../context/BlogContext'
import BlogCard from '../blogs/BlogCard'

const DashboardBlogs = () => {
  const { blogs } = useContext(Blog)

  return (
    <div>
      <h1 className="text-4xl font-bold text-(--text-primary)">
        My Blogs
      </h1>

      <p className="mt-3 text-(--text-secondary)">
        Publish and manage technical articles.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardBlogs