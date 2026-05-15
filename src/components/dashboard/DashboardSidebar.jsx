// components/dashboard/DashboardSidebar.jsx

import React from 'react'

import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  PlusSquare,
  Settings,
} from 'lucide-react'

const DashboardSidebar = () => {
  const navItems = [
    {
      icon: <LayoutDashboard size={18} />,
      label: "Dashboard",
      active: true,
    },
    {
      icon: <FolderKanban size={18} />,
      label: "Projects",
    },
    {
      icon: <FileText size={18} />,
      label: "Blogs",
    },
    {
      icon: <PlusSquare size={18} />,
      label: "Create",
    },
    {
      icon: <Settings size={18} />,
      label: "Settings",
    },
  ]

  return (
    <aside
      className="flex min-h-screen w-[250px] flex-col justify-between border-r px-5 py-6"
      style={{
        background: "#06111f",
        borderColor: "var(--border-color)",
      }}
    >
      {/* TOP */}
      <div>
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--accent) text-xl font-bold text-black">
            D
          </div>

          <div>
            <h1 className="text-3xl font-bold text-(--accent)">
              DevHub
            </h1>

            <p className="text-xs text-(--text-secondary)">
              v0.4.2-alpha
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="mt-14 space-y-2">
          
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-all ${
                item.active
                  ? "bg-(--accent) text-black"
                  : "text-(--text-secondary) hover:bg-white/5 hover:text-(--text-primary)"
              }`}
            >
              {item.icon}

              <span className="font-medium">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <button className="rounded-2xl bg-(--accent) px-5 py-4 font-semibold text-black">
        + Create Project
      </button>
    </aside>
  )
}

export default DashboardSidebar