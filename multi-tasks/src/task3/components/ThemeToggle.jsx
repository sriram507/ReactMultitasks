import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded mb-4 ${
        theme === "light" ? "bg-gray-800 text-white" : "bg-yellow-400 text-black"
      }`}
    >
      Toggle Theme: {theme}
    </button>
  );
}
