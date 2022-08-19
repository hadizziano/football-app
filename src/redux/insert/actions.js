import { INSERT_GAME } from "./constants";
export const insertGame = (data) => {
  return {
    type: INSERT_GAME,
    payload: data,
  };
};
