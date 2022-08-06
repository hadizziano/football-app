import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import { setDataSuccess, setDataFailure, setDataStart } from "./actions";

export const getData = (value, country, team) => async (dispatch, getState) => {
  // const country = useSelector((state) => state.searchReducer.country);
  // const team = useSelector((state) => state.searchReducer.team);
  console.log(country, team);
  dispatch(setDataStart(value));

  try {
    console.log("sending req");
    let url = "http://localhost:3100/" + country;
    const res = await axios.get(url, {
      params: {
        op1: team,
      },
    });
    // console.log(res.data);
    dispatch(setDataSuccess(res.data));
  } catch (err) {
    dispatch(setDataFailure(err));
  }
};

const mapStateToProps = (state) => {
  const { country, team } = state.data;
  return { country, team };
};
