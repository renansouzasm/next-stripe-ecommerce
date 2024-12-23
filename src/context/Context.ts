import { createContext } from "react";
import { ICartProductData, IProductData } from "../utils/api";

interface IContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  products: IProductData[];
  setProducts: React.Dispatch<React.SetStateAction<IProductData[] | []>>;
  cartProducts: ICartProductData[];
  setCartProducts: React.Dispatch<
    React.SetStateAction<ICartProductData[] | []>
  >;
  currentProduct: IProductData;
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProductData | ICartProductData>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<IContext>({} as IContext);
