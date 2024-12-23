import { ICartProductData } from "./api";

export function reducer(list: ICartProductData[]): number {
  return list.reduce((acc, product) => (acc += product.price * product.qty), 0);
}
