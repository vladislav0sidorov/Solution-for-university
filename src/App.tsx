// 3_5_1 Dispatch actions from event handlers
/*
  В настоящее время обработчики событий в ContactList и Chat имеют комментарии // TODO. Именно поэтому ввод текста не работает, а нажатие на кнопки не изменяет выбранного получателя.

  Замените эти два // TODO на код для dispatch соответствующих действий. Чтобы увидеть ожидаемую форму и тип действий, проверьте reducer в messengerReducer.js. Reducer уже написан, поэтому вам не придется его изменять. Вам нужно только диспетчеризировать действия в ContactList и Chat.

  PS. Не стоит искать смысла в этом приложении. Последнее отправленное сообщение хранится в состоянии и нигде не отображается.
*/

import { useReducer } from 'react'
import Chat from './Chat'
import ContactList from './ContactList'
import { initialState, messengerReducer } from './messengerReducer'

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState)
  const message = state.message
  const contact = contacts.find(c => c.id === state.selectedId)!
  return (
    <div>
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
