import "./Cart.css";

import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/formatCurrency.js";
import { Link } from "react-router-dom";
import { CartCard } from "../CartCard/CartCard.jsx";

export const Cart = () => {
  const { getStorage, setStorage } = useContext(AppContext);
  const [cartStorage, setCartStorage] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = getStorage("cartStorage");
    if (cart) {
      setCartStorage(cart);
    }
    if (cartStorage) {
      cartStorage.map((item) => {
        setTotal(item.price * item.qty);
      });
    }
  }, [getStorage]);

  useEffect(() => {
    if (cartStorage) {
      setTotal(0);
      setTotal(
        cartStorage.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
    }
  }, [cartStorage]);

  useEffect(() => {
    setStorage("cartStorage", cartStorage);
  }, [cartStorage, setStorage]);

  function remove(id) {
    setCartStorage((prevState) => prevState.filter((item) => item.id !== id));
  }

  function sub(id) {
    setCartStorage((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  }

  function sum(id) {
    setCartStorage((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  return (
    <main className="main">
      <section className="content">
        {cartStorage.length > 0 ? (
          <section className="cartContainer">
            <div className="productsColumn">
              {cartStorage.map((item) => (
                <CartCard
                  key={item.id}
                  item={item}
                  remove={remove}
                  sub={sub}
                  sum={sum}
                />
              ))}
            </div>

            <aside className="cartResume">
              <h1>{formatCurrency(total, "BRL")}</h1>
            </aside>
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
