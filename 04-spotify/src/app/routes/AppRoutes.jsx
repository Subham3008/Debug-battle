import { RouterProvider, createBrowserRouter } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import DashboardLayout from "../layouts/DashboardLayout";
import HomePage from "../../features/dashboard/ui/pages/HomePage";
import SongDetails from "../../features/dashboard/ui/pages/SongDetails";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "details/:id",
          element: <SongDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
