function ListGroup() {
  const items = ["X", "Y", "D"];

  return (
    <>
      <h1>LIST</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
