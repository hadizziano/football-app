import { INSERT_GAME } from "./constants";
import { INSERT_TEAM } from "./constants";
export const insertGame = (data) => {
  return {
    type: INSERT_GAME,
    payload: data,
  };
};

export const insertTeam = (data) => {
  return {
    type: INSERT_TEAM,
    payload: data,
  };
};
