import { createBrowserRouter } from "react-router";
import Analytics from "../features/analytics/pages/Analytics.jsx";
import ProtectedRoute from "../features/auth/components/ProtectedRoute.jsx";
import Login from "../features/auth/pages/Login.jsx";
import Register from "../features/auth/pages/Register.jsx";
import Home from "../features/home/pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/analytics",
    element: (
      <ProtectedRoute>
        <Analytics />
      </ProtectedRoute>
    ),
  },
  {
    path: "/:username",
    element: <Home />,
  },
]);

export default router;
