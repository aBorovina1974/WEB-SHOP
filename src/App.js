import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
const RootLayout = lazy(() => import("./pages/Root"));
const HomePage = lazy(() => import("./pages/Home"));
const NewAccountPage = lazy(() => import("./pages/NewAccout"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Product = lazy(() => import("./components/Product/Product"));
const WishListPage = lazy(() => import("./pages/WishList"));
const Protected = lazy(() => import("./Protected"));
const WorkInProgress = lazy(() => import("./WorkInProgress"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));

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
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
