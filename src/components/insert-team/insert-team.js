import React, { useState } from "react";
import ResetDatabase from "../reset-database/reset";
import { connect, useDispatch } from "react-redux/es/exports";
import { insertGame } from "../../redux/insert/actions";
import { insert_game } from "../../redux/api/api";
export const InsertTeam = () => {
  const [teamname, setTeamname] = useState();
  const [country, setCountry] = useState();
  const [teambirthday, setTeambirthday] = useState();
  const [innerChampionships, setInnerChampionships] = useState();
  const [championsleague, setChampionsleague] = useState();
  const dispatch = useDispatch();
  const inserttheteam = () => {
    const team = {
      teamname: teamname,
      country: country,
      teambirthday: teambirthday,
      innerChampionships: innerChampionships,
      championsleague: championsleague,
    };
    console.log(team);
    dispatch(insertTeam(team));
    insert_team(
      teamname,
      country,
      teambirthday,
      innerChampionships,
      championsleague
    );
  };
  return (
    <div classname="resultcontainer">
      <div className="selectorsContainer">
        <input
          type="text"
          onChange={(e) => setTeamname(e.target.value)}
          id="teamname"
        />
        <br />
        <br />
        teamname
        <select
          className="teamselector"
          name="country"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="England">England</option>
          <option value="Juventus">France </option>
        </select>
        <br />
        <br />
        <select
          name="teambirthday"
          id="teambirthday"
          onChange={(e) => setTeambirthday(e.target.value)}
        >
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009 </option>
        </select>
        <div>
          team birthday:
          <br />
          <br />
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
          <br />
          scorrers:
          <input
            type="text"
            id="scorrers"
            onChange={(e) => setScorrers(e.target.value)}
          />
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
