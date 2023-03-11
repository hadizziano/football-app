import { resetDatabase } from "../../redux/api/api";
import React from "react";
export const ResetDatabase = () => {
  return (
    <div className="resetContainer">
      <input type="button" value="reset" onClick={resetDatabase} />
    </div>
  );
};
export default ResetDatabase;