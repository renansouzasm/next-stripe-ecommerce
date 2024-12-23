import { useContext, useEffect } from "react";
import { HomeProductCard } from "./components/HomeProductCard";
import { api, IProductData } from "../utils/api";
import { Context } from "../context/Context";
import { Link } from "react-router";

export function Home() {
  const { query, setQuery, products, setProducts, setCurrentProduct } =
    useContext(Context);

  useEffect(() => {
    async function fetchApi() {
      const data: IProductData[] = await api(query ?? "pc gamer");
      setProducts(data);
    }
    fetchApi();
  }, [query, setProducts]);

  function setDefaultQuery() {
    setQuery("pc gamer");
  }

  return (
    <main>
      <section className="mx-auto w-fit">
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((item) => (
              <Link
                to={"/product"}
                key={item.id}
                onClick={() => setCurrentProduct(item)}
              >
                <HomeProductCard product={item} />
              </Link>
            ))}
          </div>
        ) : (
          <h1 className="mx-3 my-32 text-2xl text-center">
            We couldn't find any results for your search. Take a look at some of
            our{" "}
            <strong
              className="text-textColor3 cursor-pointer"
              onClick={setDefaultQuery}
            >
              featured products
            </strong>{" "}
            instead!
          </h1>
        )}
      </section>
    </main>
  );
}
