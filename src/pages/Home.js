import React from "react";
import { Link } from "react-router-dom";
import Body from "../components/body/body";

export default function insert() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/About">About </Link>
      <Link to="/insertgame">Insert game</Link>
      <Body />
    </div>
  );
}
