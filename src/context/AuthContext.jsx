import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Auth.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </Auth.Provider>
  );
};