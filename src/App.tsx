// 3_3_2 Filtering a list
/*
  В этом примере SearchBar имеет собственное состояние query, которое управляет вводом текста. Его родительский компонент FilterableList отображает список элементов, но он не учитывает поисковый запрос.

  Используйте функцию filterItems(foods, query) для фильтрации списка в соответствии с поисковым запросом. Чтобы проверить ваши изменения, проверьте, что ввод "s" в поле ввода отфильтровывает список до "Sushi", "Shish kebab" и "Dim sum".

  Обратите внимание, что filterItems уже реализован и импортирован, поэтому вам не нужно писать его самостоятельно!
*/

import { useState } from 'react'
import { foods, filterItems, Item } from './data'

export default function FilterableList() {
  const [query, setQuery] = useState('')
  const filteredItems = filterItems(foods, query)

  return (
    <>
      <SearchBar query={query} onChange={setQuery} />
      <hr />
      <List items={filteredItems} />
    </>
  )
}

function SearchBar({ query, onChange }: { query: string; onChange: (query: string) => void }) {
  function handleChange(e: any) {
    onChange(e.target.value)
  }

  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  )
}

function List({ items }: { items: Item[] }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
