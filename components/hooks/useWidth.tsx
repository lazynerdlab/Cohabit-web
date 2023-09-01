import { useLayoutEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState<number>(600);
  useLayoutEffect(() => {
    window.addEventListener("resize", (e: Record<string, any>) => {
      setWidth(e?.width);
    });
    return () => {
      window.removeEventListener("resize", (e: Record<string, any>) => {
        setWidth(e?.width);
      });
    };
  }, []);
  return width;
};

export default useWidth;
