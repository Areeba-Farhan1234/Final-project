import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ element: Component, role = "", ...rest }) => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user?.role === role) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
