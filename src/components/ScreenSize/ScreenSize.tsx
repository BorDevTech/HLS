import { useEffect, useState } from "react";

const ScreenSize = () => {
  const [windowSize, setWindowSize] = useState({ winHeight: 0, winWidth: 0 });

  const determineSize = () => {
    setTimeout(() => {
      setWindowSize({
        ...windowSize,
        winHeight: innerHeight,
        winWidth: innerWidth,
      });
    }, 1 * 10);
  };
  useEffect(() => {
    addEventListener("resize", determineSize);
    return () => {
      removeEventListener("resize", determineSize);
    };
  }, []);
  return windowSize;
};

export default ScreenSize;
