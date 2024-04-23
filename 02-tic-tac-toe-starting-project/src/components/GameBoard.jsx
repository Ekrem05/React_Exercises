import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClick(rowIndex, colIndex, symbol) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
      updatedGameBoard[rowIndex][colIndex] = symbol;
      return updatedGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex, "X")}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
