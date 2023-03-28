import "./styles/App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import { connect } from "react-redux";
import { getData } from "./redux/api/api";
import React, { useEffect } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { GameResults } from "./components/gameResults/game-results";
import { InsertGame } from "./components/insert-game/insert-game";
import { InsertTeam } from "./components/insert-team/insert-team";
export const App = ({ getData }) => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/insertgame", element: <InsertGame /> },
    { path: "/gameresults", element: <GameResults /> },
    { path: "/insertteam", element: <InsertTeam /> },
  ]);
  // let routes = null;
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
