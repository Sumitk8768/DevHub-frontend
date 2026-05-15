// components/dashboard/DashboardOverview.jsx

import React, { useContext } from 'react'

import { Auth } from '../../context/AuthContext'
import { Project } from '../../context/ProjectContext'
import { Blog } from '../../context/BlogContext'

import ProjectCard from '../projects/ProjectCard'
import BlogCard from '../blogs/BlogCard'

const DashboardOverview = () => {
  const { loggedInUser } = useContext(Auth)

  const { projects } = useContext(Project)
  const { blogs } = useContext(Blog)

  return (
    <div>
      {/* HERO */}
      <div className="max-w-3xl">
        
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-(--accent)">
          Developer Workspace
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-[1.05] text-(--text-primary)">
          Welcome back,
          <br />
          {loggedInUser?.name}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-(--text-secondary)">
          Manage projects, publish blogs, and showcase your developer portfolio.
        </p>

        {/* STATS */}
        <div className="mt-8 flex gap-4">
          
          <div
            className="rounded-2xl border px-5 py-4"
            style={{
              background: "rgba(15,23,42,0.55)",
              borderColor: "var(--border-color)",
            }}
          >
            <p className="text-sm text-(--text-secondary)">
              Projects
            </p>

            <h2 className="mt-2 text-3xl font-bold text-(--text-primary)">
              {projects.length}
            </h2>
          </div>

          <div
            className="rounded-2xl border px-5 py-4"
            style={{
              background: "rgba(15,23,42,0.55)",
              borderColor: "var(--border-color)",
            }}
          >
            <p className="text-sm text-(--text-secondary)">
              Blogs
            </p>

            <h2 className="mt-2 text-3xl font-bold text-(--text-primary)">
              {blogs.length}
            </h2>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section className="mt-16">
        
        <div className="flex items-center justify-between">
          
          <h2 className="text-3xl font-bold text-(--text-primary)">
            Recent Projects
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* BLOGS */}
      <section className="mt-16">
        
        <div className="flex items-center justify-between">
          
          <h2 className="text-3xl font-bold text-(--text-primary)">
            Recent Blogs
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default DashboardOverview