export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};


let nextId = 0;

export function createTodo(text: string, completed = false): Todo {
  return {
    id: nextId++,
    text,
    completed
  };
}

export const initialTodos: Todo[] = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];
