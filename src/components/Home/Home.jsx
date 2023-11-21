import "./Home.css";

import { Card } from "../Card/Card";

import xboxBanner from "../../assets/xboxBanner.jpg";
import iphoneBanner from "../../assets/iphoneBanner.jpg";
import ps5Banner from "../../assets/ps5Banner.jpg";
import { useEffect, useContext, useState } from "react";
import { fetchApi } from "../../api/api.js";
import { AppContext } from "../../context/AppContext";

export const Home = () => {
  const { query } = useContext(AppContext);
  const [productCatalog, setProductCatalog] = useState([]);

  useEffect(() => {
    fetchApi(query).then((result) => {
      setProductCatalog(result);
    });
  }, [query]);

  return (
    <>
      <main className="main">
        <section className="bannersContainer">
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

        <section className="content">
          {productCatalog.length > 0 ? (
            <div className="productsGrid">
              {productCatalog.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="notFoundMsg">Nehum produto encontrado..</p>
          )}
        </section>
      </main>
    </>
  );
};
