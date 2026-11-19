"use client";

import { useEffect, useState } from "react";

/** Current time in Tashkent (UTC+5), "HH:MM". Empty on the server to avoid hydration mismatch. */
export function useTashkentClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date(Date.now() + 5 * 3600 * 1000).toISOString().slice(11, 16));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time || "--:--";
}
