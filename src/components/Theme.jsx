import { useState, useEffect } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const ToggleTheme = () => {
    setTheme((prev) => {
      prev = prev === "dark" ? "" : "dark";
      return prev;
    });
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme === "dark" ? "dark" : "");
  }, [theme]);
  return (
    <button
      onClick={ToggleTheme}
      className="text-2xl font-bold text-bg bg-text px-2 py-1 cursor-pointer rounded relative overflow-hidden"
    >
      <i
        className="ri-sun-line block transition-all duration-400"
        style={
          theme === "dark"
            ? { transform: "translateY(0px)" }
            : { transform: "translateY(50px)" }
        }
      ></i>
      <i
        className="ri-moon-line absolute left-[50%] translate-x-[-50%] transition-all duration-400"
        style={theme === "dark" ? { bottom: "50px" } : { bottom: "3px" }}
      ></i>
    </button>
  );
};

export default Theme;
