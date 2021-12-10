import { useState, Fragment } from "react";
import Box from "./Box";

const Grid = () => {
  const [boxes, setBoxes] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const handleClick = (idx, idx2) => {
    console.log(idx, idx2);
    const currentBoxes = [...boxes];
    currentBoxes[idx][idx2] = 1;
    setBoxes(currentBoxes);
  }

  return (
    <div>
      {boxes.map((line, idx) => (
        <Fragment key={idx}>
          {line.map((el, idx2) => (
            <Box key={idx2} value={el} handleClick={() => handleClick(idx, idx2)} />
          ))}
          <br></br>
        </Fragment>
      ))}
    </div>
  );
};

export default Grid;
