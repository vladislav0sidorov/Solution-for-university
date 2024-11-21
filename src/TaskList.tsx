import { useState } from 'react'
import { Todo } from './App'

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}: {
  todos: Todo[]
  onChangeTodo: (nextTodo: Todo) => void
  onDeleteTodo: (todoId: number) => void
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  )
}

function Task({ todo, onChange, onDelete }: { todo: Todo; onChange: (nextTodo: Todo) => void; onDelete: (todoId: number) => void }) {
  const [isEditing, setIsEditing] = useState(false)
  let todoContent
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            })
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          })
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  )
}
