// 4_7_3 Fix a reconnecting chat
/*
  В этом примере каждый раз, когда вы нажимаете кнопку "Toggle theme", чат переподключается. Почему это происходит? Исправьте ошибку, чтобы чат переподключался только тогда, когда вы редактируете URL сервера или выбираете другой чат.

  Относитесь к chat.ts как к внешней сторонней библиотеке: вы можете обратиться к ней, чтобы проверить ее API, но не редактируйте ее.
*/

import { useState, useMemo } from 'react'
import ChatRoom from './ChatRoom.js'

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const [roomId, setRoomId] = useState('general')
  const [serverUrl, setServerUrl] = useState('https://localhost:1234')

  const options = useMemo(
    () => ({
      serverUrl: serverUrl,
      roomId: roomId
    }),
    [serverUrl, roomId]
  )

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>Toggle theme</button>
      <label>
        Server URL: <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <label>
        Choose the chat room:{' '}
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom options={options} />
    </div>
  )
}
