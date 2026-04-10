import { createRoot } from "react-dom/client";
import "./index.css";
import { ContextProvider } from "./context/BlogContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AppRoutes />
    <ToastContainer />
  </ContextProvider>,
);
