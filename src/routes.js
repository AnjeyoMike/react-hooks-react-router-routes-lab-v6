/*

const routes = [
   
  ];

export default routes;*/
/*import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/movie/:id" component={Movie} />
    <Route path="/actors" component={Actors} />
    <Route path="/directors" component={Directors} />
  </Switch>
);

export default routes;*/
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "directors",
        element: <Directors />,
      },
      {
        path: "actors",
        element: <Actors />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
      },
    ],
  },
]);

export default routes;
