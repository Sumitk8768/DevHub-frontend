import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProjectProvider } from './context/ProjectContext.jsx'
import { BlogProvider } from './context/BlogContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
  <ProjectProvider>
    <BlogProvider>
      <AppRoutes />
    </BlogProvider>
  </ProjectProvider>
</AuthProvider>
)
