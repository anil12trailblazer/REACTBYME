import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grosery from "./components/Grosery";
// cunking
// lazy loading
// dynamic import
// code splitting
// on demand loading
// when user click on grosery link then only load the grosery component
// when we have large code base and we want to load only the required code then we can use lazy loading
const Grosery = lazy(() => import("./components/Grosery"));


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "grosery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grosery /></Suspense>
      }
    ],
    errorElement: <Error />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
