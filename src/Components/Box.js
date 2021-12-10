const Box = ({ value, handleClick }) => {
  return (
    <button onClick={handleClick}>{value}</button>
  );
}

export default Box;
