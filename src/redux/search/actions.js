import { SET_COUNTRY } from "./constants";
import { SET_TEAM } from "./constants";

export const setTeam = (data) => {
  return {
    type: SET_TEAM,
    payload: data,
  };
};

export const setCountry = (data) => {
  return {
    type: SET_COUNTRY,
    payload: data,
  };
};
