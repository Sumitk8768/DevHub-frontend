import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const AuthProtected = () => {
    let {loggedInUser} = useContext(Auth)

    if(loggedInUser) {
        return <Navigate to ='/home' />
    }
  return <Outlet />
}

export default AuthProtected
