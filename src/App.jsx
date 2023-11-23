import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Provider } from "./context/Provider";

import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Provider>
        <Header />
        <Menu />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </>
  );
};
