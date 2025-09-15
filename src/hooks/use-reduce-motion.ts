import { useEffect, useState } from "react";

const STORAGE_KEY = "ksu_reduce_motion";

export function useReduceMotion() {
  const [reduceMotion, setReduceMotion] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reduceMotion));
    } catch {
      // ignore write errors
    }
    const el = document.body;
    if (!el) return;
    el.classList.toggle("reduce-motion", reduceMotion);
  }, [reduceMotion]);

  return { reduceMotion, setReduceMotion } as const;
}

