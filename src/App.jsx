import "./App.scss";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import NewSq from "./Components/Newsq";
import { v4 as uuidv4 } from "uuid";
import { create, read } from "./Components/localStorage";

const KEY = "newSq";

function App() {
  const [newSq, setNewSq] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(read(KEY));
  }, []);

  useEffect(() => {
    if (newSq === null) {
      return;
    }
    create(KEY, newSq);
  }, [newSq]);

  return (
    <div className="container">
      <div className="content">
        <div className="left">
          <Create newSq={newSq} setNewSq={setNewSq} />
        </div>
        <div className="right">
          <NewSq list={list} />
        </div>
      </div>
    </div>
  );
}

export default App;
