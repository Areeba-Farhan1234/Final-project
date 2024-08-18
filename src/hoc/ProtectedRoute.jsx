import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ element: Component, role = "", ...rest }) => {
  const { isAuthenticated, user } = useAuth();
  console.log("🚀 ~ ProtectedRoute ~ user:", user);
  console.log("🚀 ~ ProtectedRoute ~ isAuthenticated:", isAuthenticated);

  if (isAuthenticated && user?.role === role) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/login-employer" />;
  }
};

export default ProtectedRoute;
