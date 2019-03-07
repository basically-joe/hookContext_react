import React, { useContext } from 'react'

import { Context } from './ContextHookProvider'

const ContextHookConsumer = () => {
  const { counter, updateCounter } = useContext(Context)
  return (
    <div>
      <h1>Context Context: {counter} </h1>
      <button onClick={() => updateCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default ContextHookConsumer