import { useState } from "react";
import "./ListGroup.css";

function ListGroup() {
  const items = ["X", "Y", "D"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handelClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>LIST</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => handelClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
