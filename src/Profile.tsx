import { useState } from 'react'
import { Person } from './App'
import { getImageUrl } from './utils'

export default function Profile({ person }: { person: Person }) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img className="avatar" src={getImageUrl(person)} alt={person.name} />
      {isExpanded && (
        <p>
          <i>{person.name} является лауреатом нобелевской премии.</i>
        </p>
      )}
      <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Свернуть' : 'Развернуть'}</button>
    </section>
  )
}
