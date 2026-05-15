import React, { useContext, useState } from 'react'
import { Project } from '../context/ProjectContext'

import ProjectHero from '../components/Projects/ProjectHero'
import ProjectSearch from '../components/Projects/ProjectSearch'
import ProjectCard from '../components/Projects/ProjectCard'

const Projects = () => {
  const { projects, loading } = useContext(Project)

  const [search, setSearch] = useState("")

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl text-(--text-primary)">
        Loading Projects...
      </div>
    )
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <ProjectHero />

      {/* SEARCH */}
      <ProjectSearch
        search={search}
        setSearch={setSearch}
      />

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        
        {filteredProjects.length === 0 ? (
          <div className="text-center text-(--text-secondary)">
            No projects found.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Projects