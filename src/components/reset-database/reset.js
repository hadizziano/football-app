import { resetDatabase } from "../../redux/api/api";
import React from "react";
const resetWithConfirmation = () => {
  const response = window.confirm("Are you sure you want to do that?");
  if (response) {
    {
      resetDatabase();
      alert("All games data deleted");
    }
  } else {
    alert("Regular decission :)");
  }
};
export const ResetDatabase = () => {
  return (
    <div className="resetContainer">
      <input
        type="button"
        value="RESET THE WHOLE DATABASE"
        onClick={resetWithConfirmation}
      />
    </div>
  );
};
export default ResetDatabase;
