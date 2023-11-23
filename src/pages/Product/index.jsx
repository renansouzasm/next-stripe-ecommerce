import "./style.css";

import { ProductDetails } from "./components/ProductDetails";
import { ProductPreview } from "./components/ProductPreview";

import { AppContext } from "../../context/AppContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { formatCurrency } from "../../utils/formatCurrency";

export const Product = () => {
  const [storedProduct, setStoredProduct] = useState({});
  const [cartStorage, setCartStorage] = useState(null);
  const { getStorage, setStorage } = useContext(AppContext);

  let verification;
  let update;

  useEffect(() => {
    setStoredProduct(getStorage("storedProduct"));
    setCartStorage(getStorage("cartStorage"));
  }, []);

  const addCart = async () => {
    if (storedProduct) {
      const { id, title, price, thumbnail } = storedProduct;
      const product = {
        id,
        title,
        price,
        thumbnail,
        qty: 1,
      };

      if (cartStorage) {
        verification = cartStorage.find((item) => item.id === id);
        if (verification) {
          update = cartStorage.map((item) => {
            return item.id === id ? { ...item, qty: item.qty + 1 } : item;
          });
        } else {
          update = [...cartStorage, product];
        }

        setStorage("cartStorage", update);
        setCartStorage(getStorage("cartStorage"));
      } else {
        setStorage("cartStorage", [product]);
        setCartStorage(getStorage("cartStorage"));
      }
    }
  };

  return (
    <>
      <section className="productContainer">
        <ProductDetails 
          storedProduct={storedProduct}
          Link={Link} 
          formatCurrency={formatCurrency} 
          addCart={addCart} 
          ShoppingCartSimple={ShoppingCartSimple} 
        />

        <ProductPreview storedProduct={storedProduct} />
      </section>
    </>
  );
};
