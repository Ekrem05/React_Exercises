export default function Log({ gameBoard }) {
  return (
    <ol id="log">
      {gameBoard.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.column}`}>
          {turn.player === "X" ? "Player 1" : "Player 2"} selected{" "}
          {turn.square.row} , {turn.square.column}
        </li>
      ))}
    </ol>
  );
}
