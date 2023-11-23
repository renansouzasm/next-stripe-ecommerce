import "./style.css";

import { ReviewWrap } from "../../../../components/ReviewWrap";

export const ProductDetails = ({ storedProduct, Link, formatCurrency, addCart, ShoppingCartSimple }) => {
    return(
      <div className="productDetails">
        <p className="route">
          <Link to={"/"} className="btnHome">
            Home
          </Link>
          {"  >  Product  >  "}{" "}
          <span>{storedProduct?.title ?? "Nome do produto"}</span>
        </p>
      
        <div className="productInfos">
          <hgroup className="productTitle">
            <h1>{storedProduct?.title ?? "Nome do produto"}</h1>
            <h2>{formatCurrency(storedProduct?.price ?? 1000, "BRL")}</h2>
          </hgroup>
      
          <ReviewWrap />
      
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
      
          <ul className="productListInfos">
            <li>Info 1</li>
            <li>Info 2</li>
            <li>Info 3</li>
            <li>Info 4</li>
          </ul>
      
          <p className="productLink">
            Para mais informações sobre, acesse{" "}
            <a href="#">site da empresa</a>
          </p>
        </div>
      
        <button className="addCartBtn uppercase" onClick={addCart}>
          <ShoppingCartSimple />
          <p>Adicionar ao carrinho</p>
        </button>
      </div>
    );
}
