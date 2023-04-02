import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import { getData, resetDatabase } from "../../redux/api/api";
import { connect, useDispatch } from "react-redux/es/exports";
import { setTeam, setCountry } from "../../redux/search/actions";
import ResetDatabase from "../reset-database/reset";
import { Link } from "react-router-dom";
export const GameResults = ({ getData }) => {
  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedCountry, setSelectedCountry] = useState("Italy");
  const data = useSelector((state) => state.apiReducer.data);

  // const teams = useSelector((state) => state.apiReducer.data.team);
  // console.log("teams are", teams);
  const search = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();
  const sendTeamName = (e) => {
    dispatch(setTeam(e.target.value));
    dispatch(setCountry(selectedCountry));
    getData({}, selectedCountry, e.target.value);
  };

  // useEffect(() => {
  //   console.log("data is", search.country, search.team);
  //   getData({}, search.country, search.team);
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  //   //dff45
  // }, []);
  return (
    <div className="resultcontainer">
      <div className="selectorsContainer">
        <select
          className="resultteamselector"
          // name="team"
          // id="team"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="France">France</option>
          <option value="Germany">Germany </option>
          <option value="England">England </option>
        </select>
        <select
          className="resultteamselector"
          name="team"
          id="team"
          onClick={sendTeamName}
        >
          {/* <option value="AS Roma">AS Roma</option>
          <option value="AC Milan">AC Milan</option>
          <option value="Inter Milan">Inter Milan</option>
          <option value="Atalanta">Atalanta </option> */}
          <option value="Select">Select team</option>
          {data.team
            ? data.team.map((item) => (
                <option value={item.teamname}>{item.teamname}</option>
              ))
            : null}
        </select>
        <select
          className="resultteamselector"
          // name="team"
          // id="team"
          // onChange={sendTeamName}
        >
          <option value="Champions league">Champions league</option>
          <option value="La ligua">La ligua</option>
          <option value="Calcio">Calcio</option>
          <option value="Premier">Premier </option>
        </select>
        <Link to="/insertgame">+ Add game results to database</Link>
        <Link to="/insertteam">+ Add new teams to database</Link>
      </div>
      <table className="tabviewtable">
        <th>Games</th>
        <th>Players</th>
        <th>Coaches</th>
        <th>Gymes</th>
      </table>
      {data.games
        ? data.games.map((item) => (
            <div>
              <table className="resulttable">
                <thead>
                  <tr>
                    <td>{item.gamedate}</td>
                    <td>{item.team1}</td>
                    <td>{item.gameResult}</td>
                    <td>{item.team2}</td>
                    <td>{item.scorrers}</td>
                    <td>More details</td>
                  </tr>
                </thead>
              </table>
            </div>
          ))
        : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: ({}, team, country) => dispatch(getData({}, team, country)),
  };
};

const Connectedapp = connect(null, mapDispatchToProps)(GameResults);
const ComponentWrapper = () => {
  return <Connectedapp />;
};

export default ComponentWrapper;
