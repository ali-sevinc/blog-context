import { useDarkModeContext } from "../../store/DarkModeContext";

export default function ModeButton() {
  const { isFakeDark, handleToggle } = useDarkModeContext();
  return (
    <button onClick={handleToggle} className="btn-fake-dark-mode">
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}
