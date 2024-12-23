export interface IProductData {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

export interface ICartProductData extends IProductData {
  qty: number;
}

export interface IApiData {
  results: IProductData[];
}

export async function api(query: string): Promise<IProductData[]> {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );

  const data: IApiData = await response.json();

  return data.results;
}
