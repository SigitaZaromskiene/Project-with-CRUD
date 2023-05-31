import "./App.scss";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import NewSq from "./Components/Newsq";
import { create, destroy, read, edit } from "./Components/localStorage";
import Message from "./Components/Message";
import { v4 as uuidv4 } from "uuid";

const KEY = "newSq";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [newSq, setNewSq] = useState(null);
  const [list, setList] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [editData, setEditData] = useState(null);
  const [message, setMessage] = useState(null);
  const [diceNum, setDiceNum] = useState(1);
  const [size, setSize] = useState(100);
  const [color, setColor] = useState("#ffffff");

  //  parsiusti nauja lista

  useEffect(() => {
    setList(read(KEY));
  }, [lastUpdate]);

  // sukurti nauja lista

  useEffect(() => {
    if (newSq === null) {
      return;
    }
    create(KEY, newSq);
    msg("New dice created");
    setLastUpdate(Date.now());
  }, [newSq]);

  useEffect(() => {
    if (deleteData === null) {
      return;
    }
    destroy(KEY, deleteData.id);
    msg("Dice is deleted");
    setLastUpdate(Date.now());
  }, [deleteData]);

  useEffect(() => {
    if (editData === null) {
      return;
    }
    edit(KEY, editData, editData.id);
    msg("Dice is edited");
    setLastUpdate(Date.now());
  }, [editData]);

  const msg = (text) => {
    setMessage((m) => [...(m ?? []), { text, id: uuidv4 }]);
    setTimeout(() => {
      setMessage((m) => m.filter((m) => uuidv4 !== m.id));
    }, 3000);
  };

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
            setEditData={setEditData}
          />
        </div>
      </div>
      {message ? <Message setMessage={setMessage} message={message} /> : null}
    </div>
  );
}

export default App;
