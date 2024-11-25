import { useState } from 'react'
import { ContactType } from './App'

export default function EditContact({ savedContact, onSave }: { savedContact: ContactType; onSave: (contact: ContactType) => void }) {
  const [name, setName] = useState(savedContact.name)
  const [email, setEmail] = useState(savedContact.email)

  return (
    <section>
      <label>
        Name: <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email: <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <button
        onClick={() => {
          onSave({
            id: savedContact.id,
            name: name,
            email: email
          })
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setName(savedContact.name)
          setEmail(savedContact.email)
        }}
      >
        Reset
      </button>
    </section>
  )
}
