import "./Cart.css";

import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/formatCurrency.js";
import { Link } from "react-router-dom";
import { CartCard } from "../CartCard/CartCard.jsx";

export const Cart = () => {
  const { getStorage, setStorage } = useContext(AppContext);
  const [cartStorage, setCartStorage] = useState([]);

  useEffect(() => {
    const cart = getStorage("cartStorage");
    if (cart) {
      setCartStorage(cart);
    }
  }, []);

  return (
    <main className="main">
      <section className="content">
        {cartStorage.length > 0 ? (
          <section className="cartContainer">
            <div className="productsColumn">
              {cartStorage.map((item) => (
                <Link key={item.id} to={"/product"}>
                  <CartCard key={item.id} item={item} />
                </Link>
              ))}
            </div>

            <aside className="cartResume"></aside>
          </section>
        ) : (
          <div className="notFoundMsg">
            <p>Seu Carrinho está vazio</p>
            <p>
              Continuar <Link to={"/"}>Navegando</Link>?
            </p>
          </div>
        )}
      </section>
    </main>
  );
};
