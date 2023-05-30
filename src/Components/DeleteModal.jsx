import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function DeleteModal({ li, deleteModal, setDeleteModal, setDeleteData }) {
  const deleteSqHandler = () => {
    setDeleteData(li);
  };
  return (
    <div className="deleteModal">
      Are you sure?
      <FontAwesomeIcon
        onClick={deleteSqHandler}
        icon={faCheck}
        style={{
          fontSize: "20px",
          position: "absolute",
          right: "50px",
          top: "25px",
          cursor: "pointer",
        }}
      />
      <FontAwesomeIcon
        onClick={() => setDeleteModal(null)}
        icon={faXmark}
        style={{
          fontSize: "20px",
          position: "absolute",
          right: "25px",
          top: "25px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default DeleteModal;
