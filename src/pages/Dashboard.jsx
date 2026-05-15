import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardOverview from '../components/dashboard/DashboardOverview'
import DashboardProjects from '../components/dashboard/DashboardProjects'
import DashboardBlogs from '../components/dashboard/DashboardBlogs'
import CreateProjectForm from '../components/dashboard/CreateProjectForm'
import CreateBlogForm from '../components/dashboard/CreateBlogForm'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")

  // EDIT STATES
  const [editingProject, setEditingProject] = useState(null)
  const [editingBlog, setEditingBlog] = useState(null)

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <DashboardProjects
            setActiveTab={setActiveTab}
            setEditingProject={setEditingProject}
          />
        )

      case "blogs":
        return (
          <DashboardBlogs
            setActiveTab={setActiveTab}
            setEditingBlog={setEditingBlog}
          />
        )

      case "create-project":
        return (
          <CreateProjectForm
            editingProject={editingProject}
            setEditingProject={setEditingProject}
          />
        )

      case "create-blog":
        return (
          <CreateBlogForm
            editingBlog={editingBlog}
            setEditingBlog={setEditingBlog}
          />
        )

      default:
        return <DashboardOverview />
    }
  }

  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-10">
        
        <div className="grid grid-cols-[180px_1fr] gap-10">
          
          <DashboardSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <section className="min-w-0">
            {renderContent()}
          </section>
        </div>
      </main>

    </>
  )
}

export default Dashboard