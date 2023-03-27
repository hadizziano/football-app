import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import { applyMiddleware } from "redux";
import { setDataSuccess, setDataFailure, setDataStart } from "./actions";

export const getData = (value, country, team) => async (dispatch, getState) => {
  console.log("////////////////////", country, team);
  dispatch(setDataStart(value));
  try {
    let gamesurl = "http://localhost:3100/games";
    let teamurl = "http://localhost:3100/team";
    const gamesres = await axios.get(gamesurl, {
      params: {
        country: country,
        team1: team,
      },
    });

    const teamres = await axios.get(teamurl, {
      params: {
        country: country,
      },
    });
    dispatch(setDataSuccess(gamesres.data));
  } catch (err) {
    dispatch(setDataFailure(err));
  }
};

// export const getTeams = (country) => async (dispatch, getState) => {
//   console.log(country);
//   dispatch(setDataStart(value));
//   try {
//     let url = "http://localhost:3100/team";
//     const res = await axios.get(url, {
//       params: {
//         country: country,
//       },
//     });
//     dispatch(setDataSuccess(res.data));
//   } catch (err) {
//     dispatch(setDataFailure(err));
//   }
// };

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

export const insert_team = async (
  teamname,
  country,
  teambirthday,
  innerChampionships,
  championsleague
) => {
  try {
    let url = "http://localhost:3100/team/insertteam";
    const res = await axios.post(url, {
      params: {
        teamname: teamname,
        country: country,
        teambirthday: teambirthday,
        innerChampionships: innerChampionships,
        championsleague: championsleague,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
