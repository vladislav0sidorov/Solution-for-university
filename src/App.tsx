// 4_3_2 Focus a field conditionally
/*
  Эта форма отображает два компонента <MyInput />.

  Нажмите "Показать форму" и обратите внимание, что второе поле автоматически фокусируется. Это происходит потому, что оба компонента <MyInput /> пытаются сфокусировать поле внутри. Когда вы вызываете focus() для двух полей ввода подряд, последнее всегда "побеждает".

  Допустим, вы хотите сфокусировать первое поле. Первый компонент MyInput теперь получает булево свойство shouldFocus, установленное в true. Измените логику так, чтобы focus() вызывалась только в том случае, если пропс shouldFocus, полученный MyInput, равен true.
*/

import { useState } from 'react'
import MyInput from './MyInput.js'

export default function Form() {
  const [show, setShow] = useState(false)
  const [firstName, setFirstName] = useState('Taylor')
  const [lastName, setLastName] = useState('Swift')
  const [upper, setUpper] = useState(false)
  const name = firstName + ' ' + lastName
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput value={firstName} onChange={e => setFirstName(e.target.value)} shouldFocus={true} />
          </label>
          <label>
            Enter your last name:
            <MyInput value={lastName} onChange={e => setLastName(e.target.value)} shouldFocus={false} />
          </label>
          <p>
            Hello, <b>{upper ? name.toUpperCase() : name}</b>
          </p>
        </>
      )}
    </>
  )
}
