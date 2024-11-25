// 4_3_2 Focus a field conditionally
/*
  Этот компонент Counter отображает счетчик, который должен увеличиваться каждую секунду. При монтировании он вызывает setInterval. Это заставляет функцию onTick выполняться каждую секунду. Функция onTick увеличивает счетчик.

  Однако вместо того, чтобы увеличиваться один раз в секунду, она увеличивается дважды. Почему так происходит? Найдите причину ошибки и исправьте ее.
*/
import { useState } from 'react'
import Counter from './Counter.js'

export default function Form() {
  const [show, setShow] = useState(false)
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  )
}
