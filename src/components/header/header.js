import React from "react";
import "../../styles/components.css";
import Menu from "../menu/menu";
import Background from "../../images/header/bg.jpg";
const Header = () => {
  return (
    <div className="headercontainer">
      <img className="headerimage" src={Background} />
    </div>
  );
};
export default Header;
