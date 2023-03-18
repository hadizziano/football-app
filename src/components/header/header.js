import React from "react";
import "../../styles/components.css";
import Menu from "../menu/menu";
import Background from "../../images/header/bkg.png";
import Ball from "../../images/header/ball.png";

import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headercontainer">
      <Menu />
      <div className="slogan">Football is the history</div>
      <img className="ball" src={Ball} />
      <img className="headerimage" src={Background} />
    </div>
  );
};
export default Header;
