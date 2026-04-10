import { Navigate, Outlet } from "react-router";
import { MyContext } from "../context/BlogContext";

const AuthProtectedRoutes = () => {
  const { loggedUser } = MyContext();

  if (loggedUser) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default AuthProtectedRoutes;
