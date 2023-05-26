import { useState } from "react";
import Button from "./Button";

const numbers = [
  { name: "One", num: 1 },
  { name: "Two", num: 2 },
  { name: "Three", num: 3 },
  { name: "Four", num: 4 },
  { name: "Five", num: 5 },
  { name: "Six", num: 6 },
];

function Create({ setNewSq }) {
  const [diceNum, setDiceNum] = useState(1);
  const [size, setSize] = useState(100);
  const [color, setColor] = useState("#ffffff");

  return (
    <>
      <div className="create-dice">
        <div className="dice-bin">
          <div className="dice-frame">
            <div
              className={"dice-" + diceNum}
              style={{ fontSize: size + "px", color }}
            ></div>
          </div>
          <div className="range">
            <div style={{ display: "flex", gap: "20px" }}>
              <input
                type="range"
                value={size}
                min="80"
                max="150"
                onChange={(e) => setSize(e.target.value)}
              ></input>
              <label>{size}</label>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <input
                className="color-range"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              ></input>
            </div>
            <Button
              color={color}
              size={size}
              number={diceNum}
              setNewSq={setNewSq}
              setSize={setSize}
              setDiceNum={setDiceNum}
              setColor={setColor}
            />
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
    </>
  );
}

export default Create;
