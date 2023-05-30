import NewSq from "./Newsq";

function Button1({
  number,
  size,
  color,
  setNewSq,
  setColor,
  setSize,
  setDiceNum,
}) {
  console.log(color);
  const createHandler = () => {
    setNewSq({
      color: color,
      size: parseInt(size),
      number: parseInt(number),
    });
    setDiceNum(1);
    setColor("ffffff");
    setSize(100);
  };

  return (
    <button className="button-1" onClick={createHandler}>
      Edit
    </button>
  );
}
export default Button1;
