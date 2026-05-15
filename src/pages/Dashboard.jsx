// pages/Dashboard.jsx

import React from 'react'

import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardMain from '../components/dashboard/DashboardMain'
import DashboardActivity from '../components/dashboard/DashboardActivity'

const Dashboard = () => {
  return (
    <main className="flex min-h-screen bg-[#020617]">
      
      {/* SIDEBAR */}
      <DashboardSidebar />

      {/* CENTER */}
      <DashboardMain />

      {/* RIGHT PANEL */}
      <DashboardActivity />
    </main>
  )
}

export default Dashboard