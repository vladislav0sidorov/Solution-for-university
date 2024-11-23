// 3_4_3 Reset a detail form
/*
  Это редактируемый список контактов. Вы можете редактировать данные выбранного контакта, а затем либо нажать "Сохранить", чтобы обновить его, либо "Сбросить", чтобы отменить изменения.

  Когда вы выбираете другой контакт (например, Алису), состояние обновляется, но форма продолжает показывать данные предыдущего контакта. Исправьте это так, чтобы форма сбрасывалась при изменении выбранного контакта.
*/

import { useState } from 'react'
import ContactList from './ContactList'
import EditContact from './EditContact'

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts)
  const [selectedId, setSelectedId] = useState(0)
  const selectedContact = contacts.find(c => c.id === selectedId)!

  function handleSave(updatedData: Contact) {
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
      <EditContact key={selectedId} initialData={selectedContact} onSave={handleSave} />
    </div>
  )
}

export type Contact = {
  id: number
  name: string
  email: string
}

const initialContacts: Contact[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]
