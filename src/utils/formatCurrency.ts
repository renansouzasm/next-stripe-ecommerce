export const formatCurrency = (price: number, currency: string) => {
  return price.toLocaleString("pt-br", { style: "currency", currency });
};
