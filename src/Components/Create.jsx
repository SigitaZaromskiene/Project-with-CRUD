import { useState } from "react";

const numbers = [
  { name: "One", num: 1 },
  { name: "Two", num: 2 },
  { name: "Three", num: 3 },
  { name: "Four", num: 4 },
  { name: "Five", num: 5 },
  { name: "Six", num: 6 },
];

function Create() {
  const [diceNum, setDiceNum] = useState(1);
  const [size, setSize] = useState(100);

  return (
    <div className="create-dice">
      <div className="dice-bin">
        <div className="dice-frame">
          <div
            className={"dice-" + diceNum}
            style={{ fontSize: size + "px" }}
          ></div>
        </div>
        <div className="range">
          <label>{size}</label>
          <input
            type="range"
            value={size}
            min="100"
            max="180"
            onChange={(e) => setSize(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="number-bin">
        {numbers.map((num, i) => (
          <div
            className="numbers"
            key={i}
            checked={diceNum === num.num}
            onClick={() => setDiceNum(num.num)}
          >
            {num.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Create;
