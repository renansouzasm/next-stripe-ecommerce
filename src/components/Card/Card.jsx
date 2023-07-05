import "./Card.css";

import { Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

export const Card = ({ item }) => {
  const { id, title, price, thumbnail } = item;
  const { setStorage } = useContext(AppContext);

  const showProduct = () => {
    const product = {
      id,
      title,
      price,
      thumbnail,
    };

    setStorage("storedProduct", product);
    return;
  };

  return (
    <Link onClick={showProduct} to={"/product"}>
      <div className="card">
        <div className="card-thumbnail">
          <img
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
            alt="product-preview"
          />
        </div>

        <div className="infos-product">
          <div className="card-reviews">
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            Reviews
          </div>
          <p className="card-title">{title}</p>
          <p className="card-price">{formatCurrency(price, "BRL")}</p>
        </div>
      </div>
    </Link>
  );
};
