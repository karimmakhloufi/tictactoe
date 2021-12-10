import { useState, Fragment } from "react";
import Box from "./Box";

const Grid = () => {
  const [turn, setTurn] = useState(0);
  const [boxes, setBoxes] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const handleClick = (idx, idx2) => {
    if (boxes[idx][idx2] === 0) {
      const currentBoxes = [...boxes];
      currentBoxes[idx][idx2] = (turn % 2) + 1;
      setTurn(turn + 1);
      setBoxes(currentBoxes);
    } else {
      alert("non");
    }
  };

  const handleReset = () => {
    const emptyArray = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    setBoxes(emptyArray);
    setTurn(0);
  };

  return (
    <div>
      {boxes.map((line, idx) => (
        <Fragment key={idx}>
          {line.map((el, idx2) => (
            <Box
              key={idx2}
              value={el}
              handleClick={() => handleClick(idx, idx2)}
            />
          ))}
          <br></br>
        </Fragment>
      ))}
      <button onClick={handleReset}>Reset grid</button>
    </div>
  );
};

export default Grid;
