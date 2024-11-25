// 4_5_1 Fix reconnecting on every keystroke
/*
  В этом примере компонент ChatRoom подключается к чату, когда он монтируется, отключается, когда размонтируется, и снова подключается, когда вы выбираете другой чат. Такое поведение является правильным, поэтому необходимо, чтобы оно работало.

  Однако существует проблема. Всякий раз, когда вы вводите текст в поле ввода сообщения внизу, ChatRoom также переподключается к чату. (Вы можете заметить это, очистив консоль и введя текст в поле ввода). Исправьте проблему, чтобы этого не происходило.
*/

import { useState, useEffect } from 'react'
import { createConnection } from './chat'

const serverUrl = 'https://localhost:1234'

function ChatRoom({ roomId }: { roomId: string }) {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, [roomId])

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
    </>
  )
}

export default function App() {
  const [roomId, setRoomId] = useState('general')
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  )
}
