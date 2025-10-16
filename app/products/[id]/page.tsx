import { stripe } from "@/lib/stripe";
import ProductDetail from "./_components/product-detail";
import Stripe from "stripe";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product)) as Stripe.Product;
  return <ProductDetail product={plainProduct} />;
}
