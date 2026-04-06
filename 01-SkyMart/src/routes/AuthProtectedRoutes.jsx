import { useMyContext } from "../context/AppContext";
import { Navigate, Outlet } from "react-router";

const AuthProtectedRoutes = () => {
  const { loggedUser } = useMyContext();

  if (loggedUser) {
    return <Navigate to={"/home"} replace />;
  }

  return <Outlet />;
};

export default AuthProtectedRoutes;
