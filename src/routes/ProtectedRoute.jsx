import React, {
  useContext,
} from "react";

import {
  Navigate,
} from "react-router";

import { Auth } from "../context/AuthContext";

const ProtectedRoute = ({
  children,
}) => {

  const {
    isAuthenticated,
    loading,
  } = useContext(Auth);

  // WAIT FOR AUTH CHECK
  if (loading) {
    return null;
  }

  // NOT LOGGED IN
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // LOGGED IN
  return children;
};

export default ProtectedRoute;