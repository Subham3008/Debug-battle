import { Navigate } from "react-router";
import { getAuthUser } from "../utils/authStorage";

const ProtectedRoute = ({ children }) => {
  const user = getAuthUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

