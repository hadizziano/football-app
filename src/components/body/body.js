import React from "react";
import BodyPicture from "../../images/header/black-template.jpg";
import "../../styles/components.css";
import GameResults from "../gameResults/game-results";
import ResetDatabase from "../reset-database/reset";
import InsertGame from "../insert-game/insert-game";
import "./style.css";
const Body = () => {
  return (
    <div className="bodycontainer">
      {/* <img className="headerImage" src={BodyPicture} /> */}
      <GameResults />
      <ResetDatabase />
      <InsertGame />
    </div>
  );
};
export default Body;
