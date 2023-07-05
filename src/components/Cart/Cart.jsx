import "./Cart.css";

import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/formatCurrency.js";
import { Link } from "react-router-dom";

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
      <section className="payment-container">
        <div className="payment-grid">
          <div className="products">
            {cartStorage ? (
              cartStorage.map((item) => (
                <Link key={item.id} to={"/product"}>
                  <div className="product">
                    <div className="thumbnail">
                      <img
                        src={item.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                        alt="preview"
                      />
                    </div>
                    <div className="title">{item.title}</div>
                    <div className="price">
                      {formatCurrency(item.price, "BRL")}
                    </div>
                    <div className="qty">
                      <div>
                        <button>-</button>
                        {item.qty}
                        <button>+</button>
                      </div>
                    </div>
                    <div className="total">
                      {formatCurrency(item.price * item.qty, "BRL")}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Nada por aqui</p>
            )}
          </div>

          <div className="pricing">Pagamento</div>
        </div>
      </section>
    </main>
  );
};
