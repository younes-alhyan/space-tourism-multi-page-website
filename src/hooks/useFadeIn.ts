import { useState, useEffect, useCallback } from "react";

export function useFadeIn(duration = 300) {
  const [fadeIn, setFadeIn] = useState(true);

  const triggerFade = useCallback(() => {
    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
    }, duration);
  }, [duration]);

  useEffect(() => {
    triggerFade(); 
  }, [triggerFade]);

  return { fadeIn, triggerFade };
}
