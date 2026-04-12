import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const ContextProvider = ({ children }) => {
  const [blogPost, setBlogPost] = useState(
    JSON.parse(localStorage.getItem("blog_post")) || [],
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("blog_user")) || [],
  );

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("blog_current_user")) || null,
  );

  /*--Delete Articals-- */
  const handleDelete = (id) => {
    const updatedPost = blogPost.filter((post) => {
      return post.id !== id;
    });
    setBlogPost(updatedPost);
    localStorage.setItem("blog_post", JSON.stringify(updatedPost));
  };

  /*--toggle function for publish or Unpublish-- */
  const togglepublish = (id) => {
    const updatedPost = blogPost.map((post) =>
      post.id === id ? { ...post, published: !post.published } : post,
    );
    setBlogPost(updatedPost);
    localStorage.setItem("blog_post", JSON.stringify(updatedPost));
  };
  /*---filter published data---*/
  const getPublished = blogPost.filter((post) => post.published);
  return (
    <BlogContext.Provider
      value={{
        user,
        setUser,
        loggedUser,
        setLoggedUser,
        blogPost,
        setBlogPost,
        handleDelete,
        togglepublish,
        getPublished,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const MyContext = () => useContext(BlogContext);
