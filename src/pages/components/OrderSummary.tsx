import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { reducer } from "../../utils/reducer";
import { formatCurrency } from "../../utils/formatCurrency";

interface IOrderSummary {
  subTotal: number;
  shipping: number;
  discount: number;
  total: number;
}

export function OrderSummary() {
  const { cartProducts } = useContext(Context);

  const [orderSumary, setOrderSummary] = useState<IOrderSummary>({
    subTotal: 0,
    shipping: 70,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    const subTotal = reducer(cartProducts);
    const shipping = 70;
    const discount = subTotal > 10000 ? 20 : 0;
    const total = (subTotal + shipping) * (1 - discount / 100);

    setOrderSummary({ subTotal, shipping, discount, total });
  }, [cartProducts]);

  return (
    <div className="bg-bgColor3 text-textColor2 w-full h-56 flex flex-col justify-between px-3 py-4 md:min-w-72 md:w-72 lg:min-w-80 lg:h-64 text-xs sm:text-sm">
      <div>
        <div className="flex justify-between mb-3">
          <p>Subtotal</p> <p>{formatCurrency(orderSumary.subTotal, "BRL")}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Shipping</p> <p>{formatCurrency(orderSumary.shipping, "BRL")}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Discount</p> <p>{orderSumary.discount}%</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Total</p>
          <p>
            <strong>{formatCurrency(orderSumary.total, "BRL")}</strong>
          </p>
        </div>
      </div>

      <button className="bg-textColor3 font-bold text-sm rounded-sm py-4">
        Buy Now
      </button>
    </div>
  );
}
