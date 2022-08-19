import apiReducer from "./api";
import searchReducer from "./search";
import insertReducer from "./insert";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  apiReducer,
  searchReducer,
  insertReducer,
});
export default rootReducer;
