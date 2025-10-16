import { stripe } from "@/lib/stripe";
import ProductDetail from "./_components/product-detail";
import { IProductPageProps } from "@/types";

export default async function ProductPage({ params }: IProductPageProps) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />;
}
