import React from "react";
import "../../styles/components.css";
import Menu from "../menu/menu";
import Background from "../../images/header/bg.jpg";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headercontainer">
      <img className="headerimage" src={Background} />
      <Link to="/About">About</Link>
    </div>
  );
};
export default Header;
