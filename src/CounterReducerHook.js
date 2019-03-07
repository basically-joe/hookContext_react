import React, { useReducer } from 'react'

const CounterReducerHook = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1

      default:
        return state
    }
  }, 0)

  return (
    <div>
      <h1>Counter Reducer Hook: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}

export default CounterReducerHook