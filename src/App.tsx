// 4_7_1 Fix a resetting interval
/*
  Этот Эффект устанавливает интервал, который тикает каждую секунду. Вы заметили, что происходит что-то странное: кажется, что интервал уничтожается и создается заново каждый раз, когда он тикает. Исправьте код так, чтобы интервал не создавался постоянно заново.
*/

import { useState, useEffect } from 'react'

export default function Timer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('✅ Creating an interval')
    const id = setInterval(() => {
      console.log('⏰ Interval tick')
      setCount(c => c + 1)
    }, 1000)
    return () => {
      console.log('❌ Clearing an interval')
      clearInterval(id)
    }
  }, [])

  return <h1>Counter: {count}</h1>
}
