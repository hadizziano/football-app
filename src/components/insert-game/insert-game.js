import React, { useState } from "react";
import ResetDatabase from "../reset-database/reset";
import { connect, useDispatch } from "react-redux/es/exports";
import { insertGame } from "../../redux/insert/actions";
import { insert_game } from "../../redux/api/api";
export const InsertGame = () => {
  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();
  const [goals1, setGoals1] = useState();
  const [goals2, setGoals2] = useState();
  const dispatch = useDispatch();
  const insertthegame = () => {
    const game = {
      team1: team1,
      team2: team2,
      gameResult: goals1 + " - " + goals2,
    };
    dispatch(insertGame(game));
    insert_game(team1, team2, goals1 + " - " + goals2);
  };
  return (
    <div classname="resultcontainer">
      <div className="selectorsContainer">
        team1
        <select
          className="teamselector"
          name="team1"
          id="team1"
          onChange={(e) => setTeam1(e.target.value)}
        >
          <option value="AC Milan">AC Milan</option>
          <option value="Inter Milan">Inter Milan</option>
          <option value="AS Roma">AS Roma</option>
          <option value="Juventus">Juventus </option>
        </select>
        <select
          name="score1"
          id="score1"
          onChange={(e) => setGoals1(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4 </option>
        </select>
        <div>
          team2
          <select
            className="teamselector"
            name="team1"
            id="team1"
            onChange={(e) => setTeam2(e.target.value)}
          >
            <option value="AC Milan">AC Milan</option>
            <option value="Inter Milan">Inter Milan</option>
            <option value="AS Roma">AS Roma</option>
            <option value="Juventus">Juventus </option>
          </select>
          <select
            name="score1"
            id="score1"
            onChange={(e) => setGoals2(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4 </option>
          </select>
        </div>{" "}
        <br />
        <input type="button" value="Insert" onClick={insertthegame} />
        <ResetDatabase />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertGame: (game) => dispatch(insertGame(game)),
  };
};

const Connectedapp = connect(null, mapDispatchToProps)(InsertGame);
const ComponentWrapper = () => {
  return <Connectedapp />;
};

export default ComponentWrapper;
