import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1 className="text-4xl font-bold text-center"> Loading...</h1>;
  } else if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
