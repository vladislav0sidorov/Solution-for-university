// 4_4_3 Reset state without Effects
/*
  Этот компонент EditContact получает объект контакта, имеющий форму { id, name, email } в качестве пропса savedContact. Попробуйте отредактировать поля ввода имени и электронной почты. Когда вы нажмете кнопку Save, кнопка контакта над формой обновится на отредактированное имя. При нажатии кнопки Reset все изменения в форме будут отменены. Поиграйте с этим пользовательским интерфейсом, чтобы почувствовать его.

  Когда вы выбираете контакт с помощью кнопок вверху, форма сбрасывается, чтобы отразить данные этого контакта. Это делается с помощью эффекта внутри EditContact.js. Удалите этот эффект. Найдите другой способ сброса формы при изменении savedContact.id.
*/

import { useState } from 'react'
import ContactList from './ContactList'
import EditContact from './EditContact'

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts)
  const [selectedId, setSelectedId] = useState(0)
  const selectedContact = contacts.find(c => c.id === selectedId)!

  function handleSave(updatedData: ContactType) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData
      } else {
        return c
      }
    })
    setContacts(nextContacts)
  }

  return (
    <div>
      <ContactList contacts={contacts} selectedId={selectedId} onSelect={id => setSelectedId(id)} />
      <hr />
      <EditContact key={selectedId} savedContact={selectedContact} onSave={handleSave} />
    </div>
  )
}

export type ContactType = {
  id: number
  name: string
  email: string
}

const initialContacts: ContactType[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]
