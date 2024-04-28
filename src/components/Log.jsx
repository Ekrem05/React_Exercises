export default function Log({ gameBoard, playerNames }) {
  return (
    <ol id="log">
      {gameBoard.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.column}`}>
          {playerNames[turn.player]} selected {turn.square.row} ,{" "}
          {turn.square.column}
        </li>
      ))}
    </ol>
  );
}
