import apiReducer from "./api";
import searchReducer from "./search";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  apiReducer,
  searchReducer,
});
export default rootReducer;
