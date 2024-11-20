// 2_1_2 Wire up the events
/*
  Этот компонент ColorSwitch отображает кнопку. Он должен менять цвет страницы. Подключите его к обработчику события onChangeColor, который он получает от родителя, чтобы щелчок по кнопке изменил цвет.

  После того, как вы это сделаете, обратите внимание, что нажатие на кнопку также увеличивает счетчик нажатий на страницу. Ваш коллега, написавший родительский компонент, настаивает, что onChangeColor не увеличивает никаких счетчиков. Что еще может происходить? Исправьте это так, чтобы нажатие на кнопку только изменяло цвет и не увеличивало счетчик.
*/

import { useState } from 'react'

function ColorSwitch({ onChangeColor }: { onChangeColor: () => void }) {
  return (
    <button
      onClick={e => {
        e.stopPropagation()
        onChangeColor()
      }}
    >
      Change color
    </button>
  )
}

export default function App() {
  const [clicks, setClicks] = useState(0)

  function handleClickOutside() {
    setClicks(c => c + 1)
  }

  function getRandomLightColor() {
    const r = 150 + Math.round(100 * Math.random())
    const g = 150 + Math.round(100 * Math.random())
    const b = 150 + Math.round(100 * Math.random())
    return `rgb(${r}, ${g}, ${b})`
  }

  function handleChangeColor() {
    const bodyStyle = document.body.style
    bodyStyle.backgroundColor = getRandomLightColor()
  }

  return (
    <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  )
}
