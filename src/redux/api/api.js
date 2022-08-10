import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import { applyMiddleware } from "redux";
import { setDataSuccess, setDataFailure, setDataStart } from "./actions";

export const getData = (value, country, team) => async (dispatch, getState) => {
  // const country = useSelector((state) => state.searchReducer.country);
  // const team = useSelector((state) => state.searchReducer.team);
  console.log(country, team);
  dispatch(setDataStart(value));


  try {
    console.log("sending req");
    let url = "http://localhost:3100/games" ;
    const res = await axios.get(url, {
      params: {
        team1: team,
      },
    });
      dispatch(setDataSuccess(res.data));
  } catch (err) {
    dispatch(setDataFailure(err));
  }
};


