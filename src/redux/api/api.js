import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import { applyMiddleware } from "redux";
import { setDataSuccess, setDataFailure, setDataStart } from "./actions";

export const getData = (value, country, team) => async (dispatch, getState) => {
  console.log(country, team);
  dispatch(setDataStart(value));
  try {
    let url = "http://localhost:3100/games";
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

export const resetDatabase = async () => {
  console.log("aaaaaaa");
  try {
    const reset = await axios.post("http://localhost:3100/games/reset");
    // console.log(reset);
  } catch (err) {
    console.log(err);
  }
};

export const insert_game = async (
  gamedate,
  teams1,
  teams2,
  gameResult,
  scorrers
) => {
  console.log(teams1);
  try {
    let url = "http://localhost:3100/games/insertgame";
    const res = await axios.post(url, {
      params: {
        gamedate: gamedate,
        team1: teams1,
        team2: teams2,
        gameResult: gameResult,
        scorrers: scorrers,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
