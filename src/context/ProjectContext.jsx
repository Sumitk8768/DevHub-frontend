import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const Project = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(false);

  // Fetch Projects
  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await api.get("/projects");

      setProjects(response.data.projects);

    } catch (error) {
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Project.Provider
      value={{
        projects,
        setProjects,
        fetchProjects,
        loading,
      }}
    >
      {children}
    </Project.Provider>
  );
};
