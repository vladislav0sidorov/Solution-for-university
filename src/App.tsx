// 4_5_2 Switch synchronization on and off
/*
  В этом примере Эффект подписывается на событие window pointermove, чтобы переместить розовую точку на экране. Попробуйте навести курсор на область предварительного просмотра (или коснуться экрана, если вы пользуетесь мобильным устройством) и посмотрите, как розовая точка следует за вашим движением.

  Также имеется флажок. Установка флажка переключает переменную состояния canMove, но эта переменная состояния не используется нигде в коде. Ваша задача - изменить код так, чтобы при значении canMove, равном false (флажок снят), точка переставала двигаться. После того, как вы снова включите флажок (и установите canMove в true), точка снова должна следовать за движением. Другими словами, то, может ли точка двигаться или нет, должно синхронизироваться с тем, установлен ли флажок.
*/

import { useState, useEffect } from 'react'

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [canMove, setCanMove] = useState(true)

  useEffect(() => {
    if (!canMove) return

    function handleMove(e: PointerEvent) {
      setPosition({ x: e.clientX, y: e.clientY })
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
