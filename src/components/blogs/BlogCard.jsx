import React from 'react'
import { ExternalLink } from 'lucide-react'
import { Auth } from '../../context/AuthContext'
import { Link } from 'react-router'

const BlogCard = ({ blog }) => {
  return (
    <div
      className="group flex h-full flex-col rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5"
      style={{
        background: "rgba(15, 23, 42, 0.65)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* TOP */}
      <div className="flex items-center justify-between">
        
        <span
          className="rounded-md border px-2 py-1 text-[10px] font-mono"
          style={{
            background: "rgba(60,242,227,0.08)",
            borderColor: "rgba(60,242,227,0.08)",
            color: "var(--accent)",
          }}
        >
          BLOG
        </span>

        <span className="font-mono text-xs text-(--text-secondary)">
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-(--text-primary)">
        {blog.title}
      </h3>

      {/* CONTENT */}
      <p className="mt-3 line-clamp-4 text-sm leading-7 text-(--text-secondary)">
        {blog.content}
      </p>

      {/* TAGS */}
      <div className="mt-5 flex flex-wrap gap-2">
        {blog.tags?.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="rounded-md border px-2 py-1 text-[10px] font-mono"
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

      {/* USER */}
      <div className="mt-6 flex items-center gap-3">
        
        <div className="h-7 w-7 overflow-hidden rounded-full border border-(--border-color)">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.user?.name}`}
            alt="avatar"
            className="h-full w-full object-cover"
          />
        </div>

        <span className="font-mono text-sm text-(--text-secondary)">
          Written by{" "}
          <span className="text-(--text-primary)">
            @{blog.user?.name || "developer"}
          </span>
        </span>
      </div>

      {/* FOOTER */}
      <div
        className="mt-auto flex items-center gap-5 border-t pt-5"
        style={{
          borderColor: "var(--border-color)",
        }}
      >
        <button className="flex items-center gap-2 font-mono text-xs font-semibold text-[#d8b4fe] cursor-pointer transition hover:opacity-80"
        onClick={() => <Link to={`/blogs/${blog._id}`}></Link>}
        >
          
          <ExternalLink size={14} />
          Read Article
        </button>
      </div>
    </div>
  )
}

export default BlogCard