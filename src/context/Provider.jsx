import { useState } from "react";
import { AppContext } from "./AppContext";

export const Provider = ({ children }) => {
  const [query, setQuery] = useState("pc gamer");
  const [product, setProduct] = useState({});

  const value = {
    query,
    setQuery,
    product,
    setProduct,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
