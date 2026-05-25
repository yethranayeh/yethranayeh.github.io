import { useEffect, useState } from "react";

export function useIsFirstRender(): boolean {
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    setIsFirst(false);
  }, []);

  return isFirst;
}
