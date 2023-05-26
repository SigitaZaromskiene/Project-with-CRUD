function NewSq({ list }) {
  if (list === null) {
    return <div>LOading....</div>;
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
            height: "150px",
            width: "120px",
            textAlign: "center",
          }}
        ></div>
      ))}
    </div>
  );
}

export default NewSq;
