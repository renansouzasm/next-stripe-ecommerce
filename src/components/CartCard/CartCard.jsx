import "./CartCard.css";

import { Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

export const CartCard = ({ item }) => {
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
      <div className="cartCard">
        <div className="cardThumb">
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="preview" />
        </div>

        <div className="cardDetails">Po muito legai isso aQ kkkkcdfsfkdv lol</div>
      </div>
    </Link>
  );
};
