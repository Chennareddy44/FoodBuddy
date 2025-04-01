import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "./Styles.css";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import RestaurantMenu from "./RestaurantMenu";
import Instamart from "./Instamart";
import Goal from "./Goal";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "../utils/userContext";

// import Cart from "./Cart";
const Cart = lazy(() => import("./Cart"));

const App = () => {
  const [user, setUser] = useState({
    name: "Jon Jones",
    email: "DuckDuck@ufc.com",
  });

  return (
    <userContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/About",
          element: <About />,
          children: [
            {
              path: "Goal",
              element: <Goal />,
            },
          ],
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/Instamart",
          element: <Instamart />,
        },
        {
          path: "/Cart",
          element: (
            <Suspense
              fallback={
                <h1>
                  Dana is asking you to buy some ppv or he gonna oil you up
                  Bwahahahaaa...
                </h1>
              }
            >
              <Cart />,
            </Suspense>
          ),
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // opt-in to the relative route resolution future flag for splat routes
      v7_startTransition: true, // opt-in to the React.startTransition future flag
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
