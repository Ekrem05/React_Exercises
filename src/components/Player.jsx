import { useState } from "react";
import GameBoard from "./GameBoard";
export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameValue, setNameValue] = useState(name);

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, nameValue);
    }
  }

  const getName = (
    <input
      type="text"
      onChange={(e) => setNameValue(e.target.value)}
      required
      value={nameValue}
    ></input>
  );

  const showName = <span className="player-name">{nameValue}</span>;
  let buttonText = isEditing ? "Save" : "Edit";

  return (
    <>
      <li className={isActive ? "active" : ""}>
        <span className="player">
          {isEditing ? getName : showName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{buttonText}</button>
      </li>
    </>
  );
}
