import React from "react";
import "./listitems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

export default function ListItems(props) {
  const items = props.items;
  const listitems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          ></input>
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">{listitems}</FlipMove>
    </div>
  );
}
