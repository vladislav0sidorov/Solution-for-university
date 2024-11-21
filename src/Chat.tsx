import { Contact } from './App'

type ChatProps = {
  contact: Contact
  message: string
  dispatch: React.Dispatch<any>
}

export default function Chat({ contact, message, dispatch }: ChatProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={e => {
          dispatch({
            type: 'edited_message',
            message: e.target.value
          })
        }}
      />
    </section>
  )
}
