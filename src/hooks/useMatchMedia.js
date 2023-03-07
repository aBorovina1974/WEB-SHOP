import { useState, useEffect, useRef } from "react";

const useMatchMedia = (width = 810) => {
  const [isMatch, setIsMatch] = useState(false);
  const matchMediaRef = useRef(null);

  useEffect(() => {
    matchMediaRef.current = window.matchMedia(`(min-width: ${width}px) `);
    const initialMatch = matchMediaRef.current.matches;

    if (initialMatch) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }

    const test = (event) => {
      if (event.matches) {
        setIsMatch(true);
      } else {
        setIsMatch(false);
      }
    };

    matchMediaRef.current.addListener(test);

    return () => {
      matchMediaRef.current.removeListener(test);
    };
  }, [width]);

  return isMatch;
};

export default useMatchMedia;
