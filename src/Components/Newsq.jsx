import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function NewSq({ list }) {
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
            icon={faXmark}
            style={{
              fontSize: "20px",
              position: "absolute",
              right: "7px",
              top: "5px",
              cursor: "pointer",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default NewSq;
