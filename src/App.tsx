// 4_5_4 Fix a connection switch
/*
  В этом примере сервис чата в chat.js раскрывает два различных API: createEncryptedConnection и createUnencryptedConnection. Корневой компонент App позволяет пользователю выбрать, использовать шифрование или нет, а затем передает соответствующий метод API дочернему компоненту ChatRoom в качестве пропса createConnection.

  Обратите внимание, что изначально в консольных журналах говорится, что соединение не зашифровано. Попробуйте установить флажок: ничего не произойдет. Однако если после этого вы измените выбранную комнату, то чат снова подключится и включит шифрование (как вы увидите из консольных сообщений). Это ошибка. Исправьте ошибку, чтобы переключение флажка также приводило к переподключению чата.
*/

import { useState, useCallback } from 'react'
import ChatRoom from './ChatRoom'
import { createEncryptedConnection, createUnencryptedConnection } from './chat'

export default function App() {
  const [roomId, setRoomId] = useState('general')
  const [isEncrypted, setIsEncrypted] = useState(false)

  const createConnection = useCallback(
    (serverUrl: string, roomId: string) => {
      if (isEncrypted) {
        return createEncryptedConnection(serverUrl, roomId)
      } else {
        return createUnencryptedConnection(serverUrl, roomId)
      }
    },
    [isEncrypted]
  )

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
      <label>
        <input type="checkbox" checked={isEncrypted} onChange={e => setIsEncrypted(e.target.checked)} />
        Enable encryption
      </label>
      <hr />
      <ChatRoom roomId={roomId} createConnection={createConnection} />
    </>
  )
}
