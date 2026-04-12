import { Navigate, Outlet } from "react-router";
import { MyContext } from "../context/BlogContext";

const DashboardProtectedRoutes = () => {
  const { loggedUser } = MyContext();

  //if not logged in
  if (!loggedUser) {
    return <Navigate to={"/login"} replace />;
  }

  //if not Author
  if (loggedUser.role !== "author") {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardProtectedRoutes;
