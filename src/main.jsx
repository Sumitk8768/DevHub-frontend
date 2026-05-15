import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthContext";
import { ProjectProvider } from "./context/ProjectContext";
import { BlogProvider } from "./context/BlogContext";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <BlogProvider>
          <AppRoutes />

          <ToastContainer theme="dark" autoClose={2000} />
        </BlogProvider>
      </ProjectProvider>
    </AuthProvider>
  </React.StrictMode>,
);
