import "./App.scss";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import NewSq from "./Components/Newsq";
import { create, read } from "./Components/localStorage";

const KEY = "newSq";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [newSq, setNewSq] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    setList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (newSq === null) {
      return;
    }
    create(KEY, newSq);
    setLastUpdate(Date.now());
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
