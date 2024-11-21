// 3_5_4  Implement useReducer from scratch
/*
  В этом примере переключение между разными получателями всегда очищает текстовый ввод. Это связано с тем, что вы не хотите разделять черновик одного сообщения между несколькими получателями. Но было бы лучше, если бы ваше приложение "запоминало" черновики для каждого контакта отдельно, восстанавливая их при переключении контактов.

  Ваша задача - изменить структуру состояния таким образом, чтобы запоминать  отдельный черновик сообщения для каждого контакта. Вам потребуется внести несколько изменений в редуктор, начальное состояние и компоненты.

*/

import { useReducer } from 'react'
import './App.css'
import Chat from './Chat'
import ContactList from './ContactList'
import { initialState, messengerReducer } from './messengerReducer'

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState)
  const message = state.messages[state.selectedId]
  const contact = contacts.find(c => c.id === state.selectedId) ?? contacts[0]
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
