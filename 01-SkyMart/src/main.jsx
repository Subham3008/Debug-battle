import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ContextProvider } from "./context/AppContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AppRoutes />
    <ToastContainer />
  </ContextProvider>,
);
