import "./style.css";

import { ReviewWrap } from "../../../../components/ReviewWrap";

import { Link } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useContext } from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

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
        <div className="cardThumbnail">
          <img
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
            alt="productPreview"
          />
        </div>

        <div className="cardInfos">
          <div className="productDescription">
            <ReviewWrap />

            <p className="cardTitle">{title}</p>
          </div>

          <p className="cardPrice">{formatCurrency(price, "BRL")}</p>
        </div>
      </div>
    </Link>
  );
};
