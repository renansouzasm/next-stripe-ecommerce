import { Header } from "./components/Header/Header";
import { Provider } from "./context/Provider";
import { Footer } from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export const App = () => {
  const [search, setSearch] = useState();

  return (
    <>
      <Provider>
        <Header />
        <Outlet products={search} />
        <Footer />
      </Provider>
    </>
  );
};
