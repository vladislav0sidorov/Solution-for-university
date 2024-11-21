// 2_7_4 Fix the mutations using Immer
/*
    В этом примере все обработчики событий в App.js используют мутацию. В результате редактирование и удаление todos не работает. Перепишите handleAddTodo, handleChangeTodo и handleDeleteTodo с помощью Immer
*/

import { useImmer } from 'use-immer'
import AddTodo from './AddTodo'
import TaskList from './TaskList'

export type Todo = {
  id: number
  title: string
  done: boolean
}

let nextId = 3
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false }
]

export default function TaskApp() {
  const [todos, setTodos] = useImmer(initialTodos)

  function handleAddTodo(title: string) {
    setTodos(draft => {
      draft.push({
        id: nextId++,
        title: title,
        done: false
      })
    })
  }

  function handleChangeTodo(nextTodo: Todo) {
    setTodos(draft => {
      const todo = draft.find(t => t.id === nextTodo.id)!
      todo.title = nextTodo.title
      todo.done = nextTodo.done
    })
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(draft => {
      const index = draft.findIndex(t => t.id === todoId)
      draft.splice(index, 1)
    })
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
    </>
  )
}
