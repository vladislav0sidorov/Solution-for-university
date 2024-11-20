// 2_4_1 Implement a traffic light
/*
  Здесь представлен компонент светофора для пешеходного перехода, который включается при нажатии на кнопку.

  Добавьте alert в обработчик нажатия. Когда свет зеленый и говорит "Идти", щелчок по кнопке должен говорить "Следующая остановка". Когда свет красный и говорит "Стоп", нажатие на кнопку должно говорить "Следующим будет идти".

  Есть ли разница в том, поместить ли alert до или после вызова setWalk?
*/

import { useState } from 'react'

export default function TrafficLight() {
  const [walk, setWalk] = useState(true)

  function handleClick() {
    if (walk) {
      alert('Следующая остановка')
    } else {
      alert('Следующим будет идти')
    }
    setWalk(!walk)
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
      <h1
        style={{
          color: walk ? 'darkgreen' : 'darkred'
        }}
      >
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  )
}
