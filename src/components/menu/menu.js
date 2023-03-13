import React from "react";
import "../../styles/components.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/About">About</Link>
      </div>
      <div>
        <Link to="/insertgame">Insert game</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
export default Menu;
