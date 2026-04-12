import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardProtectedRoutes from "./DashboardProtectedRoutes";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import Dashboard from "../pages/Dashboard";
import AuthProtectedRoutes from "./AuthProtectedRoutes";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import BlogDetails from "@/pages/BlogDetails";
import Create from "@/pages/Create";

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
          path: "blog/:id",
          element: <BlogDetails />,
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
