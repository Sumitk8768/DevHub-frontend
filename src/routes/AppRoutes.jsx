import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogDetails from "../pages/BlogDetails";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "blogs/:id",
          element: <BlogDetails />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />, // Layout for authentication pages (if you have one)
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
  element: <ProtectedRoute />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
},
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRoutes;
