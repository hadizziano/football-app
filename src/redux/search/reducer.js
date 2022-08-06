// const { italy } = require("../../../api/db");
import { SET_COUNTRY } from "./constants";
import { SET_TEAM } from "./constants";

const INITIAL_STATE = {
  country: "italy",
  team: "AS Roma",
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_TEAM:
      return { ...state, team: action.payload };
    case SET_COUNTRY:
      return { ...state, country: action.payload };
  }
  dafault: return state;
};
export default reducer;
