"use client";

import type { ICarouselProps } from "@/types";
import { Card, CardContent, CardTitle } from ".//ui/card";
import { useEffect, useState } from "react";
import type Stripe from "stripe";
import Image from "next/image";
import { formatPriceBRL } from "@/lib/utils";

export function Carousel({ products }: ICarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative rounded-md overflow-hidden">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] md:aspect-[21/9]">
          <Image
            className="transition-opacity duration-500 ease-in-out object-contain"
            alt={currentProduct.name}
            src={currentProduct.images[0] || "/placeholder.svg"}
            fill
            sizes="100vw"
            priority
          />
        </div>
      )}

      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
        <CardTitle className="text-2xl md:text-5xl font-bold text-white mb-3 text-center px-4 drop-shadow-lg">
          {currentProduct.name}
        </CardTitle>

        {price && price.unit_amount && (
          <p className="text-2xl font-semibold text-white drop-shadow-lg">
            {formatPriceBRL(price.unit_amount)}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
