import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import { getData } from "../../redux/api/api";
import { connect, useDispatch } from "react-redux/es/exports";
import { setTeam } from "../../redux/search/actions";
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
      <select name="country" id="country">
        <option value="italia">italy</option>
        <option value="Spain">Spain</option>
        <option value="England">England</option>
        <option value="Germany">Germany </option>
      </select>
      <select name="team" id="team" onChange={sendTeamName}>
        <option value="AS Roma">AS Roma</option>
        <option value="AC Milan">AC Milan</option>
        <option value="Inter Milan">Inter Milan</option>
        <option value="Atalanta">Atalanta </option>
      </select>

      {results.map((item) => (
        <div>{item.team1 + "  "+ item.gameResult +"  "+ item.team2}</div>
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
