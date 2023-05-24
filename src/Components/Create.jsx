import { uuid } from "uuidv4";

const numbers = [
  { name: "One", num: 1 },
  { name: "Two", num: 2 },
  { name: "Three", num: 3 },
  { name: "Four", num: 4 },
  { name: "Five", num: 5 },
  { name: "Six", num: 6 },
];

function Create() {
  return (
    <div className="create-dice">
      <div className="dice-bin"></div>
      <div className="number-bin">
        {numbers.map((num) => (
          <li key={uuid()}>{num.name}</li>
        ))}
      </div>
    </div>
  );
}

export default Create;
