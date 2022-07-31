import React from "react";
import BodyPicture from "../../images/header/black-template.jpg";
import "../../styles/components.css";
import GameResults from "../gameResults/game-results";
const Body = () => {
  return (
    <div>
      <GameResults />
      <img className="headerImage" src={BodyPicture} />
    </div>
  );
};
export default Body;
