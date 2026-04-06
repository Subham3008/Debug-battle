import { useMyContext } from "../context/AppContext";
import { Navigate, Outlet } from "react-router";

const DashboardProtectedRoutes = () => {
  const { loggedUser, loading } = useMyContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!loggedUser) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default DashboardProtectedRoutes;
