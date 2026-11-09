import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import RootLayout from "@/layouts/RootLayout/RootLayout";

import ArticlePage from "@/pages/ArticlePage/ArticlePage";
import HomePage from "@/pages/HomePage/HomePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/post/:id",
        Component: ArticlePage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
