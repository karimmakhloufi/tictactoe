import { useState } from "react";
import Box from "./Box";
import "./grid.css";

const EMPTY_STATE = " ";
const victorySets = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkVictory = (boxes) => {
  for (let i = 0; i < victorySets.length; i++) {
    const [a, b, c] = victorySets[i];
    if (boxes[a] !== EMPTY_STATE && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return boxes[a];
    }
  }
  return null;
};

const Grid = () => {
  const [turn, setTurn] = useState(0);
  const [boxes, setBoxes] = useState(Array(9).fill(EMPTY_STATE));

  const handleClick = (idx) => {
    if (boxes[idx] !== " ") {
      alert("non");
      return;
    }

    const newBoxes = [...boxes];
    newBoxes[idx] = turn % 2 ? "O" : "X";
    setTurn(turn + 1);
    setBoxes(newBoxes);

    const winner = checkVictory(newBoxes);
    if (winner) {
      alert(`${winner} wins`);
      handleReset();
    }
  };

  const handleReset = () => {
    setBoxes(Array(9).fill(EMPTY_STATE));
    setTurn(0);
  };

  return (
    <>
      <div className="grid">
        {boxes.map((box, idx) => (
          <Box key={idx} value={box} handleClick={() => handleClick(idx)} />
        ))}
      </div>
      <button onClick={handleReset}>Reset grid</button>
    </>
  );
};

export default Grid;
