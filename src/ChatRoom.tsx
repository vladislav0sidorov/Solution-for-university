import { useEffect } from 'react'
import { createConnection, Options } from './chat'

export default function ChatRoom({ options }: { options: Options }) {
  useEffect(() => {
    const connection = createConnection(options)
    connection.connect()
    return () => connection.disconnect()
  }, [options])

  return <h1>Welcome to the {options.roomId} room!</h1>
}
