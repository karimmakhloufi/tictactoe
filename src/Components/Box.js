import "./grid.css"

const Box = ({ value, handleClick }) => {
  return (
    <button className="box" onClick={handleClick}>{value}</button>
  );
}

export default Box;
