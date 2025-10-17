import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import beats from "@/public/beats.png";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div className="space-y-12 layout-space">
      <section className="rounded-md bg-neutral-100 py-12 sm:py-16">
        <div className="mx-auto grid grid-cols-1 items-center gap-8 px-6 sm:px-12 md:grid-cols-2 md:gap-12">
          <div className="max-w-md space-y-6">
            <h2 className="text-lg font-bold tracking-tight text-gray-900 md:text-5xl leading-tight">
              Welcome to my ecommerce
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Discover the latest products at the best prices.
            </p>

            <Button
              className="inline-flex items-center justify-center rounded-full px-8 py-6 bg-black text-white hover:bg-gray-800 text-md font-semibold transition-all"
              asChild
              variant="default"
            >
              <Link href={"/products"}>Browse All Products</Link>
            </Button>
          </div>

          <div className="relative w-full aspect-square max-w-md mx-auto md:max-w-none">
            <Image
              className="object-cover"
              alt="Banner Image"
              src={beats || "/placeholder.svg"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
