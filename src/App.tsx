// 4_8_2 Make the counter delay configurable
/*
  Этот компонент использует переменную состояния и Эффект для отображения В этом примере есть переменная состояния delay, управляемая ползунком, но ее значение не используется. Передайте значение delay в ваш пользовательский хук useCounter, и измените хук useCounter, чтобы он использовал переданную delay вместо жесткого кодирования 1000 мс.
*/

import { useState } from 'react'
import { useCounter } from './useCounter.js'

export default function Counter() {
  const [delay, setDelay] = useState(1000)
  const count = useCounter(delay)
  return (
    <>
      <label>
        Tick duration: {delay} ms
        <br />
        <input type="range" value={delay} min="10" max="2000" onChange={e => setDelay(Number(e.target.value))} />
      </label>
      <hr />
      <h1>Ticks: {count}</h1>
    </>
  )
}
