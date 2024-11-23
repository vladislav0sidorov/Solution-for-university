import { useState } from 'react'

// 3_1_2 Profile editor
/*
    В проекте приведена форма, реализованная на чистом JavaScript.

    Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, а в режиме просмотра - только результат. Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, в каком режиме вы находитесь. Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

    Представьте, что React не существует. Можете ли вы переделать код в index.js таким образом, чтобы сделать логику менее хрупкой и более похожей на версию React? Как бы это выглядело, если бы состояние было явным, как в React?
*/

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('Jane')
  const [lastName, setLastName] = useState('Jacobs')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsEditing(!isEditing)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First name: {isEditing ? <input value={firstName} onChange={e => setFirstName(e.target.value)} /> : <b>{firstName}</b>}</label>
      <label>Last name: {isEditing ? <input value={lastName} onChange={e => setLastName(e.target.value)} /> : <b>{lastName}</b>}</label>
      <button type="submit">{isEditing ? 'Save' : 'Edit'} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  )
}
