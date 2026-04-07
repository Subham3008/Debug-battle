import { createContext, useContext, useEffect, useState } from "react";
// import { getAllProductCategory } from "../api/ProductCategoryApi";

let MyContext = createContext();

export let ContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("regUser")) || [],
  );
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const [statsData, setStatsData] = useState([
    {
      title: "Cart Items",
      value: 0,
      sub: "In your bag",
      icon: "📦",
      color: "text-[#C8F400]",
      bg: "bg-[#C8F400]/10",
    },
    {
      title: "Cart Value",
      value: "$0.00",
      sub: "Ready to checkout",
      icon: "📈",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Top Products",
      value: 5,
      sub: "Highly rated",
      icon: "⭐",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      title: "Categories",
      value: 6,
      sub: "To explore",
      icon: "🏷️",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ]);

  //sync from localStorage on app start
  useEffect(() => {
    const data = localStorage.getItem("logUser");
    if (data) {
      setLoggedUser(JSON.parse(data));
    }
    setLoading(false);
  }, []);

  //get all category
  // const [productCategory, setProductCategory] = useState([]);
  // const fetchCategory = async () => {
  //   await new Promise((res) => setTimeout(res, 500)); // optional delay
  //   const data = await getAllProductCategory(); // cached API call
  //   return data;
  // };

  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const data = await fetchCategory();
  //       setProductCategory(data);
  //     } catch (error) {
  //       console.log("Category fetch error:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getCategories();
  // }, []);

  return (
    <MyContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        registeredUser,
        setRegisteredUser,
        loading,
        setLoading,
        show,
        setShow,
        statsData,
        // productCategory,
        // setProductCategory,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
