import { useState } from "react";
import { AppContext } from "./AppContext";

export const Provider = ({ children }) => {
  const [query, setQuery] = useState("PC Gamer");

  const getStorage = (item) => {
    const product = JSON.parse(localStorage.getItem(item));
    return product;
  };

  const setStorage = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
  };

  const value = {
    query,
    setQuery,
    getStorage,
    setStorage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
