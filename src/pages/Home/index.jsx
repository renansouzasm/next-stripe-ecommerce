import "./style.css";

import { BannersContainer } from "./components/BannersContainer";
import { ProductCard } from "./components/ProductCard/index.jsx";

import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency.js";
import { useEffect, useContext, useState } from "react";
import { fetchApi } from "../../api/api.js";
import { AppContext } from "../../context/AppContext.js";

export const Home = () => {
  const { query, setStorage } = useContext(AppContext);
  const [productCatalog, setProductCatalog] = useState([]);

  useEffect(() => {
    fetchApi(query).then((result) => {
      setProductCatalog(result);
    });
  }, [query]);

  const showProduct = (item) => {
    const product = {
      ...item,
    };

    setStorage("storedProduct", product);
    return;
  };

  return (
    <>
      <BannersContainer />

      <section className="content">
        {productCatalog.length > 0 ? (
          <div className="productsGrid">
            {productCatalog.map((item) => (
              <Link onClick={() => showProduct(item)} to={"/product"}>
                <ProductCard
                  key={item.id}
                  item={item}
                  formatCurrency={formatCurrency}
                />
              </Link>
            ))}
          </div>
        ) : (
          <p className="notFoundMsg">Nehum produto encontrado..</p>
        )}
      </section>
    </>
  );
};
