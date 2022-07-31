import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import thunk from 'redux-thunk';
// import getWord from './api/reducer';
// import addWord from './api/addwordreducer/add-word.reducer';
// import notFoundReducer from './api/notfundreducer/not-found.reducer';
// import editWordReducer from './api/editreducer/edit-word.reducer';
// import deleteReducer from './api/deletreducer/delet-word.reducer';
import reducer from "./reducer";
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
