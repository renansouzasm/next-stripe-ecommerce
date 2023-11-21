import "./CartCard.css";

import { Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

export const CartCard = ({ item, remove, sub, sum }) => {
  const { id, title, price, thumbnail, qty } = item;
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
    <div className="cartCard">
      <Link onClick={showProduct} to={"/product"}>
        <div className="cardThumb">
          <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="preview" />
        </div>
      </Link>

      <div className="cardDetails">
        <div className="cardTop">
          <p>{title}</p>
          <button className="btnDelete" onClick={() => remove(id)}>
            <Trash size={22} color="red" />
          </button>
        </div>

        <div className="cardBottom">
          <div className="productQty">
            <div className="btnsQty">
              <button className="btnSub" onClick={() => sub(id)}>
                -
              </button>
              <button className="btnSum" onClick={() => sum(id)}>
                +
              </button>
            </div>
            <p>{qty}</p>
          </div>
          <p>{formatCurrency(price * qty, "BRL")}</p>
        </div>
      </div>
    </div>
  );
};
