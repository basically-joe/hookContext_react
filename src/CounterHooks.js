import React, { useState } from 'react'

const CounterHooks = () => {
  const [count, updateCount] = useState(0) // state (count), then how you update it (updateCount)

  const [value, updateValue] = useState("Mary Poppins") // easily captures state from input using hooks, see input below
  return (
    <div>
      <h1>Counter Hooks: {count}</h1>
      <button onClick={() => updateCount(count + 1)}>Increment</button> 
      <input value ={value} onChange={e => updateValue(e.target.value)}/> 
    </div>
  )
}

export default CounterHooks
