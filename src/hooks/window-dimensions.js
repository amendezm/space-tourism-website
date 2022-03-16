import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const resizeListener = window.addEventListener(
      "resize",
      handleWindowResize
    );
    const domLoadedListener = window.addEventListener(
      "DOMContentLoaded",
      handleWindowResize
    );

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("DOMContentLoaded", domLoadedListener);
    };
  }, []);

  return dimensions;
};

export { useWindowDimensions };
