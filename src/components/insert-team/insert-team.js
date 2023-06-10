import React, { useState } from "react";
import { connect, useDispatch } from "react-redux/es/exports";
import { insertTeam } from "../../redux/insert/actions";
import { insert_team } from "../../redux/api/api";
import Header from "../header2/header";
import ChampionImage from "../../images/gallery/technique1.png";
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
      <img className="championimage" src={ChampionImage} />
      <Header />
      <div className="inputContainer">
        Team name: <br />
        <input
          className="inputwidth"
          type="text"
          onChange={(e) => setTeamname(e.target.value)}
          id="teamname"
        />
        <br />
        <br />
        Country: <br />
        <select
          className="inputwidth"
          name="country"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="England">England</option>
          <option value="France">France </option>
        </select>
        <br />
        <br /> team birthday: <br />
        <input
          className="inputwidth"
          type="number"
          min="1980"
          max="2023"
          name="teambirthday"
          id="teambirthday"
          onChange={(e) => setTeambirthday(e.target.value)}
        />
        <div>
          <br />
          Country league cup wons: <br />
          <input
            className="inputwidth"
            type="number"
            name="innerchampionships"
            id="innerchampionships"
            onChange={(e) => setInnerChampionships(e.target.value)}
          />
          <br />
          <br />
          Uefa league champions: <br />
          <input
            className="inputwidth"
            type="number"
            name="championsleague"
            id="championsleague"
            onChange={(e) => setChampionsleague(e.target.value)}
          />
          <br />
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
