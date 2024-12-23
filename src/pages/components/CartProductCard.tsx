import { useContext } from "react";
import { TrashSimple } from "@phosphor-icons/react";
import { Context } from "../../context/Context";
import { ICartProductData } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatImage } from "../../utils/formatImage";
import { Link } from "react-router";

interface ICartProductCardProps {
  product: ICartProductData;
}

export function CartProductCard({ product }: ICartProductCardProps) {
  const { cartProducts, setCartProducts, setCurrentProduct } =
    useContext(Context);

  function sub() {
    if (product.qty > 1) {
      setCartProducts((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  }

  function sum() {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function deleteProduct(id: string) {
    if (cartProducts.find((product) => product.id === id)) {
      setCartProducts(cartProducts.filter((product) => product.id !== id));
    }
  }

  function showCurrentProduct() {
    setCurrentProduct(product);
  }

  return (
    <article className="bg-white text-textColor2 w-full h-44 py-4 px-3 flex flex-col items-end justify-between relative">
      <div className="flex gap-3">
        <div>
          <img
            className="w-20 lg:w-24"
            src={formatImage(product.thumbnail)}
            alt="product thumbnail"
          />
        </div>

        <div className="flex flex-col flex-1 text-xs sm:text-sm">
          <Link to={"/product"} onClick={showCurrentProduct}>
            <p className="line-clamp-3 mb-3 cursor-pointer">{product.title}</p>
          </Link>
          <p className="text-textColor3">
            <strong>
              {formatCurrency(product.price * product.qty, "BRL")}
            </strong>
          </p>
        </div>
      </div>

      <div className="flex gap-1">
        <div className="btnQty" onClick={sub}>
          -
        </div>
        <div className="btnQty">{product.qty}</div>
        <div className="btnQty" onClick={sum}>
          +
        </div>
      </div>

      <button
        className="bg-red-500 top-0 rounded-b-md cursor-pointer w-8 h-8 absolute"
        onClick={() => deleteProduct(product.id)}
      >
        <TrashSimple className="m-auto" size={16} />
      </button>
    </article>
  );
}
