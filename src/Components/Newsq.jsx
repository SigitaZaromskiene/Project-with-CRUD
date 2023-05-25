function NewSq({ list }) {
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
          }}
        ></div>
      ))}
    </div>
  );
}

export default NewSq;
