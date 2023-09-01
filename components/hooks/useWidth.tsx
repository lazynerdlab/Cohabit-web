import { useLayoutEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState<number>(window?.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", (e: Record<string, any>) => {
      setWidth(e?.width);
    });
    return () => {
      window.removeEventListener("resize", (e: Record<string, any>) => {
        setWidth(e?.width);
      });
    };
  }, [window.innerWidth]);
  return width;
};

export default useWidth;
