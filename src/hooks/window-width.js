import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    const listener = window.addEventListener("resize", handleWindowResize);

    return window.removeEventListener("resize", listener);
  }, []);

  return width;
};

export { useWindowWidth };
