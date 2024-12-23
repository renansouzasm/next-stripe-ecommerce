import { IProductData } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatImage } from "../../utils/formatImage";

interface IHomeProductCardProps {
  product: IProductData;
}

export function HomeProductCard({ product }: IHomeProductCardProps) {
  return (
    <article className="bg-bgColor3 py-4 px-3 flex gap-3 w-full max-w-96 h-36 sm:p-4 sm:items-center sm:w-56 sm:h-96 sm:flex-col">
      <div className="">
        <img
          className="h-20 sm:h-40"
          src={formatImage(product.thumbnail)}
          alt="product thumbnail"
        />
      </div>

      <div className="text-textColor2 h-full flex flex-col flex-1 justify-between text-xs sm:text-sm">
        <p className="line-clamp-3">{product.title}</p>

        <p>
          <strong className="text-textColor3">
            {formatCurrency(product.price, "BRL")}
          </strong>
        </p>
      </div>
    </article>
  );
}
