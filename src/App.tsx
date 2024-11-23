// 3_2_3 Fix the disappearing selection
/*
    Выводится список писем, которые хранятся в переменной состояния letters. Когда вы наводите курсор или фокус на определенное письмо - оно выделяется (подсвечивается). Текущее выделенное письмо хранится в переменной состояния highlightedLetter. Вы можете "выделять" и "снимать выделение" отдельных писем, что приводит к обновлению массива letters в состоянии.

    Этот код работает, но есть небольшой сбой в пользовательском интерфейсе. Когда вы нажимаете "Star" или "Unstar", подсветка на мгновение исчезает. Однако она снова появляется, как только вы перемещаете указатель или переключаетесь на другое письмо с клавиатуры. Почему это происходит? Исправьте это, чтобы подсветка не исчезала после нажатия кнопки.
*/

import { useState } from 'react'
import AddItem from './AddItem.js'
import PackingList from './PackingList.js'

export type Item = {
  id: number
  title: string
  packed: boolean
}

let nextId = 3
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false }
]

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems)

  function handleAddItem(title: string) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ])
  }

  function handleChangeItem(nextItem: Item) {
    setItems(
      items.map(item => {
        if (item.id === nextItem.id) {
          return nextItem
        } else {
          return item
        }
      })
    )
  }

  function handleDeleteItem(itemId: number) {
    setItems(items.filter(item => item.id !== itemId))
  }

  const total = items.length
  const packed = items.filter(item => item.packed).length

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList items={items} onChangeItem={handleChangeItem} onDeleteItem={handleDeleteItem} />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  )
}
