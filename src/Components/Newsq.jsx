import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

function NewSq({
  list,
  setDeleteModal,
  deleteModal,
  setDeleteData,
  setEditModal,
  editModal,
  setColor,
  setSize,
  setDiceNum,
  diceNum,
}) {
  if (list === null) {
    return <div>Loading....</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {list.map((li) => (
        <div
          className={"dice-" + li.number}
          style={{
            color: li.color,
            fontSize: li.size + "px",
            border: "1px solid white",
            height: "240px",
            width: "240px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            onClick={() => setEditModal(li)}
            icon={faPenToSquare}
            style={{
              fontSize: "20px",
              position: "absolute",
              left: "7px",
              top: "5px",
              cursor: "pointer",
            }}
          />
          <FontAwesomeIcon
            onClick={() => setDeleteModal(li)}
            icon={faXmark}
            style={{
              fontSize: "20px",
              position: "absolute",
              right: "7px",
              top: "5px",
              cursor: "pointer",
            }}
          />

          {deleteModal && deleteModal.id === li.id ? (
            <DeleteModal
              li={li}
              deleteModal={deleteModal}
              setDeleteModal={setDeleteModal}
              setDeleteData={setDeleteData}
            />
          ) : null}
          {editModal && editModal.id === li.id ? (
            <EditModal
              li={li}
              deleteModal={deleteModal}
              setDeleteModal={setDeleteModal}
              setDeleteData={setDeleteData}
              setSize={setSize}
              setColor={setColor}
              setDiceNum={setDiceNum}
              diceNum={diceNum}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default NewSq;
