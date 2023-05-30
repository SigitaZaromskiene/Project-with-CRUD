import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "./DeleteModal";

function NewSq({ list, setDeleteModal, deleteModal }) {
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
            height: "160px",
            width: "120px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default NewSq;
