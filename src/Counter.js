import { useEffect, useState } from "react";
import { Button } from "./components/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    if (count === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [count]);

  return (
    <div className="App">
      <Button
        onClick={() => setCount(count - 1)}
        disable={disable}
        style={{ cursor: `${!disable ? "pointer" : "no-drop"}` }}
        title={"Azalt"}
        className={"btn"}
      />
      <span className="count">{count}</span>
      <Button
        onClick={() => setCount(count + 1)}
        title={"Arttir"}
        className={"btn"}
      />
    </div>
  );
};
