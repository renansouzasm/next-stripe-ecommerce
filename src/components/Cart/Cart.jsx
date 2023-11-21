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
  }, []);

  useEffect(() => {
    if (cartStorage) {
      setTotal(0);
      setTotal(
        cartStorage.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
    }
  }, [cartStorage]);

  function remove(id) {
    setCartStorage((prevState) => prevState.filter((todo) => todo.id != id));
    setStorage("cartStorage", cartStorage);
    console.log(cartStorage);
  }

  return (
    <main className="main">
      <section className="content">
        {cartStorage.length > 0 ? (
          <section className="cartContainer">
            <div className="productsColumn">
              {cartStorage.map((item) => (
                <CartCard key={item.id} item={item} remove={remove} />
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
