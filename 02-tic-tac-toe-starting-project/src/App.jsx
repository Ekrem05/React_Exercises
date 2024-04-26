import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function deriveActivePlayer(gameBoard) {
  let currentPlayer = "X";
  currentPlayer =
    gameBoard.length > 0 && gameBoard[0].player === "X" ? "O" : "X";
  return currentPlayer;
}

function App() {
  const [gameBoard, setGameTurns] = useState([]);

  let activePlayer = deriveActivePlayer(gameBoard);

  function handlePlayerTurns(rowIndex, colIndex) {
    setGameTurns((currentGame) => {
      let currentPlayer = deriveActivePlayer(currentGame);

      const updatedGameBoard = [
        {
          square: { row: rowIndex, column: colIndex },
          player: currentPlayer,
        },
        ...currentGame,
      ];
      return updatedGameBoard;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onPlay={handlePlayerTurns}
          activePlayerSymbol={activePlayer}
          turns={gameBoard}
        />
      </div>
      <Log gameBoard={gameBoard} />
    </main>
  );
}

export default App;
