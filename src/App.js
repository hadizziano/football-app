import "./styles/App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import { connect } from "react-redux";
import { getData } from "./redux/api/api";
import React, { useEffect } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
export const App = ({ getData }) => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);
  // let routes = null;
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Body />
      <Link to="/">Home</Link>
      <Header />
      <App />
    </Router>
  );
};

export default AppWrapper;
