import "./Product.css";

import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCartSimple } from "@phosphor-icons/react";

export const Product = () => {
  const { product } = useContext(AppContext);
  const { title, price, thumbnail } = product;

  return (
    <>
      <main className="main">
        {product ? (
          <section className="product-details">
            <div className="details">
              <p className="route">
                <Link to={"/"} className="btnHome">
                  Home
                </Link>
                {"  >  Product  >  "} <span>{title}</span>
              </p>

              <div className="infos">
                <hgroup>
                  <h1>{title}</h1>
                  <h2>{price}</h2>
                </hgroup>

                <div className="reviews">
                  <Star size={12} />
                  <Star size={12} />
                  <Star size={12} />
                  <Star size={12} />
                  <Star size={12} />
                  Reviews
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <ul>
                  <li>Info 1</li>
                  <li>Info 2</li>
                  <li>Info 3</li>
                  <li>Info 4</li>
                </ul>

                <p>
                  Para mais informações sobre, acesse{" "}
                  <a href="#">site da empresa</a>
                </p>
              </div>

              <button className="btnAddCart">
                <ShoppingCartSimple />
                <p>Adicionar ao carrinho</p>
              </button>
            </div>

            <div className="product">
              <img
                src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                alt="thumbnail"
              />
            </div>
          </section>
        ) : (
          <p>Nada aqui</p>
        )}
      </main>
    </>
  );
};
