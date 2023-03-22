import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import { getData, resetDatabase } from "../../redux/api/api";
import { connect, useDispatch } from "react-redux/es/exports";
import { setTeam } from "../../redux/search/actions";
import ResetDatabase from "../reset-database/reset";
export const GameResults = ({ getData }) => {
  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const data = useSelector((state) => state.apiReducer.data);
  const search = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();
  const sendTeamName = (e) => {
    dispatch(setTeam(e.target.value));
    getData({}, search.country, e.target.value);
  };
  // useEffect(() => {
  //   console.log("data is", search.country, search.team);
  //   getData({}, search.country, search.team);
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  //   //dff45
  // }, []);
  var results = [];
  for (let i = 0; i < data.length; i++) results[i] = data[i];
  return (
    <div className="resultcontainer">
      <div className="selectorsContainer">
        <select
          className="teamselector"
          // name="team"
          // id="team"
          // onChange={sendTeamName}
        >
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="France">France</option>
          <option value="Germany">Germany </option>
        </select>
        <select
          className="teamselector"
          name="team"
          id="team"
          onChange={sendTeamName}
        >
          <option value="AS Roma">AS Roma</option>
          <option value="AC Milan">AC Milan</option>
          <option value="Inter Milan">Inter Milan</option>
          <option value="Atalanta">Atalanta </option>
        </select>
        <select
          className="teamselector"
          // name="team"
          // id="team"
          // onChange={sendTeamName}
        >
          <option value="Champions league">Champions league</option>
          <option value="La ligua">La ligua</option>
          <option value="Calcio">Calcio</option>
          <option value="Premier">Premier </option>
        </select>
      </div>
      <table className="tabviewtable">
        <th>Games</th>
        <th>Games</th>
        <th>Games</th>
        <th>Games</th>
      </table>
      {results.map((item) => (
        <div>
          <table className="resulttable">
            <thead>
              <tr>
                <td class="tg-387r">{item.gamedate}</td>
                <td class="tg-0lax">{item.team1}</td>
                <td class="tg-0lax">{item.gameResult}</td>
                <td class="tg-0lax">{item.team2}</td>
                <td class="tg-0lax">More details</td>
              </tr>
            </thead>
          </table>
        </div>
      ))}
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
