// components/dashboard/DashboardBlogs.jsx

import React, { useContext } from 'react'

import { Pencil, Trash2 } from 'lucide-react'

import { toast } from 'react-toastify'

import { Blog } from '../../context/BlogContext'

import BlogCard from '../blogs/BlogCard'

const DashboardBlogs = ({
  setActiveTab,
  setEditingBlog,
}) => {
  const {
    blogs,
    setBlogs,
  } = useContext(Blog)

  // DELETE
  const handleDelete = (id) => {
    const filtered = blogs.filter(
      (blog) => blog._id !== id
    )

    setBlogs(filtered)

    toast.error("Blog deleted")
  }

  // EDIT
  const handleEdit = (blog) => {
    setEditingBlog(blog)

    setActiveTab("create-blog")
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        
        <div>
          <h1 className="text-4xl font-bold text-(--text-primary)">
            My Blogs
          </h1>

          <p className="mt-2 text-(--text-secondary)">
            Manage your technical articles.
          </p>
        </div>

        <button
          onClick={() => setActiveTab("create-blog")}
          className="rounded-2xl bg-(--accent) px-5 py-3 font-semibold text-black"
        >
          + Create Blog
        </button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex h-full flex-col"
          >
            <div className="flex-1">
              <BlogCard blog={blog} />
            </div>

            <div className="mt-4 flex gap-3">
              
              <button
                onClick={() => handleEdit(blog)}
                className="flex items-center gap-2 rounded-xl border border-(--border-color) px-4 py-2 text-sm text-(--text-primary)"
              >
                <Pencil size={15} />
                Edit
              </button>

              <button
                onClick={() => handleDelete(blog._id)}
                className="flex items-center gap-2 rounded-xl border border-red-500/30 px-4 py-2 text-sm text-red-400"
              >
                <Trash2 size={15} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardBlogs