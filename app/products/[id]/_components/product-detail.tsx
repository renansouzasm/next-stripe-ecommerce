"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { IProductDetailProps, StripePriceType } from "@/types";
import Image from "next/image";

export default function ProductPage({ product }: IProductDetailProps) {
  const { items, addItem, removeItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const price = product.default_price as StripePriceType;

  function onAddItem() {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  }

  function onRemoveItem() {
    removeItem(product.id);
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.images && product.images[0] && (
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image
            className="transition duration-300 hover:opacity-90"
            alt={product.name}
            src={product.images[0]}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        {product.description && (
          <p className="text-gray-700 mb-4">{product.description}</p>
        )}

        {price && price.unit_amount && (
          <p className="text-lg font-semibold text-gray-900">
            {(price.unit_amount / 100).toFixed(2)}
          </p>
        )}

        <div className="flex items-center space-x-4">
          <Button onClick={onRemoveItem} variant={"outline"}>
            -
          </Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button onClick={onAddItem}>+</Button>
        </div>
      </div>
    </div>
  );
}
