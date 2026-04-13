"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as
        | "light"
        | "dark"
        | null) || "light";
    setTheme(current);
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      className={`premium-theme-toggle ${isDark ? "is-dark" : ""}`}
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="premium-track">
        {/* The sliding circle */}
        <span className="premium-thumb">
          <span className="thumb-icon-wrapper">
            {isDark ? <Moon size={14} strokeWidth={2.5} /> : <Sun size={14} strokeWidth={2.5} />}
          </span>
        </span>
        
        {/* Background icons that stay in place */}
        <span className="premium-bg-icons">
          <Sun size={14} strokeWidth={2.5} className="bg-icon-sun" />
          <Moon size={14} strokeWidth={2.5} className="bg-icon-moon" />
        </span>
      </span>
    </button>
  );
}