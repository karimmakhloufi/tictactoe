import { useState } from "react";

const Grid = () => {
  const [boxes, setBoxes] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  return (
    <div>
      {boxes.map((line) => (
        <>
          {line.map((el) => (
            <button>{el}</button>
          ))}
          <br></br>
        </>
      ))}
    </div>
  );
};

export default Grid;
