// 4_3_1 Focus a field on mount
/*
  Используйте метод focus() input'а, чтобы заставить MyInput автоматически фокусироваться, когда он появляется на экране. Уже есть закомментированная реализация, но она не совсем работает. Разберитесь, почему он не работает, и исправьте это. (Если вы знакомы с атрибутом autoFocus, представьте, что его не существует: мы реализуем ту же функциональность с нуля).

  Чтобы убедиться, что ваше решение работает, нажмите "Показать форму" и убедитесь, что ввод получает фокус (становится выделенным и курсор помещается внутрь). Нажмите "Скрыть форму" и снова "Показать форму". Убедитесь, что вход снова выделен.

  MyInput должен фокусироваться только при монтаже, а не после каждого рендера. Чтобы убедиться в правильности поведения, нажмите "Показать форму", а затем несколько раз нажмите на флажок "Сделать прописными". Нажатие на флажок не должно не фокусировать ввод над ним.
*/

import { useState } from 'react'
import MyInput from './MyInput.js'

export default function Form() {
  const [show, setShow] = useState(false)
  const [name, setName] = useState('Taylor')
  const [upper, setUpper] = useState(false)
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your name:
            <MyInput value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            <input type="checkbox" checked={upper} onChange={e => setUpper(e.target.checked)} />
            Make it uppercase
          </label>
          <p>
            Hello, <b>{upper ? name.toUpperCase() : name}</b>
          </p>
        </>
      )}
    </>
  )
}
