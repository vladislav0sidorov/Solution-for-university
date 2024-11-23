import { useState } from 'react'

export default function AddItem({ onAddItem }: { onAddItem: (title: string) => void }) {
  const [title, setTitle] = useState('')
  return (
    <>
      <input placeholder="Add item" value={title} onChange={e => setTitle(e.target.value)} />
      <button
        onClick={() => {
          setTitle('')
          onAddItem(title)
        }}
      >
        Add
      </button>
    </>
  )
}
