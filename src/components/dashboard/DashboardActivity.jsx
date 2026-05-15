
// components/dashboard/DashboardActivity.jsx

import React from 'react'

const DashboardActivity = () => {
  const activities = [
    "Your blog reached 1.2k views",
    "New project starred by developers",
    "Profile completion updated",
    "Backend article trending today",
  ]

  return (
    <aside
      className="hidden w-[320px] border-l p-6 xl:block"
      style={{
        background: "#08111d",
        borderColor: "var(--border-color)",
      }}
    >
      <h2 className="text-3xl font-bold text-(--text-primary)">
        Activity Feed
      </h2>

      <div className="mt-10 space-y-5">
        
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-2xl border p-5"
            style={{
              background: "rgba(15,23,42,0.55)",
              borderColor: "var(--border-color)",
            }}
          >
            <p className="leading-7 text-(--text-secondary)">
              {activity}
            </p>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default DashboardActivity