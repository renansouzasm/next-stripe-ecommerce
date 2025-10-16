import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

export function ProductCard({ product }: IProductCardProps) {
  const price = product.default_price as Stripe.Price;

  return (
    <Link className="block h-full" href={`/products/${product.id}`}>
      <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
        {product.images && product.images[0] && (
          <div className="relative h-60 w-full">
            <Image
              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
              alt={product.name}
              src={product.images[0]}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}

        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-800">
            {product.name}
          </CardTitle>

          <CardContent className="p-4 flex-grow flex flex-col justify-between">
            {product.description && (
              <p className="text-gray-600 text-sm mb-2">
                {product.description}
              </p>
            )}

            {price && price.unit_amount && (
              <p className="text-lg font-semibold text-gray-900">
                {(price.unit_amount / 100).toFixed(2)}
              </p>
            )}

            <Button className="mt-4 bg-black text-white">View Details</Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
