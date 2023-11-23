import "./style.css";

import { ReviewWrap } from "../../../../components/ReviewWrap";

export const ProductCard = ({ item, formatCurrency }) => {
  const { title, price, thumbnail } = item;

  return (
    <div className="productCard">
      <div className="productCardThumbnail">
        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="preview" />
      </div>

      <div className="productCardInfos">
        <div className="productCardDescription">
          <ReviewWrap />

          <p className="productCardTitle">{title}</p>
        </div>

        <p className="productCardPrice">{formatCurrency(price, "BRL")}</p>
      </div>
    </div>
  );
};
