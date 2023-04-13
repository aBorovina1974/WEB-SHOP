import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import NewAccountPage from "./pages/NewAccout";
import DashboardPage from "./pages/Dashboard";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import Product from "./components/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "signup",
        element: <NewAccountPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "catalog",
        element: <CatalogPage />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
