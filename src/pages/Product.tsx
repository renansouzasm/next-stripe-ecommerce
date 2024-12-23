import { ShoppingBag } from "@phosphor-icons/react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { formatImage } from "../utils/formatImage";
import { formatCurrency } from "../utils/formatCurrency";

export function Product() {
  const { currentProduct, cartProducts, setCartProducts } = useContext(Context);

  function addToCart(id: string) {
    if (!cartProducts.find((product) => product.id === id)) {
      setCartProducts([...cartProducts, { ...currentProduct, qty: 1 }]);
    }
  }

  return (
    <main className="py-0">
      <section className="w-full flex-1 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-bgColor3 w-full flex justify-center items-center py-4">
          <img
            className="w-52"
            src={formatImage(currentProduct.thumbnail)}
            alt="product thumbnail"
          />
        </div>

        <div className="bg-bgColor2 w-full flex flex-col justify-between py-4 px-3 sm:px-4 md:p-8">
          <div className="text-xs sm:text-sm">
            <p className="mb-4 font-bold">{currentProduct.title}</p>
            <p className="mb-4">
              <strong className="text-textColor3">
                {formatCurrency(currentProduct.price, "BRL")}
              </strong>
            </p>
            <p className="mb-4">
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
          </div>

          <button
            className="bg-textColor3 font-bold rounded-sm py-4 flex justify-center items-center gap-3"
            onClick={() => addToCart(currentProduct.id)}
          >
            <ShoppingBag /> Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}
