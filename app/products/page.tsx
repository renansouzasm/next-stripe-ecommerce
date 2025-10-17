import { stripe } from "@/lib/stripe";
import { ProductList } from "./_components/product-list";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div className="pb-12 layout-space">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-10">
        All Products
      </h1>

      <ProductList products={products.data} />
    </div>
  );
}
