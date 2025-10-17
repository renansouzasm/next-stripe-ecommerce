"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-actions";
import Image from "next/image";
import Link from "next/link";
import { formatPriceBRL } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, addItem, removeItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center layout-space">
        <div className="max-w-md mx-auto space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600">Add some products to get started!</p>
          <Button asChild className="mt-4">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 layout-space">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
        Checkout
      </h1>

      <Card className="mb-8 shadow-md rounded-md">
        <CardHeader className="border-b">
          <CardTitle className="text-md font-bold">Order Summary</CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          <ul className="space-y-6">
            {items.map((item, key) => (
              <li
                className="flex gap-4 border-b pb-6 last:border-b-0 last:pb-0"
                key={key}
              >
                {item.imageUrl && (
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      sizes="96px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {formatPriceBRL(item.price)} each
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 p-0"
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => addItem({ ...item, quantity: 1 })}
                        className="w-8 h-8 p-0 bg-black hover:bg-gray-800"
                      >
                        +
                      </Button>
                    </div>

                    <span className="text-md font-bold text-gray-900">
                      {formatPriceBRL(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t flex justify-between items-center">
            <span className="text-md font-semibold text-gray-700">Total:</span>
            <span className="text-md font-bold text-gray-900">
              {formatPriceBRL(total)}
            </span>
          </div>
        </CardContent>
      </Card>

      <form className="space-y-4" action={checkoutAction}>
        <input type="hidden" name="items" value={JSON.stringify(items)} />

        <Button
          className="w-full h-12 text-md bg-black hover:bg-gray-800"
          type="submit"
        >
          Proceed to Payment
        </Button>

        <Button
          className="w-full h-12 text-md bg-transparent"
          onClick={clearCart}
          type="button"
          variant="outline"
        >
          Clear Cart
        </Button>
      </form>
    </div>
  );
}
