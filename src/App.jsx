import "./App.scss";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import NewSq from "./Components/Newsq";
import { create, destroy, read } from "./Components/localStorage";

const KEY = "newSq";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [newSq, setNewSq] = useState(null);
  const [list, setList] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editModal, setEditModal] = useState(null);

  const [diceNum, setDiceNum] = useState(1);
  const [size, setSize] = useState(100);
  const [color, setColor] = useState("#ffffff");

  //  parsiusti nauja lista

  useEffect(() => {
    setList(read(KEY));
  }, [lastUpdate]);

  // sukurti nauja lista

  useEffect(() => {
    if (deleteData === null) {
      return;
    }
    destroy(KEY, deleteData.id);
    setLastUpdate(Date.now());
  }, [deleteData]);

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
          <Create
            newSq={newSq}
            setNewSq={setNewSq}
            diceNum={diceNum}
            list={list}
            setSize={setSize}
            setColor={setColor}
            setDiceNum={setDiceNum}
            color={color}
            size={size}
          />
        </div>
        <div className="right">
          <NewSq
            list={list}
            setDeleteModal={setDeleteModal}
            deleteModal={deleteModal}
            deleteData={deleteData}
            setDeleteData={setDeleteData}
            setEditModal={setEditModal}
            editModal={editModal}
            diceNum={diceNum}
            setSize={setSize}
            setColor={setColor}
            setDiceNum={setDiceNum}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
