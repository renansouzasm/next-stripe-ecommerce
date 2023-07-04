import { Header } from "./components/Header/Header";
import { Provider } from "./context/Provider";
import { Footer } from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Provider>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};
