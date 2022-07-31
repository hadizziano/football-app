import {
  SET_USER_REQUEST,
  SET_DATA_SUCCESS,
  SET_DATA_FAILURE,
  SET_DATA_START,
} from "./constants";

export const setUserRequest = () => {
  return {
    type: SET_USER_REQUEST,
  };
};

export const setDataSuccess = (data) => {
  return {
    type: SET_DATA_SUCCESS,
    payload: data,
  };
};

export const setDataFailure = (error) => {
  return {
    type: SET_DATA_FAILURE,
    payload: error,
  };
};

export const setDataStart = (data) => {
  return {
    type: SET_DATA_START,
    payload: data,
  };
};
