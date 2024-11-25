// 4_4_2 Cache a calculation without Effects
/*
  В этом примере фильтрация тодосов была вынесена в отдельную функцию под названием getVisibleTodos(). Эта функция содержит внутри себя вызов console.log(), который поможет вам заметить, когда она вызывается. Установите флажок "Показывать только активные тодосы" и обратите внимание, что это вызывает повторный запуск getVisibleTodos(). Это ожидаемо, поскольку видимые тодосы меняются, когда вы переключаете, какие из них показывать.

  Ваша задача - удалить эффект, который пересчитывает список visibleTodos в компоненте TodoList. Однако, вам нужно убедиться, что getVisibleTodos() не повторно запускается (и поэтому не печатает никаких логов), когда вы вводите данные в input.
*/

import { useState, useMemo } from 'react'
import { initialTodos, createTodo, getVisibleTodos } from './todos.js'

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)
  const [showActive, setShowActive] = useState(false)
  const [text, setText] = useState('')

  const visibleTodos = useMemo(() => getVisibleTodos(todos, showActive), [todos, showActive])

  function handleAddClick() {
    setText('')
    setTodos([...todos, createTodo(text)])
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={showActive} onChange={e => setShowActive(e.target.checked)} />
        Show only active todos
      </label>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
        ))}
      </ul>
    </>
  )
}
