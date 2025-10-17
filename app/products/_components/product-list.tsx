"use client";

import type { IProductListProps } from "@/types";
import { ProductCard } from "./product-card";
import { useState } from "react";

export function ProductList({ products }: IProductListProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLocaleLowerCase();

    const nameMacth = product.name.toLocaleLowerCase().includes(term);
    const descriptionMacth = product.description
      ? product.description.toLocaleLowerCase().includes(term)
      : false;

    return nameMacth || descriptionMacth;
  });

  return (
    <div>
      <div className="mb-8 flex justify-center">
        <input
          className="w-full max-w-md rounded-md border-2 border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search products..."
        />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProduct.map((product, key) => {
          return (
            <li key={key}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
