import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./rootreducer";
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
