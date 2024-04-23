export default function TabButton({ children, handleClick, isClicked }) {
  return (
    <li>
      <button
        className={isClicked ? "active" : undefined}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}
