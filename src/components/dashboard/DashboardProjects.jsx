// components/dashboard/DashboardProjects.jsx

import React, { useContext } from "react"

import { Pencil, Trash2 } from "lucide-react"

import { toast } from "react-toastify"

import { Project } from "../../context/ProjectContext"

import ProjectCard from "../Projects/ProjectCard"

const DashboardProjects = ({
  setActiveTab,
  setEditingProject,
}) => {
  const {
    projects,
    setProjects,
  } = useContext(Project)

  // DELETE
  const handleDelete = (id) => {
    const filtered = projects.filter(
      (project) => project._id !== id
    )

    setProjects(filtered)

    toast.error("Project deleted")
  }

  // EDIT
  const handleEdit = (project) => {
    setEditingProject(project)

    setActiveTab("create-project")
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        
        <div>
          <h1 className="text-4xl font-bold text-(--text-primary)">
            My Projects
          </h1>

          <p className="mt-2 text-(--text-secondary)">
            Manage your developer projects.
          </p>
        </div>

        <button
          onClick={() => setActiveTab("create-project")}
          className="rounded-2xl bg-(--accent) px-5 py-3 font-semibold text-black"
        >
          + Create Project
        </button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex h-full flex-col"
          >
            <div className="flex-1">
              <ProjectCard project={project} />
            </div>

            <div className="mt-4 flex gap-3">
              
              <button
                onClick={() => handleEdit(project)}
                className="flex items-center gap-2 rounded-xl border border-(--border-color) px-4 py-2 text-sm text-(--text-primary)"
              >
                <Pencil size={15} />
                Edit
              </button>

              <button
                onClick={() => handleDelete(project._id)}
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

export default DashboardProjects
