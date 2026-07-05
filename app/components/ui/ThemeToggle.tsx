// app/components/ui/ThemeToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // ✅ Initialisation paresseuse – le thème est déterminé dès le premier rendu client
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Sur le serveur, on renvoie une valeur par défaut (light)
    if (typeof window === "undefined") return "light";

    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved === "light" || saved === "dark") {
      // Applique la classe immédiatement pour éviter un flash
      document.documentElement.classList.toggle("dark", saved === "dark");
      return saved;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial = prefersDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", initial === "dark");
    return initial;
  });

  // ⏱️ Indique que le composant est monté (pour éviter l'erreur d'hydratation)
  // On désactive la règle ESLint car c'est un cas d'usage standard pour Next.js
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // 🔄 Synchronise le DOM et localStorage à chaque changement de thème
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 🖼️ Placeholder avant le montage (évite la désynchronisation client/serveur)
  if (!mounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Basculer le thème"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
}
