import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Contact, Home, Product, ProductsPage } from "pages";

import RootLayout from "layout/RootLayout";
import { productLoader } from "pages/Products/Product/loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "products",
          element: <ProductsPage />,
        },
        {
          path: "products/:slug",
          element: <Product />,
          loader: productLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
