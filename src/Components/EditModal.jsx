import { useState } from "react";
import CancelButton from "./CancelButton";

const numbers = [
  { name: "One", num: 1 },
  { name: "Two", num: 2 },
  { name: "Three", num: 3 },
  { name: "Four", num: 4 },
  { name: "Five", num: 5 },
  { name: "Six", num: 6 },
];

function EditModal({ setNewSq, setEditModal, editModal, setEditData }) {
  const [diceNum, setDiceNum] = useState(editModal.number);
  const [size, setSize] = useState(editModal.size);
  const [color, setColor] = useState(editModal.color);

  const editHandler = () => {
    setEditData({
      color: color,
      size: parseInt(size),
      number: parseInt(diceNum),
      id: editModal.id,
    });
    setEditModal(null);
  };

  return (
    <div>
      <div className="edit-dice">
        <div className="dice-bin-2">
          <div className="dice-frame-2">
            <div
              className={"dice-" + diceNum}
              style={{ fontSize: size + "px", color }}
            ></div>
          </div>
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
              <input
                type="range"
                value={size}
                min="80"
                max="150"
                onChange={(e) => setSize(e.target.value)}
              ></input>
              <label>{size}</label>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                className="color-range-2"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <button className="button-1" onClick={editHandler}>
                Edit
              </button>
              <CancelButton
                color={color}
                size={size}
                number={diceNum}
                setNewSq={setNewSq}
                setSize={setSize}
                setDiceNum={setDiceNum}
                setColor={setColor}
                setEditModal={setEditModal}
              />
            </div>
          </div>
        </div>
        <div className="numbers-bin-2">
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
    </div>
  );
}

export default EditModal;
