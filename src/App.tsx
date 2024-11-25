// 4_4_4 Submit a form without Effects
/*
  Этот компонент Form позволяет вам отправить сообщение другу. Когда вы отправляете форму, переменная состояния showForm устанавливается в false. Это вызывает Эффект, вызывающий sendMessage(message), который отправляет сообщение (вы можете увидеть его в консоли). После отправки сообщения вы видите диалог "Спасибо" с кнопкой "Открыть чат", которая позволяет вам вернуться к форме.

  Пользователи вашего приложения отправляют слишком много сообщений. Чтобы немного усложнить общение в чате, вы решили показывать диалог "Спасибо" первым, а не форму. Измените переменную состояния showForm так, чтобы она инициализировалась значением false вместо true. Как только вы сделаете это изменение, консоль покажет, что было отправлено пустое сообщение. Что-то в этой логике неправильно!

  В чем первопричина этой проблемы? И как вы можете ее устранить?
*/

import { useState } from 'react'

export default function Form() {
  const [showForm, setShowForm] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(message)
    setShowForm(false)
  }

  if (!showForm) {
    return (
      <>
        <h1>Thanks for using our services!</h1>
        <button
          onClick={() => {
            setMessage('')
            setShowForm(true)
          }}
        >
          Open chat
        </button>
      </>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="submit" disabled={message === ''}>
        Send
      </button>
    </form>
  )
}

function sendMessage(message: string) {
  console.log('Sending message: ' + message)
}
