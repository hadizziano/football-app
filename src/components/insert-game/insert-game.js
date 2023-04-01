import React, { useState } from "react";
import { useSelector } from "react-redux";
import ResetDatabase from "../reset-database/reset";
import { connect, useDispatch } from "react-redux/es/exports";
import { insertGame } from "../../redux/insert/actions";
import { insert_game } from "../../redux/api/api";
import Header from "../header2/header";
import { setTeam, setCountry } from "../../redux/search/actions";
import { getData, resetDatabase } from "../../redux/api/api";

export const InsertGame = ({ getData }) => {
  const [selectedCountry, setSelectedCountry] = useState("Italy");
  const [team1, setTeam1] = useState("AC Milan");
  const [team2, setTeam2] = useState("Inter Milan");
  const [goals1, setGoals1] = useState(1);
  const [goals2, setGoals2] = useState(1);
  const [scorrers, setScorrers] = useState();
  const [gamedate, setGamedate] = useState();
  const dispatch = useDispatch();
  const sendTeamName = (e) => {
    dispatch(setTeam("AC Milan"));
    dispatch(setCountry(selectedCountry));
    getData({}, selectedCountry, "AC Milan");
  };
  const insertthegame = () => {
    const game = {
      gamedate: gamedate,
      team1: team1,
      team2: team2,
      gameResult: goals1 + " - " + goals2,
      scorrers: scorrers,
    };
    console.log(game);
    dispatch(insertGame(game));
    insert_game(gamedate, team1, team2, goals1 + " - " + goals2, scorrers);
  };
  const data = useSelector((state) => state.apiReducer.data);

  return (
    <div classname="resultcontainer">
      <Header />
      <div className="inputContainer">
        <table className="inputtable">
          <tr>
            <td>
              country: <br />
              <select
                className="inputwidth"
                name="country"
                id="country"
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="England">England</option>
                <option value="France">France </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              Team1 &nbsp;
              <select
                className="teamselector"
                name="team1"
                id="team1"
                onClick={sendTeamName}
                onChange={(e) => setTeam1(e.target.value)}
              >
                <option value="Select">Select team</option>
                {data.team
                  ? data.team.map((item) => (
                      <option value={item.teamname}>{item.teamname}</option>
                    ))
                  : null}
              </select>
            </td>
            <td>
              Score: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                name="score1"
                id="score1"
                onChange={(e) => setGoals1(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              Team2 &nbsp;
              <select
                className="teamselector"
                name="team1"
                id="team1"
                onClick={sendTeamName}
                onChange={(e) => setTeam2(e.target.value)}
              >
                <option value="Select">Select team</option>
                {data.team
                  ? data.team.map((item) => (
                      <option value={item.teamname}>{item.teamname}</option>
                    ))
                  : null}
              </select>
            </td>
            <td>
              Score: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                name="score1"
                id="score1"
                onChange={(e) => setGoals2(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              Game date: &nbsp;
              <input
                className="datepicker"
                type="date"
                onChange={(e) => setGamedate(e.target.value)}
                id="gamedate"
              />
            </td>
            <td>
              {" "}
              Scorrers: &nbsp;
              <input
                type="text"
                id="scorrers"
                onChange={(e) => setScorrers(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <br />

        <br />
        <br />
        <input
          style={{ width: "20%", right: "0", position: "absolute" }}
          type="button"
          value="Insert"
          onClick={insertthegame}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: ({}, team, country) => dispatch(getData({}, team, country)),
    insertGame: (game) => dispatch(insertGame(game)),
  };
};

const Connectedapp = connect(null, mapDispatchToProps)(InsertGame);
const ComponentWrapper = () => {
  return <Connectedapp />;
};

export default ComponentWrapper;
