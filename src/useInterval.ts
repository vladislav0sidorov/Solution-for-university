import { useEffect } from 'react';

export function useInterval(onTick: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [onTick, delay]);
}
