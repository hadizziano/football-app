import axios from "axios";
import { setDataSuccess, setDataFailure, setDataStart } from "./actions";
// import {
//   addWordError,
//   addWordSuccess,
//   addWordStart,
//   addEditWords,
//   deleteWord,
// } from "./actions";

export const getData = (value) => async (dispatch, getState) => {
  dispatch(setDataStart(value));

  try {
    console.log("sending req");
    let url = "http://localhost:3100/" + value;
    const res = await axios.get(url, {
      params: {
        op1: "AC Milan",
      },
    });
    // console.log(res.data);
    dispatch(setDataSuccess(res.data));
  } catch (err) {
    dispatch(setDataFailure(err));
  }
  // axios
  //   .post("localhost:3100/italy", {
  //     op1: "AC Milan",
  //   })
  //   .then(
  //     (response) => {
  //       dispatch(setDataSuccess(response.data));
  //     },
  //     (error) => {
  //       dispatch(setDataFailure(error));
  //     }
  //   );
};

// export const insertWord = (values) => async (dispatch) => {
//   dispatch(addWordStart(values));
//   try {
//     const res = await axios.post("/api/add-word", values);

//     dispatch(addWordSuccess(res.data.newWord));
//   } catch (err) {
//     dispatch(addWordError(err));
//     console.log("ERR:  ", err);
//   }
// };
// export const editWord = (values) => async (dispatch) => {
//   try {
//     const res = await axios.put("/api/word", values);

//     dispatch(addEditWords(res.data.word));
//   } catch (err) {
//     console.log("ERR:  ", err);
//   }
// };

// export const deleteword = (values) => async (dispatch) => {
//   try {
//     const res = await axios.delete("/api/word", {
//       data: { persoarabic: values },
//     });
//     console.log("in api", res.data);
//     dispatch(deleteWord(res.data));
//   } catch (err) {
//     console.log("ERR:  ", err);
//   }
// };
