import {
  SET_USER_REQUEST,
  SET_DATA_SUCCESS,
  SET_DATA_FAILURE,
} from "./constants";

const INITIAL_STATE = {
  loading: false,
  data: {},
  error: "",
};

export const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SET_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case SET_DATA_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
