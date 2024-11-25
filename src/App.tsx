// 4_5_3 Investigate a stale value bug
/*
  В этом примере розовая точка должна двигаться, когда флажок включен, и прекращать движение, когда флажок выключен. Логика для этого уже реализована: обработчик события handleMove проверяет переменную состояния canMove.

  Однако по какой-то причине переменная состояния canMove внутри handleMove кажется "несвежей": она всегда true, даже после того, как вы установили флажок. Как такое возможно? Найдите ошибку в коде и исправьте ее.
*/

import { useState, useEffect } from 'react'

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [canMove, setCanMove] = useState(true)

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      if (canMove) {
        setPosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [canMove])

  return (
    <>
      <label>
        <input type="checkbox" checked={canMove} onChange={e => setCanMove(e.target.checked)} />
        The dot is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40
        }}
      />
    </>
  )
}
