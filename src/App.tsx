// 2_2_3 Fix a crash
/*
  Вот небольшая форма, которая должна позволить пользователю оставить отзыв. Когда отзыв отправлен, предполагается отобразить сообщение с благодарностью. Однако при этом происходит сбой с сообщением об ошибке: "Rendered lesser hooks than expected". Можете ли вы заметить ошибку и исправить ее?
*/

import { useState } from 'react'

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState('')

  if (isSent) {
    return <h1>Thank you!</h1>
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        alert(`Sending: "${message}"`)
        setIsSent(true)
      }}
    >
      <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
      <br />
      <button type="submit">Send</button>
    </form>
  )
}
