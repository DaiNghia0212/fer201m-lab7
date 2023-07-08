import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home";
import Products from "../pages/products";
import ProductDetails from "../pages/products/product-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "products",
        element: <Products />,
      },
      { path: "products/:id", element: <ProductDetails /> },
    ],
  },
  {
    path: "/manage",
    element: <h1>Hello</h1>,
  },
]);

export { router };
