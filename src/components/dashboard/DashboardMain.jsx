// components/dashboard/DashboardMain.jsx

import React, { useContext } from 'react'

import { Auth } from '../../context/AuthContext'
import { Project } from '../../context/ProjectContext'
import { Blog } from '../../context/BlogContext'

import ProjectCard from '../projects/ProjectCard'
import BlogCard from '../blogs/BlogCard'

const DashboardMain = () => {
  const { loggedInUser } = useContext(Auth)

  const { projects } = useContext(Project)
  const { blogs } = useContext(Blog)

  return (
    <section className="flex-1 overflow-y-auto px-10 py-10">
      
      {/* HERO */}
      <div>
        
        <h1 className="text-6xl font-bold leading-tight text-(--text-primary)">
          Welcome back,
          <br />
          {loggedInUser?.name}
        </h1>

        <p className="mt-5 text-xl text-(--text-secondary)">
          Manage your projects and publish developer content.
        </p>
      </div>

      {/* STATS */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        
        <div
          className="rounded-3xl border p-6"
          style={{
            background: "rgba(15,23,42,0.6)",
            borderColor: "var(--border-color)",
          }}
        >
          <p className="text-sm text-(--text-secondary)">
            Total Projects
          </p>

          <h1 className="mt-3 text-5xl font-bold text-(--text-primary)">
            {projects.length}
          </h1>
        </div>

        <div
          className="rounded-3xl border p-6"
          style={{
            background: "rgba(15,23,42,0.6)",
            borderColor: "var(--border-color)",
          }}
        >
          <p className="text-sm text-(--text-secondary)">
            Total Blogs
          </p>

          <h1 className="mt-3 text-5xl font-bold text-(--text-primary)">
            {blogs.length}
          </h1>
        </div>

        <div
          className="rounded-3xl border p-6"
          style={{
            background: "rgba(15,23,42,0.6)",
            borderColor: "var(--border-color)",
          }}
        >
          <p className="text-sm text-(--text-secondary)">
            Profile Completion
          </p>

          <h1 className="mt-3 text-5xl font-bold text-(--text-primary)">
            85%
          </h1>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-16">
        
        <div className="flex items-center justify-between">
          
          <div>
            <h2 className="text-4xl font-bold text-(--text-primary)">
              My Projects
            </h2>

            <p className="mt-2 text-(--text-secondary)">
              Manage your active repositories.
            </p>
          </div>

          <button className="rounded-2xl border border-(--accent) px-5 py-3 font-semibold text-(--accent)">
            + Create Project
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      </div>

      {/* BLOGS */}
      <div className="mt-16">
        
        <div>
          <h2 className="text-4xl font-bold text-(--text-primary)">
            Recent Blogs
          </h2>

          <p className="mt-2 text-(--text-secondary)">
            Continue writing where you left off.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          
          {blogs.slice(0, 2).map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DashboardMain