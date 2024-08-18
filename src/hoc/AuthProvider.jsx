import React, { createContext, useState, useContext } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ role: "employer" });
  console.log("🚀 ~ AuthProvider ~ user:", user);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);