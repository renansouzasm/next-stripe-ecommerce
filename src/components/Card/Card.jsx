import "./Card.css";

import { Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export const Card = ({ product }) => {
  const { title, price, thumbnail } = product;
  const { setProduct } = useContext(AppContext);

  const handle = () => {
    setProduct(product);
  };

  return (
    <Link to={"/product"} onClick={handle}>
      <div className="card">
        <div className="thumbnail">
          <img
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
            alt="product-preview"
          />
        </div>

        <div className="infos-product">
          <div className="reviews">
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            Reviews
          </div>
          <p className="title">{title}</p>
          <p className="price">R$ {price}</p>
        </div>
      </div>
    </Link>
  );
};
