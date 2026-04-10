import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("blog_user")) || [],
  );

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("blog_current_user")) || [],
  );

  /*--Sync from local storage---- */
  useEffect(() => {
    const data = localStorage.getItem("blog_current_user");
    if (data) {
      setLoggedUser(JSON.parse(data));
    }
  }, []);

  return (
    <BlogContext.Provider value={{ user, setUser, loggedUser, setLoggedUser }}>
      {children}
    </BlogContext.Provider>
  );
};

export const MyContext = () => useContext(BlogContext);
