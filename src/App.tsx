// 4_4_1 Transform data without Effects
/*
  Приведенный ниже TodoList отображает список дел. Когда установлен флажок "Показывать только активные задания", завершенные задания не отображаются в списке. Независимо от того, какие из них видны, в нижнем колонтитуле отображается количество еще не завершенных дел.

  Упростите этот компонент, удалив все ненужные состояния и эффекты.
*/

import { useState } from 'react'
import { initialTodos, createTodo, Todo } from './todos'

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)
  const [showActive, setShowActive] = useState(false)

  const activeTodos = todos.filter(todo => !todo.completed)
  const visibleTodos = showActive ? activeTodos : todos

  return (
    <>
      <label>
        <input type="checkbox" checked={showActive} onChange={e => setShowActive(e.target.checked)} />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>
    </>
  )
}

function NewTodo({ onAdd }: { onAdd: (todo: Todo) => void }) {
  const [text, setText] = useState('')

  function handleAddClick() {
    setText('')
    onAdd(createTodo(text))
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  )
}
