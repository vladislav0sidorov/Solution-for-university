// 3_3_1 Synced inputs
/*
  Эти два входа являются независимыми. Сделайте их синхронизированными: редактирование одного входа должно обновить другой вход с тем же текстом, и наоборот.
*/

import { useState } from 'react'
import { letters } from './data.js'
import Letter from './Letter.js'

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const selectedCount = selectedIds.length

  function handleToggle(toggledId: number) {
    setSelectedIds(prevIds => {
      if (prevIds.includes(toggledId)) {
        return prevIds.filter(id => id !== toggledId)
      } else {
        return [...prevIds, toggledId]
      }
    })
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter key={letter.id} letter={letter} isSelected={selectedIds.includes(letter.id)} onToggle={handleToggle} />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  )
}
