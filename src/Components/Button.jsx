function Button({
  number,
  size,
  color,
  setNewSq,
  setColor,
  setSize,
  setDiceNum,
}) {
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
    <button className="button" onClick={createHandler}>
      Create
    </button>
  );
}
export default Button;
