import { INSERT_GAME } from "./constants";

const INITIAL_STATE = {
  game: {},
  team: {},
  country: {},
};

export const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case INSERT_GAME:
      return { ...state, game: action.payload };
  }
  dafault: return state;
};

export default reducer;
