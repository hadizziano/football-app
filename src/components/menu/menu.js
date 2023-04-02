import React from "react";
import "../../styles/components.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menucontainer">
      <div>
        <a>Home</a>
        <a>About</a>
        <a>Downloads</a>
        <a>Login</a>
        <a>Sign up</a>
      </div>
      <svg className="menubg" height="76" viewBox="0 0 830 76" fill="none">
        <path
          d="M52.0484 75.5C-3.55161 75.5 -3.78494 25.1667 3.04839 0H837.048V75.5H52.0484Z"
          fill="#631717"
        />
      </svg>
    </div>
  );
};
export default Menu;
