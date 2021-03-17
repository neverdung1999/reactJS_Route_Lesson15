import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import NotFound from "./components/noteFound";
import Products from "./components/products";
import Login from "./components/login";
// import ProductItem from "./components/productItem";

export const routers = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/products",
    exact: false,
    main: ({ match, location }) => (
      <Products match={match} location={location} />
    ),
  },
  // {
  //   path: "/products/:slug",
  //   exact: false,
  //   main: ({ match }) => <ProductItem match={match} />,
  // },
  {
    path: "/login",
    exact: false,
    main: ({ location }) => <Login location={location} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routers;
