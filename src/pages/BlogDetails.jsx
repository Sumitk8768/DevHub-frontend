import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../services/api'

const BlogDetails = () => {
  const { id } = useParams()

  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch Single Blog
  const fetchBlog = async () => {
    try {
      const response = await api.get(`/blogs/${id}`)

      setBlog(response.data.blog)
    } catch (error) {
      setBlog(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [id])

  // Loading State
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl text-(--text-primary)">
        Loading Blog...
      </div>
    )
  }

  // No Blog Found
  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl text-(--text-primary)">
        Blog not found
      </div>
    )
  }

  return (
    <main className="min-h-screen px-6 py-16">
      
      <section className="mx-auto max-w-4xl">
        
        {/* TAG + DATE */}
        <div className="flex items-center justify-between">
          
          <span
            className="rounded-md border px-3 py-1 text-xs font-mono"
            style={{
              background: "rgba(216,180,254,0.08)",
              borderColor: "rgba(216,180,254,0.08)",
              color: "#d8b4fe",
            }}
          >
            BLOG ARTICLE
          </span>

          <span className="font-mono text-sm text-(--text-secondary)">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-(--text-primary)">
          {blog.title}
        </h1>

        {/* AUTHOR */}
        <div className="mt-8 flex items-center gap-4">
          
          <div className="h-12 w-12 overflow-hidden rounded-full border border-(--border-color)">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.user?.name}`}
              alt="avatar"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold text-(--text-primary)">
              {blog.user?.name || "Developer"}
            </h3>

            <p className="font-mono text-sm text-(--text-secondary)">
              Software Engineer
            </p>
          </div>
        </div>

        {/* TAGS */}
        <div className="mt-8 flex flex-wrap gap-3">
          {blog.tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-md border px-3 py-1 text-xs font-mono"
              style={{
                background: "rgba(216,180,254,0.08)",
                borderColor: "rgba(216,180,254,0.08)",
                color: "#d8b4fe",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CONTENT */}
        <div
          className="mt-12 space-y-6 text-lg leading-9 text-(--text-secondary)"
        >
          <p>
            {blog.content}
          </p>
        </div>
      </section>
    </main>
  )
}

export default BlogDetails
