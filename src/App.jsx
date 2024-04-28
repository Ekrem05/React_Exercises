import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combinations";
import GameOver from "./components/GameOver";

const initialPlayerNames = {
  X: "Player 1",
  O: "Player 2",
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  for (const turn of gameTurns) {
    let { square, player } = turn;
    let { row, column } = square;
    gameBoard[row][column] = player;
  }
  return gameBoard;
}

function deriveActivePlayer(gameBoard) {
  let currentPlayer = "X";
  currentPlayer =
    gameBoard.length > 0 && gameBoard[0].player === "X" ? "O" : "X";
  return currentPlayer;
}
function deriveWinner(gameBoard) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstBoxSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondBoxSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdBoxSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstBoxSymbol) {
      if (
        firstBoxSymbol === secondBoxSymbol &&
        firstBoxSymbol === thirdBoxSymbol
      ) {
        winner = firstBoxSymbol;
      }
    }
  }
  return winner;
}

function App() {
  const [playerNames, setPlayerNames] = useState(initialPlayerNames);
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = deriveGameBoard(gameTurns);
  let winner = deriveWinner(gameBoard);
  let draw = gameTurns.length === 9 && !winner;

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
  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((currentNames) => {
      return {
        ...currentNames,
        [symbol]: newName,
      };
    });
  }
  function restartGame() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={initialPlayerNames.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            name={initialPlayerNames.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={playerNames[winner]} onRestart={restartGame} />
        )}
        <GameBoard onPlay={handlePlayerTurns} turns={gameBoard} />
      </div>
      <Log gameBoard={gameTurns} playerNames={playerNames} />
    </main>
  );
}

export default App;
