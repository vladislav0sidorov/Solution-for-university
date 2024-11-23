// 3_4_1 Fix disappearing input text
/*
  Этот пример показывает сообщение при нажатии на кнопку. Однако при нажатии кнопки также происходит случайный сброс ввода. Почему так происходит? Исправьте, чтобы нажатие кнопки не сбрасывало вводимый текст.
*/

import { useState } from 'react'

export default function App() {
  const [showHint, setShowHint] = useState(false)
  const [formText, setFormText] = useState('')

  if (showHint) {
    return (
      <div>
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
        <Form
          text={formText}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setFormText(event.target.value)
          }}
        />
        <button
          onClick={() => {
            setShowHint(false)
          }}
        >
          Hide hint
        </button>
      </div>
    )
  }
  return (
    <div>
      <Form
        text={formText}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setFormText(event.target.value)
        }}
      />
      <button
        onClick={() => {
          setShowHint(true)
        }}
      >
        Show hint
      </button>
    </div>
  )
}

function Form({ text, onChange }: { text: string; onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return <textarea value={text} onChange={onChange} />
}
