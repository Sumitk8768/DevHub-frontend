import React, { useContext } from 'react'

import { Project } from '../../context/ProjectContext'
import ProjectCard from '../projects/ProjectCard'

const DashboardProjects = () => {
  const { projects } = useContext(Project)

  return (
    <div>
      <h1 className="text-4xl font-bold text-(--text-primary)">
        My Projects
      </h1>

      <p className="mt-3 text-(--text-secondary)">
        Manage and showcase your projects.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardProjects