// 4_1_2  Fix a component failing to re-render
/*
  Эта кнопка должна переключаться между отображением "Вкл" и "Выкл". Однако она всегда показывает "Выкл". Что не так с этим кодом? Исправьте это.
*/
import { useState } from 'react'

export default function Toggle() {
  const [isOn, setIsOn] = useState(false)
  const toggleHandler = () => setIsOn(prev => !prev)

  return <button onClick={toggleHandler}>{isOn ? 'Вкл' : 'Выкл'}</button>
}
