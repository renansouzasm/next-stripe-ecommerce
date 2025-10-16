import Stripe from "stripe";

interface ILayoutProps {
  children: React.ReactNode;
}

interface ICarouselProps {
  products: Stripe.Product[];
}

interface IProductListProps {
  products: Stripe.Product[];
}

interface IProductCardProps {
  product: Stripe.Product;
}

interface IProductDetailProps {
  product: Stripe.Product;
}

type StripePriceType = Stripe.Price;
