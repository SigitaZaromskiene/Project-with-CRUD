function CancelButton({ setEditModal }) {
  const cancelHandler = () => {
    setEditModal(null);
  };
  return (
    <button className="button-1" onClick={cancelHandler}>
      Cancel
    </button>
  );
}

export default CancelButton;
