// 3_5_4  Implement useReducer from scratch
/*
  В предыдущих примерах вы импортировали хук useReducer из React. В этот раз вам предстоит реализовать хук useReducer самостоятельно! Вот заглушка для начала работы. Он не должен занимать более 10 строк кода.

  Чтобы проверить свои изменения, попробуйте ввести текст в поле ввода или выбрать контакт.
*/

import { useReducer } from './myUseReducer'
import Chat from './Chat'
import ContactList from './ContactList'
import { initialState, messengerReducer } from './messengerReducer'

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState)
  const message = state.messages[state.selectedId]
  const contact = contacts.find(c => c.id === state.selectedId)!
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <ContactList contacts={contacts} selectedId={state.selectedId} dispatch={dispatch} />
      <Chat key={contact.id} message={message} contact={contact} dispatch={dispatch} />
    </div>
  )
}

export type Contact = {
  id: number
  name: string
  email: string
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]
