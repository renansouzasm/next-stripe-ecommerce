import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";
import { ContextProvider } from "./context/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router";
import { Menu } from "./pages/components/Menu";
import "./global.css";

export function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <Menu />
      </ContextProvider>
    </BrowserRouter>
  );
}
