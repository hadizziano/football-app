import { useSelector } from "react-redux";
import "./style.css";
export const GameResults = () => {
  const data = useSelector((state) => state.data);
  var results = [];
  for (let i = 0; data[i]; i++) results[i] = data[i];
  return (
    <div className="resultcontainer">
      {results.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default GameResults;
