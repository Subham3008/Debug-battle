import { useNavigate } from "react-router";
import { useContextAuth } from "../../../shared/hooks/useContextAuth";
import { storage } from "../../../utils/localStorage";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useAuth = () => {
  const {
    registeredAdmins,
    setRegisteredAdmins,
    loggedInAdmin,
    setLoggedInAdmin,
  } = useContextAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onRegisteredSubmit = (data) => {
    const admin = [...registeredAdmins, { ...data, id: nanoid() }];
    setRegisteredAdmins(admin);
    storage.set("registered_admins", admin);
    toast.success("Admin registered successfully");
    navigate("/");
    console.log(data);
    reset();
  };

  const onLoggedSubmit = (data) => {
    const logAdmin = registeredAdmins.find(
      (admin) => admin.email === data.email && admin.password === data.password,
    );
    if (!logAdmin) {
      toast.error("Admin not found");
      return;
    }
    setLoggedInAdmin(logAdmin);
    storage.set("logged_admin", logAdmin);
    toast.success("Admin logged In successfully");

    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    registeredAdmins,
    setRegisteredAdmins,
    loggedInAdmin,
    setLoggedInAdmin,
    navigate,
    onRegisteredSubmit,
    onLoggedSubmit,
  };
};
