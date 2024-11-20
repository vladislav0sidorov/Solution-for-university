import { useState } from 'react'

// 2_2_2 Fix stuck form inputs
/*
  Когда вы вводите текст в поля ввода, ничего не появляется. Как будто входные значения "застряли" с пустыми строками. "Значение" первого <input> установлено так, чтобы всегда соответствовать переменной firstName, а "значение" второго <input> установлено так, чтобы всегда соответствовать переменной lastName. Это правильно. Оба входа имеют обработчики событий onChange, которые пытаются обновить переменные на основе последнего введенного пользователем значения (e.target.value). Однако переменные, похоже, не "запоминают" свои значения между повторными рендерингами. Исправьте это, используя вместо них переменные состояния.
*/

export default function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value)
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input placeholder="First name" value={firstName} onChange={handleFirstNameChange} />
      <input placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  )
}
