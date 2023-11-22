import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { App } from "./App.jsx";
import { ErrorPage } from "./ErrorPage.jsx";
import { Home } from "./components/Home/Home";
import { Product } from "./components/Product/Product";
import { Cart } from "./components/Cart";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
