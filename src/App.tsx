// 4_8_1 Extract a useCounter Hook
/*
  Этот компонент использует переменную состояния и Эффект для отображения числа, которое увеличивается каждую секунду. Извлеките эту логику в пользовательский хук под названием useCounter. Ваша цель состоит в том, чтобы реализация компонента Counter выглядела именно так:

  import { useCounter } from "./useCounter";

  export default function Counter() {
    const count = useCounter();
    return <h1>Seconds passed: {count}</h1>;
  }

*/

import { useCounter } from './useCounter'

export default function Counter() {
  const count = useCounter()
  return <h1>Seconds passed: {count}</h1>
}
