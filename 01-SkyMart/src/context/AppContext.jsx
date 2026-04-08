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

  //Add to cart related logic--->
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart_product")) || [],
  );

  const addToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);
    if (exists) {
      incrementCountity(product);
      return;
    }
    const cartProduct = [...cart, { ...product, quentity: 1 }];
    localStorage.setItem("cart_product", JSON.stringify(cartProduct));
    setCart(cartProduct);
  };

  //Increment & decrement

  const incrementCountity = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quentity: item.quentity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart_product", JSON.stringify(updatedCart));
  };

  const decrementCountity = (product) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === product.id) {
          return { ...item, quentity: item.quentity - 1 };
        }
        return item;
      })
      .filter((item) => item.quentity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart_product", JSON.stringify(updatedCart));
  };

  //Add button Add to Added

  const isInCart = (id) => {
    return cart.some((elem) => elem.id === id);
  };

  //Delete from cart page
  const handleDelete = (id) => {
    const updatedCart = cart.filter((elem) => {
      return elem.id !== id;
    });
    localStorage.setItem("cart_product", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  useEffect(() => {
    const cartItem = localStorage.getItem("cart_product");
    if (cartItem) {
      setCart(JSON.parse(cartItem));
    }
    setLoading(false);
  }, []);

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
        openCart,
        setOpenCart,
        addToCart,
        cart,
        setCart,
        incrementCountity,
        decrementCountity,
        handleDelete,
        isInCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
