import { Contact } from './App'

type ContactListProps = {
  contacts: Contact[]
  selectedId: number
  dispatch: React.Dispatch<any>
}

export default function ContactList({ contacts, selectedId, dispatch }: ContactListProps) {
  return (
    <section className="contact-list">
      {contacts.map(contact => (
        <button
          key={contact.id}
          className={selectedId === contact.id ? 'selected' : ''}
          onClick={() => {
            dispatch({
              type: 'selected_contact',
              contactId: contact.id
            })
          }}
        >
          {contact.name}
        </button>
      ))}
    </section>
  )
}
