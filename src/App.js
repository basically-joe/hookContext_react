import React, { Component } from 'react'
import CounterClass from './CounterClass'
import CounterHooks from './CounterHooks'
import CounterReducerHook from "./CounterReducerHook"
import ContextHookProvider from './ContextHookProvider'
import ContextHookConsumer from './ContextHookConsumer'

class App extends Component {
  render() {
    return (
      <>
        {/* <CounterClass />
        <CounterHooks /> */}
        <CounterReducerHook/>
        <ContextHookProvider>
            <ContextHookConsumer />
        </ContextHookProvider>
      </>
    )
  }
}

export default App
