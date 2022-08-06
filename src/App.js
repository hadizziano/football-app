import "./styles/App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import { connect } from "react-redux";
import { getData } from "./redux/api";
import React, { useEffect } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";

export const App = ({ getData }) => {
  useEffect(() => {
    getData("italy");
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  let routes = useRoutes([{ path: "/", element: <Home /> }]);
  let routes = null;
  return routes;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

const Connectedapp = connect(null, mapDispatchToProps)(App);
const AppWrapper = () => {
  return (
    <Router>
      <Header />
      <Body />
      <Connectedapp />
    </Router>
  );
};

export default AppWrapper;
