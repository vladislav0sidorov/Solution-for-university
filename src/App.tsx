// 4_8_3 Extract useInterval out of useCounter
/*
  В настоящее время ваш хук useCounter делает две вещи. Он устанавливает интервал, а также увеличивает переменную состояния при каждом тике интервала. Выделите логику, которая устанавливает интервал, в отдельный хук под названием useInterval. Он должен принимать два аргумента: обратный вызов onTick и delay. После этого изменения ваша реализация useCounter должна выглядеть следующим образом:

  export function useCounter(delay) {
    const [count, setCount] = useState(0);
    useInterval(() => {
        setCount((c) => c + 1);
    }, delay);
    return count;
  }
*/

import { useCounter } from './useCounter.js'

export default function Counter() {
  const count = useCounter(1000)
  return <h1>Seconds passed: {count}</h1>
}
