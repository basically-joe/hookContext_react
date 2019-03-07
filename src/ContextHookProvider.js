import React, { useState, createContext } from 'react'

const Context = createContext()

const ContextHookProvider = ({ children }) => {
  const [counter, updateCounter] = useState(0)
  return (
    <Context.Provider value={{ counter, updateCounter }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextHookProvider as default }