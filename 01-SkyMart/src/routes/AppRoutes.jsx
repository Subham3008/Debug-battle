import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import AuthProtctedRoutes from "./AuthProtectedRoutes";
import DashboardProtectedRoutes from "./DashboardProtectedRoutes";
import AuthProtectedRoutes from "./AuthProtectedRoutes";
import { getAllProducts } from "../api/ProductsApi";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/login"} replace />,
    },
    {
      path: "/",
      element: <DashboardProtectedRoutes />,
      children: [
        {
          id: "root",
          element: <MainLayout />,
          loader: async () => {
            return await getAllProducts();
          },
          hydrateFallbackElement: (
            <h1 className="text-2xl font-bold">Loading products...</h1>
          ),
          children: [
            {
              index: true,
              path: "home",
              element: <Home />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "shop/product/details/:id",
              element: <ProductDetails />,
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
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <AuthProtctedRoutes />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
