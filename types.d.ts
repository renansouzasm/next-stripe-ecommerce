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

type IProductPageProps = {
  params: {
    id: string;
  };
};

interface IProductDetailProps {
  product: Stripe.Product;
}

type StripePriceType = Stripe.Price;
