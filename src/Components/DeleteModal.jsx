import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function DeleteModal() {
  return (
    <div className="deleteModal">
      Are you sure?
      <FontAwesomeIcon
        icon={faCheck}
        style={{
          fontSize: "20px",
          position: "absolute",
          right: "35px",
          top: "25px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default DeleteModal;
