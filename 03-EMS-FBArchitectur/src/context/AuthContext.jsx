import { createContext, useEffect, useState } from "react";
import { storage } from "../utils/localStorage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [registeredAdmins, setRegisteredAdmins] = useState([]);
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);

  useEffect(() => {
    const regAdmins = storage.get("registered_admins");
    setRegisteredAdmins(() => (regAdmins ? regAdmins : []));

    const logAdmin = storage.get("logged_admins");
    setLoggedInAdmin(logAdmin);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        registeredAdmins,
        setRegisteredAdmins,
        loggedInAdmin,
        setLoggedInAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
