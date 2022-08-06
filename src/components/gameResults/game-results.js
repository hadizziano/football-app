import { useSelector } from "react-redux";
import "./style.css";
export const GameResults = () => {
  const data = useSelector((state) => state.data);
  var results = [];
  for (let i = 0; data[i]; i++) results[i] = data[i];
  return (
    <div className="resultcontainer">
      <select name="country" id="country">
        <option value="italia">italy</option>
        <option value="php">Spain</option>
        <option value="php">England</option>
        <option value="Germany">Germany </option>
      </select>
      <select name="team" id="team">
        <option value="Roma">AS Roma</option>
        <option value="php">Spain</option>
        <option value="php">England</option>
        <option value="Germany">Germany </option>
      </select>

      {results.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default GameResults;
