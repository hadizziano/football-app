import React, { useState } from "react";
import { connect, useDispatch } from "react-redux/es/exports";
import { insertTeam } from "../../redux/insert/actions";
import { insert_team } from "../../redux/api/api";
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
        <br />
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
            name="innerchampionships"
            id="innerchampionships"
            onChange={(e) => setInnerChampionships(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4 </option>
          </select>
          <select
            name="championsleague"
            id="championsleague"
            onChange={(e) => setChampionsleague(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4 </option>
          </select>
          <br />
          championsleague
        </div>
        <br />
        <input type="button" value="Insert" onClick={inserttheteam} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertTeam: (team) => dispatch(insertTeam(team)),
  };
};

const Connectedapp = connect(null, mapDispatchToProps)(InsertTeam);
const ComponentWrapper = () => {
  return <Connectedapp />;
};

export default ComponentWrapper;
