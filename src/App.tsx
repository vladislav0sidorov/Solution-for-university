// 1_7_1 Splitting a list in two
/*
  В этом примере показан список всех людей.

  Измените его, чтобы последовательно вывести два отдельных списка: Химики и Все остальные. Как и ранее, вы можете определить, является ли человек химиком, проверив, что person.profession === 'chemist'.
*/

import { people } from './data.js'
import { getImageUrl } from './util.js'

export type Person = {
  id: number
  name: string
  profession: string
  accomplishment: string
  imageId: string
}

export default function List() {
  const chemists = people.filter(person => person.profession === 'chemist')
  const others = people.filter(person => person.profession !== 'chemist')

  const chemistItems = chemists.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))

  const otherItems = others.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))

  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistItems}</ul>
      <h1>All Others</h1>
      <ul>{otherItems}</ul>
    </article>
  )
}
