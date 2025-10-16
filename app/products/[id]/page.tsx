import { stripe } from "@/lib/stripe";
import ProductDetail from "./_components/product-detail";
import Stripe from "stripe";

type ProductPageProps = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product)) as Stripe.Product;

  return <ProductDetail product={plainProduct} />;
}
