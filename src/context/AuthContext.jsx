import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

export const Auth = createContext();

const AUTH_USER_KEY = "devhub-user";
const LEGACY_USER_KEY = "log user";

export const AuthProvider = ({
  children,
}) => {

  const [loggedInUser, setLoggedInUser] =
    useState(null);

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const login = useCallback((user) => {
    setLoggedInUser(user);

    setIsAuthenticated(true);

    localStorage.setItem(
      AUTH_USER_KEY,
      JSON.stringify(user)
    );
  }, []);

  const logout = useCallback(() => {
    setLoggedInUser(null);

    setIsAuthenticated(false);

    localStorage.removeItem(AUTH_USER_KEY);
    localStorage.removeItem(LEGACY_USER_KEY);

    document.cookie =
      "token=; Max-Age=0; path=/; SameSite=Lax";
  }, []);

  useEffect(() => {

    const storedUser =
      localStorage.getItem(AUTH_USER_KEY) ||
      localStorage.getItem(LEGACY_USER_KEY);

    if (storedUser) {
      try {

        const parsedUser =
          JSON.parse(storedUser);

        setLoggedInUser(parsedUser);

        setIsAuthenticated(true);

        localStorage.setItem(
          AUTH_USER_KEY,
          JSON.stringify(parsedUser)
        );

        localStorage.removeItem(LEGACY_USER_KEY);
      } catch {
        localStorage.removeItem(AUTH_USER_KEY);
        localStorage.removeItem(LEGACY_USER_KEY);
      }
    }

    setLoading(false);

  }, [logout]);

  useEffect(() => {
    window.addEventListener("devhub:logout", logout);

    return () => {
      window.removeEventListener("devhub:logout", logout);
    };
  }, []);

  return (
    <Auth.Provider
      value={{
        loggedInUser,
        setLoggedInUser,

        isAuthenticated,
        setIsAuthenticated,

        loading,
        login,
        logout,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
