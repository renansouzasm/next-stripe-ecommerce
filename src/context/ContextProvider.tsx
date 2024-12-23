import { useState } from "react";
import { ICartProductData, IProductData } from "../utils/api";
import { Context } from "./Context";

interface IContextProviderProps {
  children: React.ReactNode;
}

export function ContextProvider({ children }: IContextProviderProps) {
  const [products, setProducts] = useState<IProductData[] | []>([]);
  const [cartProducts, setCartProducts] = useState<ICartProductData[] | []>([]);
  const [currentProduct, setCurrentProduct] = useState<
    IProductData | ICartProductData
  >({} as IProductData | ICartProductData);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("pc gamer");

  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        currentProduct,
        setCurrentProduct,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}
