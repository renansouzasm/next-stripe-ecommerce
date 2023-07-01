import "./Home.css";

import { Card } from "../Card/Card";

import xboxBanner from "../../assets/xboxBanner.jpg";
import iphoneBanner from "../../assets/iphoneBanner.jpg";
import ps5Banner from "../../assets/ps5Banner.jpg";
import { useState, useEffect, useContext } from "react";
import { fetchApi } from "../../api/api.js";
import { AppContext } from "../../context/AppContext";

export const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const { query, product } = useContext(AppContext);

  useEffect(() => {
    fetchApi(query).then((result) => {
      setProductsList(result);
    });
  }, [query]);

  return (
    <>
      <main className="main">
        <section className="banners-container">
          <div className="banner">
            <img src={xboxBanner} alt="banner" />
          </div>
          <div className="banner">
            <img src={iphoneBanner} alt="banner" />
          </div>
          <div className="banner">
            <img src={ps5Banner} alt="banner" />
          </div>
        </section>

        <section className="products-container">
          {productsList.length > 0 ? (
            <div className="grid-products">
              <ul className="categories-wrapper">
                <li>{query}</li>
                <li>Categoria1</li>
                <li>Categoria2</li>
                <li>Categoria3</li>
              </ul>

              {productsList.map((item) => (
                <Card key={item.id} product={item} />
              ))}
            </div>
          ) : (
            <p>Nehum produto encontrado..</p>
          )}
        </section>
      </main>
    </>
  );
};
