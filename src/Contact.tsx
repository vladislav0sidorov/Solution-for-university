import { ContactType } from './App'

interface ContactProps {
  contact: ContactType
  isExpanded: boolean
  onToggle: () => void
}

export default function Contact({ contact, isExpanded, onToggle }: ContactProps) {
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {isExpanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button onClick={onToggle}>{isExpanded ? 'Hide' : 'Show'} email</button>
    </>
  )
}
