import React from 'react'
import { Boxes, Code2, ExternalLink } from 'lucide-react'

const ProjectCard = ({ project }) => {
  return (
    <div
      className="group flex h-full flex-col rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5"
      style={{
        background: "rgba(15, 23, 42, 0.65)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* TOP */}
      <div className="flex items-start justify-between">
        
        {/* ICON */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border-color) bg-[#13202f] text-(--accent)">
          <Boxes size={18} />
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap justify-end gap-2">
          {project.techStack?.slice(0, 2).map((tech, index) => (
            <span
              key={index}
              className="rounded-md border px-2 py-1 text-[10px] font-mono"
              style={{
                background: "rgba(60,242,227,0.08)",
                borderColor: "rgba(60,242,227,0.08)",
                color: "var(--accent)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* TITLE */}
      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-(--text-primary)">
        {project.title}
      </h3>

      {/* DESC */}
      <p className="mt-3 line-clamp-3 text-sm leading-7 text-(--text-secondary)">
        {project.description}
      </p>

      {/* USER */}
      <div className="mt-6 flex items-center gap-3 mb-2">
        
        <div className="h-7 w-7 overflow-hidden rounded-full border border-(--border-color)">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${project.user?.name}`}
            alt="avatar"
            className="h-full w-full object-cover"
          />
        </div>

        <span className="font-mono text-sm text-(--text-secondary)">
          Created by{" "}
          <span className="text-(--text-primary)">
            @{project.user?.name || "developer"}
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
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs font-semibold text-(--accent) transition hover:opacity-80"
          >
            <Code2 size={14} />
            GitHub
          </a>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs font-semibold text-[#d8b4fe] transition hover:opacity-80"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard