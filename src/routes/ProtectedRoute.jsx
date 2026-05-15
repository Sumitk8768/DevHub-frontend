import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'

import { Auth } from '../context/AuthContext'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(Auth)

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}

export default ProtectedRoute