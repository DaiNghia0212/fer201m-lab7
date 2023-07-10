import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home";
import Products from "../pages/products";
import ProductDetails from "../pages/products/product-details";
import Login from "../pages/authentication/Login";
import Dashboard from "../pages/management/dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Contact from "../pages/contact";
import About from "../pages/about";

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
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "management/",
        element: <ProtectedRoute />,
        children: [
          {
            element: <Dashboard />,
            index: true,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export { router };
