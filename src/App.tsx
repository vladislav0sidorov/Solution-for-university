// 4_6_1 Fix a variable that doesn’t update
/*
  Этот компонент Timer хранит переменную состояния count, которая увеличивается каждую секунду. Значение, на которое она увеличивается, хранится в переменной состояния increment. Вы можете управлять переменной increment с помощью кнопок плюс и минус.

  Однако, сколько бы раз вы ни нажали на кнопку с плюсом, счетчик все равно увеличивается на единицу каждую секунду. Что не так с этим кодом? Почему increment всегда равен 1 в коде Effect'а? Найдите ошибку и исправьте ее.
*/

import { useState, useEffect } from 'react'

export default function Timer() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + increment)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [increment])

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => {
            setIncrement(i => i - 1)
          }}
        >
          –
        </button>
        <b>{increment}</b>
        <button
          onClick={() => {
            setIncrement(i => i + 1)
          }}
        >
          +
        </button>
      </p>
    </>
  )
}
