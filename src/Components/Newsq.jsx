function NewSq({ list }) {
  return (
    <>
      {list.map((li) => (
        <div
          className={"dice-" + li.number}
          style={{ color: li.color, fontSize: li.size + "px" }}
        ></div>
      ))}
    </>
  );
}

export default NewSq;
