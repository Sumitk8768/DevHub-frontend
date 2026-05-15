import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const Blog = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(false);

  // Fetch Blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const response = await api.get("/blogs");

      setBlogs(response.data.blogs);
    } catch (error) {
      console.log("Error fetching blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Blog.Provider
      value={{
        blogs,
        setBlogs,
        fetchBlogs,
        loading,
      }}
    >
      {children}
    </Blog.Provider>
  );
};