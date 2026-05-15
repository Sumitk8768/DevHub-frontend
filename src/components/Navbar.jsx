import React, { useContext } from "react";
import { useNavigate } from "react-router";

import { Auth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    isAuthenticated,
    setIsAuthenticated,
    loggedInUser,
    setLoggedInUser,
  } = useContext(Auth);

  // Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoggedInUser(null);

    navigate("/login");
  };

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "rgba(6, 8, 22, 0.9)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-12">
          
          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--accent) text-sm font-bold text-black">
              D
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-(--accent)">
              DevHub
            </h1>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden items-center gap-8 md:flex">
            
            <button
              onClick={() => navigate("/projects")}
              className="text-sm font-medium text-(--text-secondary) transition hover:text-(--text-primary)"
            >
              Projects
            </button>

            <button
              onClick={() => navigate("/blogs")}
              className="text-sm font-medium text-(--text-secondary) transition hover:text-(--text-primary)"
            >
              Blogs
            </button>

            {isAuthenticated && (
              <button
                onClick={() => navigate("/dashboard")}
                className="text-sm font-medium text-(--text-secondary) transition hover:text-(--text-primary)"
              >
                Dashboard
              </button>
            )}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          
          {isAuthenticated ? (
            <>
              {/* PROFILE */}
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-3"
              >
                <div className="h-10 w-10 overflow-hidden rounded-full border border-(--accent)">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${loggedInUser?.name}`}
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                <span className="hidden font-mono text-sm text-(--text-primary) md:block">
                  {loggedInUser?.name}
                </span>
              </button>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="rounded-xl border border-(--border-color) px-5 py-2 text-sm font-semibold text-(--text-primary) transition hover:border-(--accent)"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* SIGN IN */}
              <button
                onClick={() => navigate("/login")}
                className="rounded-xl border border-(--border-color) px-5 py-2 text-sm font-semibold text-(--text-primary) transition hover:border-(--accent)"
              >
                Sign In
              </button>

              {/* SIGN UP */}
              <button
                onClick={() => navigate("/register")}
                className="rounded-xl bg-(--accent) px-5 py-2 text-sm font-semibold text-black transition hover:bg-(--accent-hover)"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;