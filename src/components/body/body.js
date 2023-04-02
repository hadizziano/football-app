import React from "react";
import BodyPicture from "../../images/header/black-template.jpg";
import "../../styles/components.css";
import GameResults from "../gameResults/game-results";
import ResetDatabase from "../reset-database/reset";
import InsertGame from "../insert-game/insert-game";
import Addicon from "../../images/icons/add.png";
import "./style.css";
import Menu from "../menu/menu";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="bodycontainer">
      {/* <img className="headerImage" src={BodyPicture} /> */}
      <div style={{ display: "flex" }}>
        <GameResults />
        <ResetDatabase />
        {/* <Link to="/insertgame">
          <div className="resultcontainer">
            {" "}
            <img className="addicon" alt="addicon" src={Addicon} />
          </div>
        </Link> */}
      </div>
    </div>
  );
};
export default Body;
