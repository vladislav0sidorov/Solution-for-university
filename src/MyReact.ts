import { useState } from 'react'

export function useReducer<State, Action>(
  reducer: (state: State, action: Action) => State,
  initialState: State
): [State, (action: Action) => void] {
  const [state, setState] = useState(initialState)

  function dispatch(action: Action) {
    setState(state => reducer(state, action))
  }

  return [state, dispatch]
}
