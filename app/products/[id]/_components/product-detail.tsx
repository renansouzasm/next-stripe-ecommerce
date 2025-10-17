"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import type { IProductDetailProps, StripePriceType } from "@/types";
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
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {product.images && product.images[0] && (
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                className="transition-transform duration-300 hover:scale-105"
                alt={product.name}
                src={product.images[0] || "/placeholder.svg"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        )}

        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-xl font-bold mb-3 text-gray-900">
              {product.name}
            </h1>

            {product.description && (
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            )}
          </div>

          {price && price.unit_amount && (
            <div className="py-4 border-y border-gray-200">
              <p className="text-2xl font-bold text-gray-900">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            </div>
          )}

          <div className="flex items-center gap-6 py-4">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center gap-4">
              <Button
                onClick={onRemoveItem}
                variant="outline"
                size="lg"
                className="w-12 h-12 text-xl bg-transparent"
                disabled={quantity === 0}
              >
                -
              </Button>
              <span className="text-2xl font-semibold min-w-[3rem] text-center">
                {quantity}
              </span>
              <Button
                onClick={onAddItem}
                size="lg"
                className="w-12 h-12 text-xl bg-black hover:bg-gray-800"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
