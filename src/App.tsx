// 3_3_1 Synced inputs
/*
  Эти два входа являются независимыми. Сделайте их синхронизированными: редактирование одного входа должно обновить другой вход с тем же текстом, и наоборот.
*/

import { useState } from 'react'

export default function SyncedInputs() {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <Input onChange={setInputValue} value={inputValue} label="First input" />
      <Input onChange={setInputValue} value={inputValue} label="Second input" />
    </>
  )
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  function handleChange(e: any) {
    onChange(e.target.value)
  }

  return (
    <label>
      {label} <input value={value} onChange={handleChange} />
    </label>
  )
}
