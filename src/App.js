import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import NewAccountPage from "./pages/NewAccout";
import DashboardPage from "./pages/Dashboard";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import Product from "./components/Product/Product";
import WishListPage from "./pages/WishList";
import Protected from "./Protected";
import WorkInProgress from "./WorkInProgress";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "myprofile",
        element: (
          <PrivateRoutes>
            <DashboardPage />
          </PrivateRoutes>
        ),
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
      {
        path: "wishlist",
        element: <WishListPage />,
      },
      {
        path: "protected",
        element: <Protected />,
      },
      // {
      //   path: "sale",
      //   element: <WorkInProgress />,
      // },
      {
        path: "contact",
        element: <WorkInProgress />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
