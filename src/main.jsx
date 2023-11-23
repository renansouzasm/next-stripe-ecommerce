import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { App } from "./App.jsx";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <RouterProvider router={routes} />
);
