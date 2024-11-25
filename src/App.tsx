// 4_3_4 Fix fetching inside an Effect
/*
  Этот компонент показывает биографию для выбранного человека. Он загружает биографию, вызывая асинхронную функцию fetchBio(person) при монтировании и при каждом изменении person. Эта асинхронная функция возвращает Promise, который в конечном итоге разрешается в строку. Когда выборка завершена, вызывается setBio для отображения этой строки в поле выбора.

  В этом коде есть ошибка. Начните с выбора "Алисы". Затем выберите "Боб" и сразу после этого выберите "Тейлор". Еслsи вы сделаете это достаточно быстро, вы заметите эту ошибку: Тейлор выбран, но в абзаце ниже написано "Это биография Боба".

  Почему так происходит? Исправьте ошибку внутри этого Эффекта.
*/

import { useState, useEffect } from 'react'
import { fetchBio } from './api.js'

export default function Page() {
  const [person, setPerson] = useState('Alice')
  const [bio, setBio] = useState<string | null>(null)

  useEffect(() => {
    let ignore = false
    setBio(null)

    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result)
      }
    })

    return () => {
      ignore = true
    }
  }, [person])

  return (
    <>
      <select
        value={person}
        onChange={e => {
          setPerson(e.target.value)
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </>
  )
}
