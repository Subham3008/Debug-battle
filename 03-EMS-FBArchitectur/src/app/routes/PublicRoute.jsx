import { Navigate, Outlet } from "react-router";
import { useContextAuth } from "../../shared/hooks/useContextAuth";

function PublicRoute() {
  const { loggedInAdmin } = useContextAuth();
  console.log("Public", loggedInAdmin);

  if (loggedInAdmin) {
    return <Navigate to={"/dashboard"} />;
  }

  return <Outlet />;
}

export default PublicRoute;
