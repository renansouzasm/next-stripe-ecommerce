import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPriceBRL } from "@/lib/utils";
import type { IProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import type Stripe from "stripe";

export function ProductCard({ product }: IProductCardProps) {
  const price = product.default_price as Stripe.Price;

  return (
    <Link className="block h-full" href={`/products/${product.id}`}>
      <Card className="rounded-md group hover:shadow-xl transition-all duration-300 h-full flex flex-col border-gray-200 overflow-hidden">
        {product.images && product.images[0] && (
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              className="group-hover:scale-105 transition-transform duration-300"
              alt={product.name}
              src={product.images[0] || "/placeholder.svg"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        )}

        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-md font-bold text-gray-800 line-clamp-2">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 pt-2 flex-grow flex flex-col justify-between">
          {product.description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {product.description}
            </p>
          )}

          <div className="mt-auto space-y-3">
            {price && price.unit_amount && (
              <p className="text-md font-bold text-gray-900">
                {formatPriceBRL(price.unit_amount)}
              </p>
            )}

            <Button className="w-full bg-black text-white hover:bg-gray-800">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
