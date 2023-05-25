function Button({ number, size, color, setNewSq }) {
  const createHandler = () => {
    setNewSq((n) => [...n, { color: color, size: size, number: number }]);
  };

  return (
    <button className="button" onClick={createHandler}>
      Create
    </button>
  );
}
export default Button;
