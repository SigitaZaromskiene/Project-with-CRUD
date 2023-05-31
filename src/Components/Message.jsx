function Message({ message }) {
  return (
    <div className="messages">
      {message.map((m) => (
        <div key={m.id} className="message">
          {m.text}
        </div>
      ))}
    </div>
  );
}

export default Message;
