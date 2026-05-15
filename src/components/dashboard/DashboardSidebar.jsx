import React from 'react'

import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  PlusSquare,
  PencilLine,
} from 'lucide-react'

const DashboardSidebar = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <LayoutDashboard size={17} />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderKanban size={17} />,
    },
    {
      id: "blogs",
      label: "Blogs",
      icon: <FileText size={17} />,
    },
    {
      id: "create-project",
      label: "Create Project",
      icon: <PlusSquare size={17} />,
    },
    {
      id: "create-blog",
      label: "Create Blog",
      icon: <PencilLine size={17} />,
    },
  ]

  return (
    <aside
      className="sticky top-24 h-fit rounded-2xl border p-3"
      style={{
        background: "rgba(15,23,42,0.45)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="space-y-1.5">
        
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-(--accent) text-black"
                : "text-(--text-secondary) hover:bg-white/5 hover:text-(--text-primary)"
            }`}
          >
            {tab.icon}

            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default DashboardSidebar