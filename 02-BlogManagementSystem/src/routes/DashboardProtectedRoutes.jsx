import { Navigate, Outlet } from "react-router";
import { MyContext } from "../context/BlogContext";

const DashboardProtectedRoutes = () => {
  const { loggedUser } = MyContext();
  if (!loggedUser) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardProtectedRoutes;
