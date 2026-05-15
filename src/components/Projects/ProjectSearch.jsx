import React from 'react'
import { Search } from 'lucide-react'

const ProjectSearch = ({ search, setSearch }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10">
      
      <div
        className="flex items-center gap-3 rounded-2xl border p-2 backdrop-blur-md"
        style={{
          background: "rgba(15,23,42,0.55)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="flex flex-1 items-center gap-3 px-4">
          
          <Search
            size={18}
            className="text-(--text-secondary)"
          />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent py-2 font-mono text-sm text-(--text-primary) outline-none placeholder:text-(--text-secondary)"
          />
        </div>

        <button className="rounded-xl bg-(--accent) px-6 py-2 text-sm font-semibold text-[#060816] transition-all hover:bg-(--accent-hover)">
          Filter
        </button>
      </div>
    </section>
  )
}

export default ProjectSearch