import { useContext } from "react";
import { CartProductCard } from "./components/CartProductCard";
import { Context } from "../context/Context";

import { Link } from "react-router";
import { OrderSummary } from "./components/OrderSummary";

export function Cart() {
  const { cartProducts } = useContext(Context);

  return (
    <main>
      <section className="mx-auto max-w-96 flex flex-col gap-4 md:flex-row md:max-w-[640px] lg:max-w-[832px]">
        {cartProducts && cartProducts.length > 0 ? (
          <>
            <div className="flex flex-col w-full gap-4">
              {cartProducts.map((item) => (
                <CartProductCard key={item.id} product={item} />
              ))}
            </div>

            <OrderSummary />
          </>
        ) : (
          <h1 className="mx-3 my-32 text-2xl text-center">
            Your cart is empty. Go back to{" "}
            <Link to={"/"}>
              <strong className="text-textColor3 cursor-pointer">
                the store
              </strong>
            </Link>{" "}
            and add some products!
          </h1>
        )}
      </section>
    </main>
  );
}
