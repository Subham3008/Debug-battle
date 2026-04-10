import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardProtectedRoutes from "./DashboardProtectedRoutes";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import AuthProtectedRoutes from "./AuthProtectedRoutes";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          element: <DashboardProtectedRoutes />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "dashboard/create",
              element: <Create />,
            },
            {
              path: "dashboard/edit",
              element: <Edit />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <AuthProtectedRoutes />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <LoginForm />,
            },
          ],
        },
      ],
    },
    {
      path: "/register",
      element: <AuthProtectedRoutes />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <RegisterForm />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
